const dispatchModal = (event, modal) => {
    let evt = new CustomEvent(
        event, {
        detail: {
            modal: modal
        },
        bubbles: true,
        cancelable: false
    });
    document.dispatchEvent(evt);
};

window.addEventListener("DOMContentLoaded", (evt) => {

    // Close via clicking outside of bounds
    window.onclick = (event) => {
        if (event.target.classList.contains("modal")) {
            let modal = event.target;
            dispatchModal("modalClosing", modal);
            modal.classList.remove("visible");
            modal.removeAttribute("active");
            dispatchModal("modalClosed", modal);
            document.body.classList.remove("modal-no-scroll");
        }
    };

    // Close via close btn
    document.querySelectorAll(".modal .close").forEach((closeBtn) => {
        closeBtn.addEventListener('click', (evt) => {
            let modal = closeBtn.parentElement.parentElement;
            dispatchModal("modalClosing", modal);
            modal.classList.remove("visible");
            modal.removeAttribute("active");
            dispatchModal("modalClosed", modal);
            document.body.classList.remove("modal-no-scroll");
        });
    });

    // Close via escape-key
    document.body.addEventListener('keydown', (evt) => {
        if (evt.key == "Escape") {
            let modal = document.querySelector(".modal[active]");
            dispatchModal("modalClosing", modal);
            modal.classList.remove("visible");
            modal.removeAttribute("active");
            dispatchModal("modalClosed", modal);
            document.body.classList.remove("modal-no-scroll");
        }
    });

    // Open via for-modal element
    document.querySelectorAll("[for-modal]").forEach((modalTrigerEl) => {
        modalTrigerEl.addEventListener('click', (evt) => {
            let modal = document.getElementById(modalTrigerEl.getAttribute("for-modal"));
            dispatchModal("modalOpening", modal);
            modal.classList.add("visible");
            modal.setAttribute("active", "");
            dispatchModal("modalOpened", modal);
            document.body.classList.add("modal-no-scroll");
        });
    });

    // Destroy embeds on modal close
    document.addEventListener("modalClosed", (evt) => {
        evt.detail.modal.querySelectorAll("iframe").forEach((iframe) => {
            const origSrc = iframe.getAttribute("src");
            iframe.removeAttribute("src");
            iframe.setAttribute("data-src", origSrc);
        });
    });


    // Re-init embeds on modal open
    document.addEventListener("modalOpening", (evt) => {
        evt.detail.modal.querySelectorAll("iframe").forEach((iframe) => {
            if (iframe.hasAttribute("data-src")) {
                const origSrc = iframe.getAttribute("data-src");
                iframe.removeAttribute("data-src");
                iframe.setAttribute("src", origSrc);
            }
        });
    });
});
