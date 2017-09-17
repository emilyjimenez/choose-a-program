$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var result;
    var codeimg;
    var name = $("input#name").val();
    var personality = $("input:radio[name=personality]:checked").val();
    var celebrity = $("#celebrity");
    var development = $("input:radio[name=development]:checked").val();
    var ready = $("input:radio[name=ready]:checked").val();

    if (personality === "lazy" || ready === "no"){
      result = "Coding is not for you.";
      codeimg = "img/defeated.gif";
    } else if (development === "idk") {
      result = "Java/Android! Maybe you'd like to make a game or a helpful app since you arent sure about back-end or front-end development."
      codeimg = "img/android.gif"
    } else if

    $("#results").show();
    $("#results p").text(result);
    $("#results img").attr("src", codeimg)
  });
});
