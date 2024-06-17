let tabs = document.querySelectorAll(".tab");
let pages = document.querySelectorAll("main");
let linksblad = document.querySelector('.linksblad img');
let rechtsblad = document.querySelector('.rechtsblad img');
let pagina = 0;

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.addEventListener('click', ()=> {
        tabs.forEach(tab => {
            tab.classList.remove('current');
        });
        pages.forEach(page => {
            page.classList.remove('currentpage')
        })
        tab.classList.add('current');
        pages[i].classList.add('currentpage')
    })
}



rechtsblad.addEventListener('click', e => {
    if (pagina < 24) {
        pagina += 2;
        updatePagina(pagina);
    }
})

linksblad.addEventListener('click', e => {
    if (pagina > 0) {
        pagina -= 2;
        updatePagina(pagina);
    }
})

function updatePagina(pagina){
    if (pagina == 0) {
        linksblad.style.opacity = '0';
        rechtsblad.src = "portfolio/Portfolio Gustave Curtil_page-000" + (pagina + 1) + ".webp";
    } else if (pagina < 10) {
        linksblad.src = "portfolio/Portfolio Gustave Curtil_page-000" + pagina + ".webp";
        rechtsblad.src = "portfolio/Portfolio Gustave Curtil_page-000" + (pagina + 1) + ".webp";
        linksblad.style.opacity = '1';
    } else {
        linksblad.src = "portfolio/Portfolio Gustave Curtil_page-00" + pagina + ".webp";
        rechtsblad.src = "portfolio/Portfolio Gustave Curtil_page-00" + (pagina + 1) + ".webp";
        linksblad.style.opacity = '1';

    } 
}