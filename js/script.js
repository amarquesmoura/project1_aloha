$(document).ready(function() {
  console.log("Yup! We're connected!");

  /* Smooth Scrolling
     @source https://css-tricks.com/smooth-scrolling-accessibility/ */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
  // End of Smooth Scrolling

  /* Products Carousel
     @source: https://flickity.metafizzy.co */
  $(".main-carousel").flickity({
    wraparound: true,
    // groupCells: 2,
    percentPosition: false,
    imagesLoaded: true,
    autoPlay: true,
    prevNextButtons: false,
    cellAlign: "center",
    contain: true
  });
  // End of Products Carousel
});
