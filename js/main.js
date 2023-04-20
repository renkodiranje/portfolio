/*sandwich menu styling*/

$(document).ready(function () {
  $("#x").click(function () {
    $("nav").css("display", "none");
  });
  $("#x1").click(function () {
    $("nav").css("display", "block");
    $("#hide").hide();
  });
  $("#click").click(function () {
    $("#hide").show();
    $("nav").hide();
  });
});

var template = $("#template").html();
var name1 = new RegExp("{{name}}", "g");
var languages = $("[data-language]");
languages.on("click", displayTabs);
projects();

/*display projects */

function projects() {
  $.ajax({
    url: "project.json",
    method: "get",
    dataType: "json",
  }).done(function (res) {
    var text = "";
    res.forEach(function (e) {
      text = template
        .replace(name1, e.name)
        .replace("{{id}}", e.id)
        .replace("{{class}}", e.class)
        .replace("{{close}}", e.close)
        .replace("{{imagesrc}}", e.imagesrc)
        .replace("{{url}}", e.url)
        .replace("{{par}}", e.par);
      $("#jsonn").append(text);
    });
    function show(x, y, z) {
      $(x).click(function () {
        $(y).slideDown(600);
      });
      $(z).click(function () {
        $(y).hide(300);
      });
    }
    show("#1", ".a", ".A");
    show("#2", ".b", ".B");
    show("#3", ".c", ".C");
    show("#4", ".d", ".D");
  });
}
/*display tabs*/
function displayTabs(e) {
  $("#jsonn").html("");
  e.preventDefault();

  var ln = $(this).data("language");

  $.ajax({
    url: "project.json",
    method: "get",
    dataType: "json",
  }).done(function (res) {
    if (
      ln === "HTML" ||
      ln === "CSS" ||
      ln === "JS" ||
      ln === "Bootstrap" ||
      ln === "SASS" ||
      ln === "jQuery" ||
      ln === "ReactJS"
    ) {
      var lnFilter = res.filter(function (el) {
        return el[ln];
      });

      var text = "";
      lnFilter.forEach(function (e) {
        text = template
          .replace(name1, e.name)
          .replace("{{id}}", e.id)
          .replace("{{class}}", e.class)
          .replace("{{close}}", e.close)
          .replace("{{imagesrc}}", e.imagesrc)
          .replace("{{url}}", e.url)
          .replace("{{par}}", e.par);
        $("#jsonn").append(text);
      });
      function show(x, y, z) {
        $(x).click(function () {
          $(y).slideDown(600);
        });
        $(z).click(function () {
          $(y).hide(300);
        });
      }
      show("#1", ".a", ".A");
      show("#2", ".b", ".B");
      show("#3", ".c", ".C");
      show("#4", ".d", ".D");
      show("#5", ".e", ".E");
    }
  });
}

var link = $(".nav-link");
link.on("click", function () {
  link.removeClass("active");
  $(this).addClass("active");
});
