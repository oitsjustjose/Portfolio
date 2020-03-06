const dispatchModalClosed = (modal) => {
    let evt = new CustomEvent(
        "modalClosed",
        {
            detail: {
                message: modal
            },
            bubbles: true,
            cancelable: true
        }
    );
    document.dispatchEvent(evt);
};

const dispatchModalClosing = (modal) => {
    let evt = new CustomEvent(
        "modalClosing",
        {
            detail: {
                message: modal
            },
            bubbles: true,
            cancelable: true
        }
    );
    document.dispatchEvent(evt);
};

const dispatchModalOpened = (modal) => {
    let evt = new CustomEvent(
        "modalOpened",
        {
            detail: {
                message: modal
            },
            bubbles: true,
            cancelable: true
        }
    );
    document.dispatchEvent(evt);
};

const dispatchModalOpening = (modal) => {
    let evt = new CustomEvent(
        "modalOpening",
        {
            detail: {
                message: modal
            },
            bubbles: true,
            cancelable: true
        }
    );
    document.dispatchEvent(evt);
};

window.addEventListener("DOMContentLoaded", (evt) => {

    // Close via clicking outside of bounds
    window.onclick = (event) => {
        if (event.target.classList.contains("modal")) {
            let modal = event.target;
            dispatchModalClosing(modal);
            modal.classList.remove("visible");
            modal.removeAttribute("active");
            dispatchModalClosed(modal);
            document.body.classList.remove("modal-no-scroll");
        }
    };

    // Close via close btn
    document.querySelectorAll(".modal .close").forEach((closeBtn) => {
        closeBtn.addEventListener('click', (evt) => {
            let modal = closeBtn.parentElement.parentElement;
            dispatchModalClosing(modal);
            modal.classList.remove("visible");
            modal.removeAttribute("active");
            dispatchModalClosed(modal);
            document.body.classList.remove("modal-no-scroll");
        });
    });

    // Close via escape-key
    document.body.addEventListener('keydown', (evt) => {
        if (evt.key == "Escape") {
            let modal = document.querySelector(".modal[active]");
            dispatchModalClosing(modal);
            modal.classList.remove("visible");
            modal.removeAttribute("active");
            dispatchModalClosed(modal);
            document.body.classList.remove("modal-no-scroll");
        }
    });

    // Open via for-modal element
    document.querySelectorAll("[for-modal]").forEach((modalTrigerEl) => {
        modalTrigerEl.addEventListener('click', (evt) => {
            let modal = document.getElementById(modalTrigerEl.getAttribute("for-modal"));

            dispatchModalOpening(modal);

            modal.classList.add("visible");
            modal.setAttribute("active", "");

            dispatchModalOpened(modal);

            document.body.classList.add("modal-no-scroll");
        });
    });

    // Destroy embeds on modal close
    document.addEventListener("modalClosed", (evt) => {
        evt.detail.message.querySelectorAll("iframe").forEach((iframe) => {
            const origSrc = iframe.getAttribute("src");
            iframe.removeAttribute("src");
            iframe.setAttribute("data-src", origSrc);
        });
    });


    // Re-init embeds on modal open
    document.addEventListener("modalOpening", (evt) => {
        evt.detail.message.querySelectorAll("iframe").forEach((iframe) => {
            if (iframe.hasAttribute("data-src")) {
                const origSrc = iframe.getAttribute("data-src");
                iframe.removeAttribute("data-src");
                iframe.setAttribute("src", origSrc);
            }
        });
    });
});
