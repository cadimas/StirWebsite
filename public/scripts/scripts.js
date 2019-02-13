$(document).ready(function() {
  //Shows side navs
  $("#sideNavButton").click(() => {
    $("#mySidenav").css("width", "250px");
  });
  //hides side navs
  $(".closebtn").click(() => {
    $("#mySidenav").css("width", "0");
  });
  //On contact link button press, close side nav
  $("#mySidenav a:nth-child(8)").click(() => {
    $("#mySidenav").css("width", "0");
  });

  //AJAX QUERY SERVER
  $("#form").submit(function(e) {
    e.preventDefault();
    let data = getFormData($(this));
    $("#loading-gif").css("display", "inline-block");
    $.post("/submit", data).done(data => {
      $("#loading-gif").css("display", "none");
      $("#return").html(data);
    });
  });

  //prepares form data to be POSTED
  function getFormData($form) {
    let unindexed_array = $form.serializeArray();
    let indexed_array = {};

    $.map(unindexed_array, function(n, i) {
      indexed_array[n["name"]] = n["value"];
    });

    return indexed_array;
  }

  function parallax(scroll) {
    $("video").css("top", scroll * 0.75 + "px");
  }

  $("#imagem1").parallax({ imageSrc: "/images/big/bigBarBig.jpg" });

  $("#imagem2").parallax({ imageSrc: "/images/big/cocktailNiceBig.jpg" });

  $("#imagem3").parallax({ imageSrc: "/images/big/aboutMain.jpg" });

  $("#imagem4").parallax({ imageSrc: "/images/big/weddingBarBig.jpg" });

  $("#imagem5").parallax({ imageSrc: "/images/big/mobileCocktailBig.jpg" });

  $("#imagem6").parallax({ imageSrc: "/images/big/coffeeCocktailBig.jpg" });

  $("#imagem7").parallax({ imageSrc: "/images/big/juAndBroBig.jpg" });

  $("#imagem8").parallax({ imageSrc: "/images/big/jullBlinking.jpg" });

  $("#imagem9").parallax({ imageSrc: "/images/big/cocktail5Big.jpg" });

  $("#imagem10").parallax({ imageSrc: "/images/big/coffeeCocktailBig.jpg" });

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
    let scroll = $(window).scrollTop();
    parallax(scroll);
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      let sectionOffset = $(this.hash).offset().top - 20;

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
