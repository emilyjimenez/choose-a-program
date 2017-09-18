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

    //Lazy or not ready
    if (personality === "lazy" || ready === "no"){
      result = "Coding is not for you.";
      codeimg = "img/defeated.gif";
    // IDK = Apps
  } else if (development === "idk") {
    result = "Java/Android. Maybe you'd be better at making games and apps than worrying about front-end vs back-end."
    codeimg = "img/android.gif"
  } else if (development === "front-end") {
    result = "Front-end! You like to make stuff look pretty"
    codeimg = "img/zen.gif"
  } else if (development === "back-end") {
    result = "Back-end! You're all about that functionality and seeing the potential of something."
    codeimg = "img/backend.gif"
  }

    $("#results").show();
    $("#results p").text(result);
    $("#results img").attr("src", codeimg)
  });
});
