var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.9,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// Seleciona o modal
var modal = document.getElementById('myModal');

// Seleciona a imagem do modal
var modalImg = document.getElementById("img01");

// Seleciona o elemento de fechar o modal
var span = document.getElementsByClassName("close")[0];

// Adiciona o evento de clique para todas as imagens usando delegação de evento
document.querySelector('.haircut').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        // Verifica a largura da janela
        if (window.innerWidth <= 768) {
            modal.style.display = "block";
            modalImg.src = event.target.src;
        }
    }
});

// Quando o usuário clicar no "x", fecha o modal
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora da imagem, fecha o modal
modal.onclick = function (event) {
    if (event.target == modal || event.target == span) {
        modal.style.display = "none";
    }
}

// Adiciona o fechamento do modal ao pressionar a tecla "Esc"
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
