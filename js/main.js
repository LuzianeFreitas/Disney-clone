$(document).ready(function(){
  $('.main-carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.colection-carousel').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    margin: 10

  });
});

