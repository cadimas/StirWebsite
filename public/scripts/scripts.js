/* global $*/

$(document).ready(function() {
  $("#sideNavButton").click(() => {
    $("#mySidenav").css("width", "250px");
  });

  $(".closebtn").click(() => {
    $("#mySidenav").css("width", "0");
  });

  $("#mySidenav a:nth-child(8)").click(() => {
    $("#mySidenav").css("width", "0");
  });

  function parallax(scroll) {
    $("video").css("top", scroll * 0.75 + "px");
  }

  $("#imagem1").parallax({ imageSrc: "/images/big/bigBarBig.jpg" });

  $("#imagem2").parallax({ imageSrc: "/images/big/cocktailNiceBig.jpg" });

  $("#imagem3").parallax({ imageSrc: "/images/big/aboutMain.jpg" });

  $("#imagem4").parallax({ imageSrc: "/images/big/weddingBarBig.JPG" });

  $("#imagem5").parallax({ imageSrc: "/images/big/mobileCocktailBig.JPG" });

  $("#imagem6").parallax({ imageSrc: "/images/big/coffeeCocktailBig.JPG" });

  $("#imagem7").parallax({ imageSrc: "/images/big/juAndBroBig.JPG" });

  $("#imagem8").parallax({ imageSrc: "/images/big/jullBlinking.jpg" });

  $("#imagem9").parallax({ imageSrc: "/images/big/cocktail5Big.jpg" });

  $("#imagem10").parallax({ imageSrc: "/images/big/coffeeCocktailBig.jpg" });

  function arrowScroll(scroll) {
    if (scroll == 0) {
      $("#arrowDown").css("display", "show");
    } else {
      $("#arrowDown").css("display", "none");
    }
  }

  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });

  $("#logo").click(e => {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  // Active link switching
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    parallax(scroll);
    arrowScroll(scroll);

    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });
});
