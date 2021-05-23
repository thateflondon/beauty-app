$(".section-three-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  speed: 1500,
});

const r = rolly({
  view: document.querySelector(".app"),
  native: true,
  // other options
});
r.init();

AOS.init({
  duration: 1500, // global duration
});
