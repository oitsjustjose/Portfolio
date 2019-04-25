$(function () {
    $('a.cuip-2019').click(function () {
        $('.ui.modal.cuip-2019').modal({
            onHide: function () {
                $(".ui.embed").embed("destroy");
            }
        }).modal('show');
        $(".ui.embed").embed();
        moveDown();
    });

    $('a.sccc-2018').click(function () {
        $('.ui.modal.sccc-2018').modal('show');
        moveDown();
    });

    $('a.sccc-2017').click(function () {
        $('.ui.modal.sccc-2017').modal('show');
        moveDown();
    });

    $('a.create-a-thon').click(function () {
        $('.ui.modal.create-a-thon').modal('show');
        moveDown();
    });

    $('a.fantastic_five').click(function () {
        $('.ui.modal.fantastic_five').modal('show');
        moveDown();
    });

    $('a.nissan').click(function () {
        $('.ui.modal.nissan').modal('show');
        moveDown();
    });

    $('a.modding').click(function () {
        $('.ui.modal.modding').modal('show');
        moveDown();
    });
});

function moveDown() {
    footer.style.bottom = (footer.style.bottom - 14) + 'px';
}