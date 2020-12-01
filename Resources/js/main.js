const urls = {
    "/": "Home",
    "/Portfolio/": "Portfolio",
    "/Education/": "Education"
};

const bootstrapNavbar = () => {
    const title = urls[location.pathname];

    if (!title) {
        return;
    }

    document.body.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ${title === "Home" ? 'navbar-translucent' : ''}">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Jose's Portfolio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-expanded="false">
                            <code>Pages/${title}</code>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/"><code>${title === 'Home' ? '<b>Home</b>' : "Home"}</code></a></li>
                            <li><a class="dropdown-item" href="/Portfolio"><code>${title === 'Portfolio' ? '<b>Portfolio</b>' : "Portfolio"}</code></a></li>
                            <li><a class="dropdown-item" href="/Education"><code>${title === 'Education' ? '<b>Education</b>' : "Education"}</code></a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="_blank" href="https://github.com/oitsjustjose">
                            <span>
                                <i class="fab fa-github"></i>
                                <span class="link-desc">
                                    &nbsp;GitHub
                                </span>
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="_blank" href="https://oitsjustjo.se/u/linkedin">
                            <span>
                                <i class="fab fa-linkedin"></i>
                                <span class="link-desc">
                                    &nbsp;LinkedIn
                                </span>
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="_blank" href="https://www.codewars.com/users/oitsjustjose">
                            <span>
                                <img class="codewars" src="/Resources/img/logo-black.png" />
                                <span class="link-desc">
                                    &nbsp;CodeWars
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    ` + document.body.innerHTML;

    if (title !== 'Home') {
        const nav = document.querySelector('nav');
        document.body.style.marginTop = `${nav.clientHeight}px`;
    }
};

window.addEventListener("load", bootstrapNavbar);