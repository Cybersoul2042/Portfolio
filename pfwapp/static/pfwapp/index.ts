document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#home-btn')?.addEventListener('click', () => ScrollToPage("home", "home-btn"));
    document.querySelector('#project-btn')?.addEventListener('click', () => ScrollToPage("projects", "project-btn"));
    document.querySelector('#about-btn')?.addEventListener('click', () => ScrollToPage("about", "about-btn"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ScrollToPage("contact", "contact-btn"));

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