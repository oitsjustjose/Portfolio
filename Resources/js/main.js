const ColorModes = { Dark: 'dark', Light: 'light' };
// Yes this is dumb, but it's an easy way to handle this.
const lookingForJob = false; // switch to: true && !window.localStorage.getItem('hasSeenJobModal');

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
                        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/jose-stovall-363388160/">
                            <span>
                                <i class="fab fa-linkedin"></i>
                                <span class="link-desc">
                                    &nbsp;LinkedIn
                                </span>
                            </span>
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
    window.localStorage.setItem('hasSeenJobModal', true);
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
        Hi there! My name is Jose Stovall and I'm looking for a new job! I am currently
        contracted through Ernst & Young as a Data Modeler, but my contract ends in
        late July so I'm preemptively trying to situate a future, permanent position
        with a new company for after my contract ends!
    </p>

    <p>
        Currently I am located just outside of Nashville, TN but I am looking to
        relocate to the Seattle WA area so I am currently looking for positions both
        in Nashville and in the Seattle area. I am set up to work remotely but I'm 
        always glad to go in to the office as I'm fully COVID-19 vaccinated!
    </p>

    <p>
        You can see my knowledge/interests/expertise here on this main page as well as 
        on the Portfolio page (found using the dropdown above). Additionally my work
        experience can be found using the dropdown, and you can contact me through LinkedIn
        in the menu or <a href="mailto:stovallj1995@gmail.com">via email</a>!
    </p>

    <sub>You should only see this once</sub>
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
