// code adapted from http://css3.bradshawenterprises.com/accordions/

$(document).ready(function() {
  $("#accordion section h1").click(function(e) {
    $(this).parents().siblings("section").addClass("ac_hidden");
    $(this).parents("section").removeClass("ac_hidden");

    e.preventDefault();
  });
});