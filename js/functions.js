
$(window).scroll(function () {

  var s = $(this).scrollTop();
  $(".logo").css({ transform: "translate(0px, " + s / 2 + "%)" }),
    $(".back-bird").css({ transform: "translate(0px, " + s / 4 + "%)" }),
    $(".fore-bird").css({ transform: "translate(0px, -" + s / 30 + "%)" }),
    s > $(".clothes-pics").offset().top - $(window).height() &&
      $(".models").each(function (s) {
        setTimeout(function () {
          $(".models").eq(s).addClass("is-showing");
        }, 150 * (s + 1));
      });

  var wScroll = $(this).scrollTop();
  $(".logo").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".sub-logo").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".logo-overlay").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".fore-bird").css({
    transform: "translate(0px, " + wScroll / 20 + "%)",
  });

  $(".back").css({
    transform: "translate(0px, -" + wScroll / 30 + "%)",
  });

  if (wScroll > $(".clothes-pics").offset().top - $(window).height()) {
    $(".sac-hook").each(function (i) {
      setTimeout(function () {
        $(".sac-hook").eq(i).addClass("is-showing");
      }, 150 * (i + 1));
    });

    $("#sacs-title").css({
      opacity: "1",
      left: "0",
    });
  }

  if (wScroll > $(".card").offset().top - $(window).height() / 1.5) {
    var targetTop = $(".card").offset().top;
    var calcTopScroll = targetTop - wScroll;

    $(".card").css({
      transform: "translate(0px, " + calcTopScroll / 20 + "%)",
    });
  }

  // Opciones del slider sss.js

  // ******* seccionde codigo para hacer la animacion del gif para las flechas del carrusel de comentarios
  // ******* que no son mas que gif guardados en las imagenes y que al hacer click sobre estas imagenes los gif se activan
  // ******* o pasan de estar en el atributo data-alt para pasar al src y asi se activan

  //Funcion para obtener la ruta del gif que se encuentra en el atributo data-alt en las imagenes
  var getGif = function () {
    var gif = [];
    $("img").each(function () {
      var data = $(this).data("alt");
      gif.push(data);
    });
    return gif;
  };
  var gif = getGif();

  // Preload all the GIF. Cargar los gif apecar que se encuentren en el data-alt de las imagenes
  var image = [];

  $.each(gif, function (index) {
    image[index] = new Image();
    image[index].src = gif[index];
  });

  $("figure").on("click", function () {
    var $this = $(this),
      $img = $this.children("img"),
      $imgSrc = $img.attr("src");
    $img.attr("src", $img.data("alt")).attr("data-alt", $imgSrc);
  });

  // ******* Fin del codigo para los gif del carrusel de comentarios

  // ******* codigo para mostrar las fotos relacionadas a cada comentarios

  $("#myCarousel").carousel();
  $("#myCarousel").on("slid.bs.carousel", function () {
    var items = $(".fotos_carrusel");
    var a = items.length;
    var i = 0;
    for (i = 0; i < a; i++) {
      items[i].classList.remove("show");
    }

    var foto_id = $("[class^='item active']").data("folder");
    // console.log(foto_id);

    var foto = document.getElementById(foto_id);
    foto.classList.add("show");
  });
});

// ******* Seccion para manipular los efectos en la seccion de los articulos,
// ******* al hacer click en cada foto de los grupos de articulos y la manera en
// ******* en que estos articulos se muestran

var sac = $(".sacs-container");
var bags = $(".bags-container");
var brac = $(".bracalets-container");

$("#bags-trigger").click(function () {
  bags.css("display", "block");
  sac.css("display", "none");
  brac.css("display", "none");

  $(".bags-trigger").css("background-blend-mode", "normal");
  $(".sac-trigger").css("background-blend-mode", "luminosity");
  $(".bracelets-trigger").css("background-blend-mode", "luminosity");

  $(".bags-hook").each(function (i) {
    setTimeout(function () {
      $(".bags-hook").eq(i).addClass("is-showing");
    }, 150 * (i + 1));

    $(".sac-hook").removeClass("is-showing");
    $(".brac-hook").removeClass("is-showing");
  });

  $("#bags-title").animate(
    {
      opacity: 1,
      left: "0",
    },
    300
  );
  $("#brac-title").animate({
    opacity: "",
    left: "25px",
  });
  $("#sacs-title").animate({
    opacity: "",
    left: "25px",
  });
});

$("#bracelets-trigger").on("click", function () {
  bags.css("display", "none");
  sac.css("display", "none");
  brac.css("display", "block");

  $(".bracelets-trigger").css("background-blend-mode", "normal");
  $(".sac-trigger").css("background-blend-mode", "luminosity");
  $(".bags-trigger").css("background-blend-mode", "luminosity");

  $(".brac-hook").each(function (i) {
    setTimeout(function () {
      $(".brac-hook").eq(i).addClass("is-showing");
    }, 150 * (i + 1));

    $(".sac-hook").removeClass("is-showing");
    $(".bags-hook").removeClass("is-showing");
  });

  $("#brac-title").animate(
    {
      opacity: 1,
      left: "0",
      easing: "easein",
    },
    300
  );
  $("#bags-title").animate({
    opacity: "",
    left: "25px",
  });
  $("#sacs-title").animate({
    opacity: "",
    left: "25px",
  });
});

$("#sac-trigger").click(function () {
  sac.css("display", "block");
  bags.css("display", "none");
  brac.css("display", "none");

  $(".sac-trigger").css("background-blend-mode", "normal");
  $(".bags-trigger").css("background-blend-mode", "luminosity");
  $(".bracelets-trigger").css("background-blend-mode", "luminosity");

  $(".sac-hook").each(function (i) {
    setTimeout(function () {
      $(".sac-hook").eq(i).addClass("is-showing");
    }, 150 * (i + 1));

    $(".bags-hook").removeClass("is-showing");
    $(".brac-hook").removeClass("is-showing");
  });

  $("#sacs-title").animate(
    {
      opacity: 1,
      left: "0",
    },
    300
  );
  $("#brac-title").animate({
    opacity: "",
    left: "25px",
  });
  $("#bags-title").animate({
    opacity: "",
    left: "25px",
  });
});
