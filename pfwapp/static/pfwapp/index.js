document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d;
    (_a = document.querySelector('#home-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => ChangePage("home", "home-btn"));
    (_b = document.querySelector('#project-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => ChangePage("projects", "project-btn"));
    (_c = document.querySelector('#about-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => ChangePage("about", "about-btn"));
    (_d = document.querySelector('#contact-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => ChangePage("contact", "contact-btn"));
    ChangePage("home", "home-btn");
});
function ChangePage(pagetype, pageButton) {
    let pageBtns = document.querySelectorAll('.button');
    pageBtns.forEach(btn => {
        if (btn.id === `${pageButton}`) {
            btn.style.borderBottom = "1px solid #a594fd";
        }
        else {
            btn.style.borderBottom = "none";
        }
    });
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        if (page.id === `${pagetype}`) {
            page.style.display = "block";
        }
        else {
            page.style.display = "none";
        }
    });
}
//# sourceMappingURL=index.js.map