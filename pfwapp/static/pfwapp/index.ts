document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#home-btn')?.addEventListener('click', () => ChangePage("home"));
    document.querySelector('#project-btn')?.addEventListener('click', () => ChangePage("projects"));
    document.querySelector('#about-btn')?.addEventListener('click', () => ChangePage("about"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ChangePage("contact"));

    ChangePage("home");
})

function ChangePage(pagetype: string)
{
    const pages = document.querySelectorAll<HTMLElement>(".page")
    
    pages!.forEach(page => {
       
        if(page.id === `${pagetype}`)
        {
            page.style.display = "block";
        }
        else
        {
            page.style.display = "none";
        }
        
    });

}