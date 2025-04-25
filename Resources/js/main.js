const ColorModes = { Dark: 'dark', Light: 'light' };
// Yes this is dumb, but it's an easy way to handle this.
const jobModalKey = 'seenJobModal2025'; // Change this to make the modal re-populate
const lookingForJob = false && !window.localStorage.getItem(jobModalKey);

// Set the current color mode to the default display mode
let currentColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? ColorModes.Dark : ColorModes.Light;

const urls = {
  '/': 'Home',
  '/Experience/': 'Experience',
  '/Education/': 'Education',
  '/Portfolio/': 'Portfolio',
};

const initColorScheme = () => {
  const setting = localStorage.getItem('color-mode');
  if (setting) {
    if (setting === 'dark') {
      currentColorMode = 'dark';
    } else if (setting === 'light') {
      currentColorMode = 'light';
    }
  }

  localStorage.setItem('color-mode', currentColorMode);
  if (currentColorMode === ColorModes.Dark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};

const bootstrapNavbar = () => {
  const title = urls[location.pathname];

  if (!title) {
    return;
  }

  const endpoints = Object.keys(urls).map((url) => `
        <li>
            <a class="dropdown-item" href="${url}">
                <code>
                    ${urls[url] == title ? `<b>${urls[url]}</b>` : urls[url]}
                </code>
            </a>
        </li>
    `);
  document.body.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-${currentColorMode === 'dark' ? 'dark' : 'light'} bg-${currentColorMode === 'dark' ? 'dark' : 'light'} fixed-top ${title === "Home" ? 'navbar-translucent' : ''}" id="main-nav">
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
                            ${endpoints.join("\n")}
                        </ul>
                    </li>

                    <li class="expanding-navbar-item nav-item">
                        <a class="nav-link" target="_blank" href="/Resume.pdf">
                            <div class="expanding-navbar-item-inner">
                                <i class="fa fa-file-pdf"></i>
                                <div class="link-desc">Resume</div>
                            </div>
                        </a>
                    </li>

                    <li class="expanding-navbar-item nav-item">
                        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/jose-stovall-363388160/">
                            <div class="expanding-navbar-item-inner">
                                <i class="fab fa-linkedin"></i>
                                <div class="link-desc">LinkedIn</div>
                            </div>
                        </a>
                    </li>

                    <li class="expanding-navbar-item nav-item">
                        <a class="nav-link" target="_blank" href="https://github.com/oitsjustjose">
                            <div class="expanding-navbar-item-inner">
                                <i class="fab fa-github-alt"></i>
                                <div class="link-desc">GitHub</div>
                            </div>
                        </a>
                    </li>
                </ul>
                <form class="d-flex">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="displayModeSwitch" ${currentColorMode === 'dark' && 'checked'}>
                        <label class="form-check-label" for="displayModeSwitch">Dark Mode</label>
                    </div>    
                </form>
            </div>
        </div>
    </nav>
    ` + document.body.innerHTML;

  if (title !== 'Home') {
    const nav = document.querySelector('nav');
    document.body.style.marginTop = `${nav.clientHeight}px`;
  }
};

const bootstrapJobModal = () => {
  if (!lookingForJob) {
    return;
  }

  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'hireMeModal';
  modal.addEventListener('hide.bs.modal', () => {
    window.localStorage.setItem(jobModalKey, true);
  });

  const modalWr = document.createElement('div');
  modalWr.className = 'modal-dialog modal-lg modal-fullscreen-lg-down modal-dialog-centered';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  modalHeader.innerHTML = `
        <h2 class='modal-title'>I'm Looking for a Job!</h2>
        <button type='button' class='btn-close' id='hireMeModalClose'></button>
    `;

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  modalBody.innerHTML = `
    <p>
        Hi there! My name is Jose Stovall and I'm looking for a job! I was previously working
        for Free Range Games where I learned a lot about Game Development but also Backend &
        Dev-OPs work, but unfortunately myself and many others were laid off on March 6th, 2025.
    </p>

    <p>
        Currently I am located just outside of Nashville, TN, but my wife is an aspiring Paleontologist
        and is looking to progress her education and career, so we're highly considering relocating to
        Chicago, IL to take advantage of the several excellent educational and career experiences in
        the area.
    </p>

    <p>
        You can see my knowledge/interests/expertise here on this main page as well as 
        on the Portfolio page (found using the dropdown above). Additionally my work
        experience can be found using the dropdown, and you can contact me through LinkedIn
        in the menu or <a href="mailto:stovallj1995@gmail.com">via email</a>!
    </p>

    <p>
      <b>Additionally, <a href="/Resume.pdf">my current resume can be found here!</a></b>
    </p>
    `;

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalWr.appendChild(modalContent);
  modal.appendChild(modalWr);
  document.body.appendChild(modal);

  const modalObj = new bootstrap.Modal(modal);
  modalObj.show();

  document.getElementById('hireMeModalClose').addEventListener('click', () => {
    modalObj.hide();
  });
};

window.addEventListener('load', () => {
  initColorScheme();
  bootstrapNavbar();
  bootstrapJobModal();

  document.getElementById('displayModeSwitch').addEventListener('click', () => {
    currentColorMode = currentColorMode === ColorModes.Dark ? ColorModes.Light : ColorModes.Dark;
    if (currentColorMode === ColorModes.Dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    const nav = document.querySelector('#main-nav');
    nav.classList.remove('navbar-light');
    nav.classList.remove('navbar-dark');
    nav.classList.remove('bg-light');
    nav.classList.remove('bg-dark');

    nav.classList.add(`navbar-${currentColorMode === 'dark' ? 'dark' : 'light'}`);
    nav.classList.add(`bg-${currentColorMode === 'dark' ? 'dark' : 'light'}`);

    localStorage.setItem('color-mode', currentColorMode);
  });
});
