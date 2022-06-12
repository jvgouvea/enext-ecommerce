export default function initSlick() {
  const vitrineLista = document.querySelector(".vitrine ul");

  $(function () {
    if (vitrineLista) {
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
    }
  });

  const bannerPrincipal = document.querySelector("#main-slider");

  $(function () {
    if (bannerPrincipal) {
      $("#main-slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        SlidesToScroll: 1,
        prevArrow: $("#main-banner .previous"),
        nextArrow: $("#main-banner .next"),
      });
    }
  });

  const shelfLink = document.querySelectorAll(".x-shelf__link");
  shelfLink.forEach((item) => {
    item.href =
      "https://enext.vtexlocal.com.br:3000/jaqueta-em-material-sintetico-com-capuz-e-bolsos/p?lid=e2e5d3d3-96f6-4e52-9fca-c9863167a58c&uam=true&mobile=4";
  });
}
