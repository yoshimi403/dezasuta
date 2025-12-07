$(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("open");
    $(".header_nav_sp").fadeToggle();
  });
});
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1800) {
      $(".toTOP").addClass("show");
    } else {
      $(".toTOP").removeClass("show");
    }
  });
});
$(".header_nav_sp a").click(function () {
    $(".header_nav_sp").fadeOut();   // メニューを閉じる
    $(".hamburger").removeClass("open"); // ハンバーガーアイコンも戻す
});

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("wrap");
  const openingLogo = document.querySelector(".opening-logo");

  const isFirstVisit = !sessionStorage.getItem("curtain_shown");

  if (isFirstVisit) {
    sessionStorage.setItem("curtain_shown", "true");

    setTimeout(() => {
      openingLogo.classList.add("hide");    // ロゴ消える
      wrap.classList.add("show-curtain");   // カーテン開く開始
    }, 1000);
    setTimeout(() => {
      openingLogo.style.display = "none";
      wrap.style.display = "none";
    }, 1000 + 5000);
  } else {
    openingLogo.style.display = "none";
    wrap.style.display = "none";
  }
});
