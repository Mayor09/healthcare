
//nav toggle
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })


//modal fade duration
$("#fade").modal({
  fadeDuration: 100
});



  