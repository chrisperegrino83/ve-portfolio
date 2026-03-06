const VERSION = '1.0.0';
const vEl = document.getElementById('siteVersion');
if (vEl) vEl.textContent = 'v' + VERSION;

// back to top button behavior
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
});
backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// highlight nav link for current section
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('header nav a');

function activateNav() {
    let index = sections.length;
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}
window.addEventListener('scroll', activateNav);
activateNav();

// scroll to h2 and flash highlight on click
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const section = document.getElementById(targetId);
        if (section) {
            const heading = section.querySelector('h2');
            if (heading) {
                heading.classList.add('highlight');
                setTimeout(() => heading.classList.remove('highlight'), 1200);
                heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});


// theme switcher (light/dark mode) using localStorage
const themeToggle = document.getElementById('themeToggle');
function updateThemeButtonTitle() {
    if (!themeToggle) return;
    const isDark = document.body.classList.contains('dark-mode');
    const next = isDark ? 'Switch to Light' : 'Switch to Dark';
    themeToggle.title = next;
    themeToggle.setAttribute('aria-label', next);
}
function setTheme(dark) {
    if (dark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('preferredTheme', 'light');
    }
    updateThemeButtonTitle();
}
// initialize
const saved = localStorage.getItem('preferredTheme');
if (saved === 'dark') {
    setTheme(true);
} else if (saved === 'light') {
    setTheme(false);
}
// ensure initial title reflects current state even if no saved preference
updateThemeButtonTitle();
// toggle handler
themeToggle.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    setTheme(dark);
});

function applyBg(i, list) {
    if (!list.length) return;
    const url = list[i % list.length];
    document.body.style.backgroundImage = 'url("' + url + '"), linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end))';
    document.body.classList.add('has-bg-image');
    localStorage.setItem('bgIndex', String(i % list.length));
}

const bgButton = document.getElementById('bgNext');
let bgImages = [];
let bgIndex = -1;
function validateImages(list) {
    return Promise.all(list.map(url => {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => resolve(null);
            img.src = url;
        });
    })).then(results => results.filter(Boolean));
}
if (bgButton) {
    const data = bgButton.dataset.bgImages || '';
    function sortBgList(list) {
        const re = /(^|[\\/])bg(\d+)\.(png|jpe?g|webp)$/i;
        const parsed = list.map((p) => {
            const m = p.match(re);
            return { p, n: m ? parseInt(m[2], 10) : NaN };
        });
        if (parsed.length && parsed.every(x => Number.isFinite(x.n))) {
            parsed.sort((a, b) => a.n - b.n);
            return parsed.map(x => x.p);
        }
        return list;
    }
    const initialList = sortBgList(data.split(',').map(s => s.trim()).filter(Boolean).slice(0, 10));
    validateImages(initialList).then(validList => {
        if (!validList.length) {
            bgButton.style.display = 'none';
            return;
        }
        bgImages = validList;
        const savedIndex = parseInt(localStorage.getItem('bgIndex') || '-1', 10);
        if (Number.isFinite(savedIndex) && savedIndex >= 0 && savedIndex < bgImages.length) {
            bgIndex = savedIndex;
            applyBg(bgIndex, bgImages);
        }
        bgButton.addEventListener('click', () => {
            if (!bgImages.length) return;
            bgIndex = (bgIndex + 1) % bgImages.length;
            applyBg(bgIndex, bgImages);
        });
    });
}

// Future ideas (not implemented):
// - Lightbox gallery for project images
// - Search/filter by keywords across sections
// - Animated progress bars or charts for skills
// - Form to collect feedback or contact info

