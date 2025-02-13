$(document).ready(function() {
  const wrapperVideo = $('#hero-video')[0];
  const btnPlay = $('.hero__btn-play');
  const btnPause = $('.hero__btn-stop');

  var isVideoPlaying = false;



    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });



    $('.hero__btn-wrapper').click(function(event){

      if(isVideoPlaying){
         wrapperVideo.pause();
         btnPause.toggleClass('d-none');
         btnPlay.toggleClass('d-none');
         isVideoPlaying = false;
      } else {
        wrapperVideo.play();
        btnPlay.toggleClass('d-none');
        btnPause.toggleClass('d-none');
        isVideoPlaying = true;
      }

    });


    $(".our-services__slider").slick({

      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      easing: 'easy-out',
      infinite: false,
  
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
              }
      },
      {
          breakpoint: 770,
              settings: {
                  slidesToShow: 2,
  
              }
      },
      {
        breakpoint: 546,
            settings: {
                slidesToShow: 1,
            }
    }
    ]
  
  });

  $(".our-instructors__slider").slick({

    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    easing: 'easy-out',
    infinite: false,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
    },
    {
        breakpoint: 884,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
    },
    {
      breakpoint: 546,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
  }
  ]

});

});


window.addEventListener('scroll', function() {
  scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll')
});

document.querySelector('.subscribe__submit-email').addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.querySelector('.subscribe__form').classList.add('done');
});


AOS.init();
