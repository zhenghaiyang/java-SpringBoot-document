window.onload = function () {

  $(".down-directory-ul").click(function (e) {
    let type = $(e.target).attr("type")
    console.log("type", type);
    switch (type) {
      case "java":
        Alink(type)
        return;
      case "idea":
        Alink(type)
        return;
      case "maven":
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