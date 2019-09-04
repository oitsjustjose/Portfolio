const init = () => {
    $(".ui.modal").modal({
        onHide: () => {
            $(".ui.embed").embed('destroy');
        }
    });
    document.querySelectorAll(".ui.inverted.card").forEach((element) => {
        element.addEventListener('click', () => {
            $('.ui.modal.' + element.classList.value.replace("ui inverted card ", "")).modal("show");
            $('.ui.embed.' + element.classList.value.replace("ui inverted card ", "")).embed();
        });
    });
};