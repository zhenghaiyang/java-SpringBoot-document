window.onload = function () {


  $(".directory-ul").click(function (e) {
    let type = $(e.target).attr("type")
    switch (type) {
      case "down":
        window.location.href = "page/down/down.html";
        return;
      case "idea":
        window.location.href = "page/relyOn/relyOn.html";
      case "springboot":
      default:
        return;
    }
  })


}