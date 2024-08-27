

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

// Seleciona todas as imagens
var imgs = document.querySelectorAll('.haircut img');

// Adiciona o evento de clique para todas as imagens
imgs.forEach(img => {
    img.onclick = function () {
        // Verifica a largura da janela
        if (window.innerWidth <= 768) {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }
});

// Seleciona o elemento de fechar o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no "x", fecha o modal
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora da imagem, fecha o modal
modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
