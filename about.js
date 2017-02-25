$(function() {
    $('a.create-a-thon').click(function() {
        $('.ui.modal.create-a-thon').modal('show');
        moveDown();
    })

    $('a.fantastic_five').click(function() {
        $('.ui.modal.fantastic_five').modal('show');
        moveDown();
    })

    $('a.nissan').click(function() {
        $('.ui.modal.nissan').modal('show');
        moveDown();
    })

    $('a.modding').click(function() {
        $('.ui.modal.modding').modal('show');
        moveDown();
    })
});

function moveDown() {
  footer.style.bottom = (footer.style.bottom-14)+'px';
}
