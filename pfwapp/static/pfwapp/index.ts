document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#home-btn')?.addEventListener('click', () => ChangePage("home", "home-btn"));
    document.querySelector('#project-btn')?.addEventListener('click', () => ChangePage("projects", "project-btn"));
    document.querySelector('#about-btn')?.addEventListener('click', () => ChangePage("about", "about-btn"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ChangePage("contact", "contact-btn"));

    ChangePage("home", "home-btn");
})

function ChangePage(pagetype: string, pageButton: string)
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