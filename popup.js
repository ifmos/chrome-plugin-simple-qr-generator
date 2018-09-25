Zepto(function($) {
  chrome.tabs.getSelected(null, function(tab) {
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
  });
});
