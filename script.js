// smooth scrolling functionality
$("a").on("click", function (e) {
  console.log("clicked");
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
// code to add back-to-top icon to reach section1 when page is scrolled down by a little distance
let hideArrow = true;
$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop(), // calculate the distance b/w top of doc and top of scrollbar
    elementOffset = $("#about").offset().top, // calculate distance b/w sec2 to top of doc
    distance = elementOffset - scrollTop; // result is the ditance b/w top of the window and section2

  if (hideArrow) $("#arrow").fadeOut();

  if (distance <= 263) {
    hideArrow = false;
    $("#arrow").fadeIn();
    $("#arrow").html(
      `<a href="#title" class="fas fa-chevron-up arrow-up"></a>`
    );
  } else {
    $(".arrow-up").fadeOut();
  }

  $(".arrow-up").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
