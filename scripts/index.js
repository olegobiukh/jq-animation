$(document).ready(function () {
  var layer2 = $("#layer2");
  var layer3 = $("#layer3");
  var layer4 = $("#layer4");
  var layer5 = $("#layer5");
  var layer6 = $("#layer6");
  var layer61 = $("#layer61");
  var layer62 = $("#layer62");
  var layer63 = $("#layer63");
  var layer7l = $(".layer__7--left");
  var layer7r = $(".layer__7--right");
  var layer8 = $("#layer8");
  var layer9 = $("#layer9");
  var videoCross = $("#videoCross");
  var video = $("#video");
  var closePresentation = $("#closePresentation");
  var videoCrossText = $(".video__cross-text");
  var videoCrossBox = $("#videoCross .cross__box");

  layer8.hide();
  video.hide();
  layer61.hide();
  layer62.hide();
  layer63.hide();

  setTimeout(function () {
    layer2.addClass("layer__top");
    setTimeout(function () {
      layer3.addClass("layer__top");
      setTimeout(function () {
        layer5.addClass("layer__5-animate");
        layer4.addClass("layer__4-animate");
        setTimeout(function () {
          layer61.show("slow");
          setTimeout(function () {
            layer62.show("slow");
            setTimeout(function () {
              layer63.show("slow");
              setTimeout(function () {
                layer7l.addClass("layer__7--left-animate");
                layer7r.addClass("layer__7--right-animate");
                setTimeout(function () {
                  layer6.fadeOut(2500);
                  setTimeout(function () {
                    layer5.removeClass("layer__5-animate");
                    layer4.removeClass("layer__4-animate");
                    layer2.removeClass("layer__top");
                    layer3.removeClass("layer__top");
                    layer7l.removeClass("layer__7--left-animate");
                    layer7r.removeClass("layer__7--right-animate");
                    layer8.show();
                  }, 3000);
                }, 5000);
              }, 1000);
            }, 2500);
          }, 1000);
        }, 4000);
      }, 2000);
    }, 1800);
  }, 2000);

  videoCrossBox.click(() => {
    videoCrossBox.toggleClass("video__cross-box");
    videoCrossText.toggle();
    video.toggle();
  });

  closePresentation.click(() => {
    video.hide();
    layer8.hide();
  });
});
