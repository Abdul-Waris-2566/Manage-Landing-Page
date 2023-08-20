const slider = new A11YSlider(document.querySelector(".slider"), {
  // adaptiveHeight: false,
  dots: true,

  autoplay: true,
  autoplaySpeed: 3000,
  autoplayHoverPause: false,

  arrows: false,
  container: true,
  customPaging: function (index, a11ySlider) {
    return '<button class="btn-pagination">' + index + "</button>";
  },
  responsive: {
    481: {
      dots: false,
      slidesToShow: 2,
    },
    950: {
      slidesToShow: null,
    },
  },
});
