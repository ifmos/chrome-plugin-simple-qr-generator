// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<lucky#gracecode.com>
 * @date   2013-11-15
 */

Zepto(function($) {
  chrome.tabs.getSelected(null, function(tab) {
    //var url = "http://c.wotula.com/chart.php?size=32&level=H&val=" + encodeURIComponent(tab.url);
    if (tab.favIconUrl) {
      $("#fav")
        .attr("src", tab.favIconUrl)
        .show();
    }

    $("#fav, #qr").bind("error", function(e) {
      $(e.target).hide();
    });

    QRCode.toCanvas(tab.url, { errorCorrectionLevel: "H", margin: 0 }, function(
      err,
      canvas
    ) {
      if (err) throw err;
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.boxShadow = '0 0 2px rgba(0, 0, 0, .3)'
      document.getElementById("qr").appendChild(canvas);
    });
    //$("#qr").attr("src", url);
  });
});
