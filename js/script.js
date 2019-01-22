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

  // Newsletter Subscription
  $("button").on("click", function() {
    const clientEmail = $('input[name="client-email"]').val();

    // E-mail regex validation @source https://www.tutorialspoint.com/How-to-validate-email-using-jQuery
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // @source end

    if (regex.test(clientEmail)) {
      alert("Thanks for subscribing!");
    } else {
      alert("Please enter a valid email");
    }
  });
});
