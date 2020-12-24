// smooth scrolling functionality
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    // let hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      800,
      function () {
        window.location.hash = this.hash;
      }
    );
  }
});

// code to add arrow up icon to reach section1 when page is scrolled down by a little distance
$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop(), // calculate the distance b/w top of doc and top of scrollbar
    elementOffset = $("#about").offset().top, // calculate distance b/w sec2 to top of doc
    distance = elementOffset - scrollTop; // result is the ditance top of window and section2

  console.log(scrollTop);
  console.log(elementOffset);
  console.log(distance);

  if (distance <= 263) {
    $(".arrow-up").fadeIn();
  } else {
    $(".arrow-up").fadeOut();
  }
});
