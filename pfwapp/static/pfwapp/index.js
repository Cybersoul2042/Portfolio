document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d;
    (_a = document.querySelector('#home-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => ChangePage("home"));
    (_b = document.querySelector('#project-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => ChangePage("projects"));
    (_c = document.querySelector('#about-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => ChangePage("about"));
    (_d = document.querySelector('#contact-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => ChangePage("contact"));
    ChangePage("home");
});
function ChangePage(pagetype) {
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