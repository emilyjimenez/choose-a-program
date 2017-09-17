$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var result;
    var codeimg;
    var name = $("input#name").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var celebrity = $("#celebrity");
    var development = $("input:radio[name=development]:checked").val();
    var ready = $("input:radio[name=ready]checked").val();

    if (personality === "lazy"){
      result = "Coding is not for you.";
      codeimg = "img/defeated.gif";
    }

    $("#results").show();
    $("#results p").text(result);
    $("#results img").attr("src", codeimg)
  });
});
