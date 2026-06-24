// comment
// js

// topbar
let lastScrollTop = 0;
const topBar = document.getElementById('topBar');

window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
if (currentScroll > lastScrollTop) {
    topBar.classList.add('hide');
} else if (currentScroll < lastScrollTop) {
    topBar.classList.remove('hide');
}

lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


/* copy text (used on contact)
function copytoclipboard(element) {
const text = element.innerText;
navigator.clipboard.writeText(text)
    .then(() => {
    element.classList.add("active");
    element.innerText = "Copied!";
    setTimeout(() => {
        element.classList.remove("active");
        element.innerText = text;
    }, 1500);
    })
    .catch(() => {
    alert("Failed to copy");
    });
}
*/

/* night mode
function toggleMode() {
const checkbox = document.getElementById("modeToggle");
const topBar = document.getElementById('topBar')

if (checkbox.checked) {
    topBar.classList.add('night');
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#eee";
} else {
    topBar.classList.remove('night');
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
}
}
*/