const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu_list');
  
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu_list--active');
  });