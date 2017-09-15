$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var outcome;
    var pokemonimg;
    var name = $("input#name").val();
    var personality = $("input:radio[name=personality]checked").val();
    var celebrity = $("#celebrity")
    var development = $("input:radio[name=development]:checked").val();
    var ready = $("input:radio[name=ready]checked").val();

    if (personality === "lazy") {
      outcome = "Coding is not for you";
    }

    $("#results").removeClass("hide");
    $("#results p").text(outcome);
    // $ ("#results img").attr("src", );
  });
});
