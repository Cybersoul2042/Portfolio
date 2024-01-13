document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d;
    (_a = document.querySelector('#home-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => ScrollToPage("home", "home-btn"));
    (_b = document.querySelector('#project-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => ScrollToPage("projects", "project-btn"));
    (_c = document.querySelector('#about-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => ScrollToPage("about", "about-btn"));
    (_d = document.querySelector('#contact-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => ScrollToPage("contact", "contact-btn"));
    ScrollToPage("home", "home-btn");
});
function ScrollToPage(pagetype, pageButton) {
    let pageBtns = document.querySelectorAll('.button');
    pageBtns.forEach(btn => {
        if (btn.id === `${pageButton}`) {
            btn.style.borderBottom = "1px solid #a594fd";
        }
        else {
            btn.style.borderBottom = "none";
        }
    });
    let page = document.getElementById(`${pagetype}`);
    if (pagetype === "home") {
        page === null || page === void 0 ? void 0 : page.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }
    else {
        page === null || page === void 0 ? void 0 : page.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
//# sourceMappingURL=index.js.map