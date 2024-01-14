document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g;
    (_a = document.querySelector('#home-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => ScrollToPage("home", "home-btn"));
    (_b = document.querySelector('#project-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => ScrollToPage("projects", "project-btn"));
    (_c = document.querySelector('#about-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => ScrollToPage("about", "about-btn"));
    (_d = document.querySelector('#contact-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => ScrollToPage("contact", "contact-btn"));
    (_e = document.querySelector('#contact-btn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => ScrollToPage("contact", "contact-btn"));
    (_f = document.querySelector('#light-mode')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => ChangeStyle("light"));
    (_g = document.querySelector('#dark-mode')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => ChangeStyle("dark"));
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
function ChangeStyle(styletype) {
    console.log('Clicked');
    let styleBtn = document.getElementById("btn-state");
    if (styletype === "light") {
        document.documentElement.style.setProperty("--textColors", "black");
        document.documentElement.style.setProperty("--backgroundMain", "#f3f3f3");
        document.documentElement.style.setProperty("--backgroundSecondry", "#efefef");
        document.documentElement.style.setProperty("--toggleButton", "#efefef");
        document.querySelector('svg').style.filter = "none";
        styleBtn.style.top = "40%";
    }
    else {
        document.documentElement.style.setProperty("--textColors", "white");
        document.documentElement.style.setProperty("--backgroundMain", "#0c0c0c");
        document.documentElement.style.setProperty("--backgroundSecondry", "#101010");
        document.documentElement.style.setProperty("--toggleButton", "#1b1b1b");
        document.querySelector('svg').style.filter = "invert(91%) sepia(0%) saturate(7500%) hue-rotate(96deg) brightness(111%) contrast(107%)";
        styleBtn.style.top = "0";
    }
}
//# sourceMappingURL=index.js.map