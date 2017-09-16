$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var outcome;
    var name = $("input#name").val();
    var personalityTrait = $("input:radio[name=personality]checked").val();
    var celebrity = $("#celebrity");
    var development = $("input:radio[name=development]:checked").val();
    var ready = $("input:radio[name=ready]checked").val();

    if (personalityTrait === "lazy") {
      outcome = "coding is not for you"
    }

    $("#results").removeClass("hide");
    $("#results p").text(outcome);
    // $ ("#results img").attr("src", );
  });
});
