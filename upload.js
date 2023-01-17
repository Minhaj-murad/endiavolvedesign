$('#video1').on('loadstart', function (event) {
    $(this).addClass('background');
    $(this).attr("poster", "./assests/images/upload.png");
  });
  