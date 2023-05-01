$(document).ready(function () {
  $(".header-container").slick({
    dots: true,
    arrows: false,
  });
  $(".news_slick-slider").slick({
    infinite: true,
    centerMode: true,
    arrows: false,
    dots: true,
    centerPadding: "30px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    variableWidth: true,
  });
});

$("#go-back").click(function () {
  $(".news_slick-slider").slick("slickPrev");
});

$("#go-forward").click(function () {
  $(".news_slick-slider").slick("slickNext");
});
