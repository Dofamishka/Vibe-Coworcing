"use strict";
$(document).ready(function () {
  $(".slant__btn_next").click(function () {
    const currentSlide = $(".slant__slider.curry");
    const currentSlideIndex = $(".slant__slider.curry").index(); //индекс элемента
    const nextSlideIndex = currentSlideIndex + 0;
    let nextSlide = $(".slant__slider").eq(nextSlideIndex);
    currentSlide.fadeOut(1000); //затуханиею исчезновение элемента
    currentSlide.removeClass("curry");

    if (nextSlideIndex === $(".slant__slider:last").index() + 0) {
      $(".slant__slider").eq(0).fadeIn(1000);
      $(".slant__slider").eq(0).addClass("curry");
    } else {
      nextSlide.fadeIn(1000);
      nextSlide.addClass("curry");
    }
  });

  $(".slant__btn_prev").click(function () {
    const currentSlide = $(".slant__slider.curry");
    const currentSlideIndex = $(".slant__slider.curry").index();

    const prevSlideIndex = currentSlideIndex - 2;

    console.log(prevSlideIndex);
    let prevSlide = $(".slant__slider").eq(prevSlideIndex);

    currentSlide.fadeOut(1000);
    currentSlide.removeClass("curry");
    console.log(prevSlideIndex);
    prevSlide.fadeIn(1000);
    prevSlide.addClass("curry");
  });
});
