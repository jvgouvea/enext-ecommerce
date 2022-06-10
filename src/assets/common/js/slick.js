export default function initSlick() {
  $(function () {
    $(".vitrine ul").slick({
      infinite: false,
      slidesToShow: 4,
      SlidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
}