
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#home-btn')?.addEventListener('click', () => ScrollToPage("home", "home-btn"));
    document.querySelector('#project-btn')?.addEventListener('click', () => ScrollToPage("projects", "project-btn"));
    document.querySelector('#about-btn')?.addEventListener('click', () => ScrollToPage("about", "about-btn"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ScrollToPage("contact", "contact-btn"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ScrollToPage("contact", "contact-btn"));
    document.querySelector('#light-mode')?.addEventListener('click', () => ChangeStyle("light"));
    document.querySelector('#dark-mode')?.addEventListener('click', () => ChangeStyle("dark"));

    ScrollToPage("home", "home-btn");
})

function ScrollToPage(pagetype: string, pageButton: string)
{
    let pageBtns = document.querySelectorAll<HTMLElement>('.button');
    
    pageBtns.forEach(btn => {
        if(btn.id === `${pageButton}`)
        {
            
            btn!.style.borderBottom = "1px solid #a594fd";
            
        }
        else
        {
            btn!.style.borderBottom = "none";
        }
    });
    
    let page = document.getElementById(`${pagetype}`)
    if(pagetype === "home")
    {
        page?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }
    else
    {
        page?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
    
    
    

}

function ChangeStyle(styletype: string)
{
    console.log('Clicked')
    let styleBtn = document.getElementById("btn-state");
    if(styletype === "light")
    {
        document.documentElement.style.setProperty("--textColors", "black");
        document.documentElement.style.setProperty("--backgroundMain", "#f3f3f3");
        document.documentElement.style.setProperty("--backgroundSecondry", "#efefef");
        document.documentElement.style.setProperty("--toggleButton", "#efefef");
        document.querySelector('svg')!.style.filter = "none";
        styleBtn!.style.top = "40%";
    }
    else{
        document.documentElement.style.setProperty("--textColors", "white");
        document.documentElement.style.setProperty("--backgroundMain", "#0c0c0c");
        document.documentElement.style.setProperty("--backgroundSecondry", "#101010");
        document.documentElement.style.setProperty("--toggleButton", "#1b1b1b");
        document.querySelector('svg')!.style.filter = "invert(91%) sepia(0%) saturate(7500%) hue-rotate(96deg) brightness(111%) contrast(107%)";
        styleBtn!.style.top = "0";
    }
}