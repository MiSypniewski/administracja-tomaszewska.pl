$("a").on("click", function() {
  const goToSection = "[data-section=" + $(this).attr("class") + "]";
  if ($(this).attr("class") == "home") {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      500
    );
  } else {
    $("body, html").animate(
      {
        scrollTop: $(goToSection).offset().top
      },
      500
    );
  }
});
