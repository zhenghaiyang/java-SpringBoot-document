window.onload = function () {

  $(".relyOn-directory-ul").click(function (e) {
    let type = $(e.target).attr("type")
    console.log("type", type);
    switch (type) {
      case "creat":
        Alink(type)
        return;
      case "ideaSet":
        Alink(type)
        return;
      case "mavenSet":
        Alink(type)
        return;
      default:
        return;
    }
  })

  // 进行跳转到指定位置
  function Alink (id) {
    var tempA = $("<a>")
    $(tempA).attr("href", "#" + id);
    $(tempA).css("display", "none")
    document.body.append(tempA[0])
    tempA[0].click();
    document.body.removeChild(tempA[0])
  }


}