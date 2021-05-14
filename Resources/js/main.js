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

const codewarsIcn = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" class="codewars"><path d="M.76 12.2l-.08-.04c-.18-.1-.32-.25-.42-.44c-.14-.26-.2-.5-.2-.75l.02-.13c0-.2.05-.38.14-.55l.08-.15c.04-.08.1-.15.15-.22c.06-.07.07-.16.05-.24l-.05-.16c-.06-.2-.1-.4-.1-.6L.32 8.8c0-.22.06-.44.2-.6l.1-.13c.07-.1.18-.16.3-.2c.1-.03.17-.13.18-.25l.02-.34c0-.27.13-.52.33-.7l.24-.18c.05-.05.1-.1.14-.18c.05-.06.06-.14.05-.2c-.02-.1 0-.13.05-.14c.16.06.26.04.33-.04l.13-.17l.36-.4a.4.4 0 0 0 .08-.42l-.12-.26c-.02-.06 0-.13.05-.15c.13 0 .22.05.26.13l.04.07c.06.12.2.18.3.13c.22-.08.4-.1.57-.1h.32c.22 0 .4-.15.44-.38c.04-.28.14-.5.28-.65c.15-.17.32-.3.52-.4c.26-.14.42-.34.47-.6c.07-.32.24-.55.47-.7l.76-.43l.22-.13c.13-.08.25-.18.35-.3l.2-.24c.1-.1.2-.17.32-.2c.1-.03.24-.05.36-.04l.4.03c.2 0 .36.05.52.12l.1.05c.1.04.2.02.25-.05L10 .7l.43-.45c.1-.1.22-.14.35-.12c.13.02.26.07.38.13c.18.1.33.14.5.14h.1c.22 0 .44.03.66.08l.15.04c.15.04.3-.02.4-.14c.03-.05.1-.06.14-.02c.03.02.04.04.05.07c.02.2.14.35.3.4l.16.05a.8.8 0 0 1 .42.3c.1.15.22.3.36.4l.1.1c.1.1.24.14.38.13h.59c.24 0 .47.04.7.14c.22.1.45.12.66.04c.22-.07.45-.1.68-.07l.43.07c.2.02.4.12.52.27l.05.05c.1.1.2.23.3.37c.06.13.2.2.34.2h.62c.15 0 .3.03.42.1c.13.1.24.2.34.3l.1.13c.12.14.18.33.17.53c0 .16.12.3.28.3l.2.02c.14 0 .26.1.33.23l.1.2l.26.58c.04.1.05.2.04.28c0 .1.03.18.1.22l.1.07c.13.1.2.25.18.42l-.07.47l-.02.2c-.02.1.03.23.12.3c.15.1.22.23.23.38v.2c0 .1-.02.22-.1.3c-.06.08-.1.18-.1.3l.03.23c0 .16.1.3.2.4c.14.1.22.26.24.42c.04.25.05.45.05.65v.23c0 .08 0 .16.03.24c.02.07.07.14.13.18l.2.15c.2.13.34.3.42.53c.1.22.13.45.13.68v.08c0 .18-.02.37-.08.54a.71.71 0 0 0 .03.5c.08.14.13.3.15.47c.04.2.02.4-.05.56l-.02.07c-.05.12-.13.23-.23.32c-.1.1-.2.16-.26.23c-.06.06-.1.16-.07.25l.03.14c.05.2.05.4 0 .58v.08c-.04.15-.1.28-.16.4c-.07.13-.17.23-.3.3l-.15.1a.26.26 0 0 0-.12.22c0 .1-.04.2-.1.26l-.15.2c-.1.13-.23.24-.37.3c-.14.1-.26.2-.35.3c-.1.12-.18.26-.22.4c-.04.18-.18.28-.33.28h-.54c-.14 0-.27.1-.33.22c-.07.16-.14.27-.23.37a.8.8 0 0 0-.2.36c-.02.12-.12.2-.22.16c-.13-.06-.26 0-.32.1c-.12.2-.24.35-.37.48l-.07.06c-.13.1-.3.18-.45.18c-.18 0-.27.08-.3.2c-.03.1-.05.23-.06.34c-.02.12-.06.23-.1.33l-.05.06c-.1.15-.18.3-.28.43l-.04.06c-.13.17-.3.3-.5.35a2 2 0 0 1-.66.1h-.14c-.1 0-.2.06-.27.16l-.06.1l-.06.12l-.13.22c-.1.18-.25.3-.45.36c-.2.05-.43.07-.64.06l-.16-.02c-.14 0-.27-.04-.4-.1c-.1-.04-.24 0-.3.1c-.1.14-.22.22-.35.26l-.3.1c-.2.05-.42.05-.63 0l-.16-.05c-.1 0-.2-.05-.28-.1a.54.54 0 0 0-.3-.06l-.13.02c-.2.02-.38 0-.56-.05l-.27-.06a.57.57 0 0 1-.3-.23a.393.393 0 0 0-.3-.2H9.9c-.2-.03-.38-.1-.5-.25L9 22.5l-.14-.12l-.22-.16l-.13-.1c-.15-.1-.33-.18-.52-.2l-.6-.1c-.06 0-.1-.02-.16-.03L7 21.74c-.1-.02-.2-.1-.27-.2c-.06-.1-.17-.14-.27-.1c-.2.08-.36.1-.52.13H5.8c-.26.02-.5-.02-.74-.13c-.24-.1-.4-.25-.55-.44c-.12-.17-.3-.3-.52-.34l-.28-.06c-.2-.04-.4-.12-.58-.24c-.2-.14-.3-.27-.38-.43c-.08-.15-.13-.32-.14-.5v-.08a.495.495 0 0 0-.35-.43c-.23-.07-.4-.17-.55-.3a.71.71 0 0 1-.22-.52l.02-.44c0-.17-.05-.32-.17-.43a.62.62 0 0 1-.2-.43l-.03-.36a5.29 5.29 0 0 0-.13-.78c-.06-.23.03-.46.22-.57l.07-.05c.1-.07.14-.2.08-.32l-.08-.1a.75.75 0 0 0-.3-.2c-.08-.02-.1-.1-.1-.15l.1-.12c.06-.07.05-.18 0-.24a.455.455 0 0 1-.13-.28l-.02-.7c0-.14.02-.28.06-.42c.04-.12 0-.26-.12-.32zm9.9-1.32c.07-.07.06-.2 0-.25a.973.973 0 0 1-.23-.27l-.1-.16a1.46 1.46 0 0 0-.26-.34l-.02-.02a.86.86 0 0 1-.23-.3c-.05-.1-.05-.2 0-.3l.06-.1c.06-.1.1-.24.1-.36v-.04c0-.1-.04-.2-.1-.3c-.04-.08-.08-.18-.1-.28V8.1c-.03-.12 0-.25.08-.35c.08-.13.14-.25.17-.4v-.02c.04-.1.02-.23-.04-.33s-.08-.2-.04-.32l.07-.2c.06-.18.15-.34.27-.48l.14-.15l.1-.12l.06-.06c.06-.06.07-.16.02-.24c-.05-.1-.08-.2-.06-.3l.02-.14c.03-.2.1-.4.23-.56l.04-.04c.15-.2.34-.33.56-.4l.27-.1c.12-.04.2-.17.2-.3c0-.16.05-.3.14-.43l.05-.05c.1-.17.22-.34.3-.52l.07-.13c.02-.03.03-.07.03-.1c0-.17-.1-.32-.26-.33L11.76 2c-.25-.02-.5 0-.74 0l-.85.1c-.13 0-.23.1-.24.24c0 .14-.1.26-.22.3l-.36.1l-.1.03l-.3.1c-.22.07-.4.23-.5.45l-.08.13c-.1.22-.27.4-.48.53c-.2.13-.3.34-.32.58v.1c-.02.2-.08.4-.2.54l-.05.08c-.08.1-.1.23-.05.34c.05.12.08.25.07.38v.53c0 .14-.1.26-.2.3c-.14.05-.23.16-.27.3l-.05.2c-.04.2.03.4.2.52c.16.12.26.3.3.52v.18c.03.2.14.4.32.5c.18.12.32.3.4.5l.05.16c.08.22.26.35.46.37h.06c.18 0 .34.1.44.26c.1.16.26.27.44.3l.28.08c.17.05.33.14.46.27l.02.02c.1.08.26.07.35-.04l.07-.08zm1.14-.92c.1.06.2.03.24-.06l.03-.05c.07-.14.16-.28.26-.4l.2-.3c.03 0 .04-.02.05-.04l.24-.32c.1-.1.22-.17.36-.17c.13 0 .24-.07.3-.2c.04-.14.1-.27.22-.38l.05-.06c.1-.1.2-.15.3-.2c.13-.02.25-.04.37-.04h.3c.12 0 .22-.05.28-.15c.06-.1.15-.17.25-.22l.1-.04c.16-.07.34-.12.52-.14l.2-.02c.12 0 .25 0 .37.07c.1.07.23.06.33-.02l.07-.04c.15-.1.32-.18.5-.2h.02c.2-.04.38-.04.58-.03h.1c.2.03.37.1.5.25l.03.04c.1.1.26.18.4.18h.17c.05 0 .1-.02.13-.07c.03-.03.08-.06.13-.06h.1c.14 0 .27.04.4.08l.17.07c.16.05.33.1.5.12h.12c.08 0 .13-.05.13-.12c0-.1-.02-.2-.07-.28L20.68 7c-.08-.13-.14-.27-.2-.4l-.02-.05c-.05-.1-.05-.2 0-.3V6.2a.17.17 0 0 0-.1-.2h-.08a.796.796 0 0 1-.4-.27l-.1-.1c-.1-.1-.16-.25-.2-.4c-.05-.13-.16-.23-.3-.23h-.42a.552.552 0 0 1-.37-.22l-.04-.05c-.07-.1-.13-.22-.17-.34c-.05-.1-.16-.16-.26-.13l-.12.04c-.2.07-.4.1-.6.08l-.16-.02c-.17 0-.33-.07-.46-.17l-.1-.07c-.08-.06-.16-.1-.25-.14c-.1-.04-.18-.02-.24.05l-.05.06c-.1.1-.24.18-.38.2l-.54.03c-.1 0-.2.05-.27.12c-.08.07-.17.12-.27.14h-.02c-.1 0-.2.07-.3.14v.02c-.1.1-.23.15-.36.15l-.04.02c-.12 0-.24 0-.36.03h-.12c-.17.03-.3.17-.34.35l-.04.23a1 1 0 0 1-.2.43c-.1.12-.22.2-.37.2H12.26c-.1.02-.2.13-.18.25c.02.17 0 .32-.03.47l-.04.17c-.04.15-.14.27-.27.32l-.06.03h-.02c-.06.04-.1.13-.05.2c.06.1.08.2.07.3l-.03.32c0 .12-.05.23-.1.33c-.06.1-.06.2-.02.3l.1.22c.05.1.06.2.03.32c-.03.1-.05.2-.04.3c0 .1.06.2.14.24l.02.02zm7.9 7.23c.1.1.25.14.37.06l.2-.13c.1-.07.18-.17.22-.3v-.02l.1-.3l.06-.1l.04-.1l.04-.07c.04-.08.1-.14.2-.17l.04-.02c.08-.02.13-.1.13-.18c0-.1.05-.18.1-.25l.08-.07l.2-.26v-.02c.06-.08.1-.17.12-.27c.02-.1 0-.2-.04-.3l-.02-.04a.92.92 0 0 1-.07-.26l-.03-.28l-.03-.3c0-.1.04-.2.1-.3a.97.97 0 0 0 .16-.28v-.04l.02-.02c.02-.1-.03-.2-.12-.2c-.1-.05-.2-.13-.23-.25l-.03-.06c-.05-.18-.08-.36-.08-.54l.02-.5v-.03a.3.3 0 0 0-.3-.3h-.02c-.2 0-.36-.06-.5-.2l-.08-.1l-.2-.23l-.26-.3c-.1-.14-.2-.26-.33-.38c-.1-.1-.25-.2-.4-.22l-.2-.03c-.1-.02-.23-.07-.34-.14c-.08-.06-.2-.04-.28.04l-.13.14l-.06.04c-.07.02-.14-.02-.17-.1a.502.502 0 0 1 .02-.38v-.06c0-.07-.06-.12-.12-.1h-.16c-.18 0-.36-.02-.53-.1l-.1-.04a.764.764 0 0 0-.33-.08c-.1 0-.2.02-.3.08l-.04.03c-.12.08-.26.12-.4.13h-.33c-.15 0-.3.05-.4.13c-.13.08-.27.13-.42.16l-.27.04c-.12.03-.25.08-.36.17c-.1.1-.24.16-.37.2l-.05.02a.74.74 0 0 0-.4.3l-.12.12a.27.27 0 0 0 0 .32c.06.1.18.13.3.1l.15-.06c.08-.03.17 0 .24.04c.06.05.15.08.24.07l.25-.03c.14 0 .28 0 .42.04c.15.05.28.1.4.2s.25.14.4.16c.15.02.3.05.44.1l.1.02c.1.03.18.1.24.2c.05.08.1.2.1.3v.03c0 .12.1.2.2.2h.06c.16 0 .33.02.5.07l.07.03c.1.04.2.1.27.2c.08.1.13.2.16.3l.03.14c.03.15.04.3.04.46v.05c0 .1.07.2.18.24c.1.02.22.06.33.12l.05.02c.13.08.26.18.36.3l.05.07c.13.15.2.34.2.53v.07c0 .15-.03.3-.08.44c-.04.12 0 .26.13.3l.07.05c.15.06.28.17.38.3c.1.15.14.32.14.5v.3c-.02.1-.05.18-.1.25s-.05.17 0 .24l.06.1zm-6.4-5.12h-.02c-.04 0-.06.05-.05.1l.04.2c.04.16.06.32.08.48c.02.16.1.3.22.4h.04c.15.12.24.3.25.48v.5c-.02.1 0 .2.06.28l.05.05c.1.12.14.26.15.4l.03.55c0 .13-.08.24-.2.26l-.1.02c-.07 0-.1.08-.1.15c0 .08.03.17.06.25v.02c.03.1.04.2.03.3l-.04.27c-.04.2-.1.38-.2.56l-.07.12a.43.43 0 0 1-.2.2c-.1.04-.17.12-.2.22l-.08.36c-.05.2-.14.4-.26.6h-.02c-.12.16-.27.3-.45.4l-.12.08l-.3.15c-.1.04-.16.13-.18.24l-.05.33c-.03.2-.1.37-.24.5l-.13.15l-.15.15L11 21c-.12.14-.3.2-.5.17l-.36-.07l-.33-.04h-.09c-.04.04-.05.1-.02.16c.07.12.18.2.3.2l.22.04c.1 0 .22.05.32.1c.1.07.2.12.32.15h.02c.13.05.27.06.4.05l.15-.02c.17-.02.33 0 .47.06l.12.04c.05.02.13 0 .18-.05c.06-.06.12-.1.2-.13l.08-.02c.13-.04.26-.06.4-.06h.08c.12 0 .23.02.33.08l.04.02c.07.03.15 0 .2-.06c.03-.07.1-.14.17-.2l.25-.17l.16-.1l.08-.05c.1-.07.24-.1.36-.1l.36-.03c.14-.02.26-.12.3-.26c.04-.15.1-.3.2-.43s.2-.24.3-.34c.13-.1.26-.15.4-.16h.08c.16-.03.28-.18.27-.34v-.67c.02-.1.06-.23.12-.33l.2-.3l.08-.1c.06-.05.1-.12.17-.2l.1-.13a.27.27 0 0 0-.02-.32c-.1-.1-.15-.24-.17-.38v-.04c-.02-.16-.02-.33.03-.5v-.05c.05-.13.12-.26.2-.38c.08-.1.07-.24-.03-.32l-.17-.15a.74.74 0 0 1-.24-.48l-.02-.2c0-.06 0-.13-.02-.2l-.02-.15a.573.573 0 0 0-.26-.4l-.07-.02c-.1-.06-.2-.15-.28-.27c-.08-.1-.12-.24-.15-.38l-.03-.17c0-.06-.04-.1-.1-.13l-.16-.05l-.32-.1c-.1-.02-.2-.1-.27-.17h-.02a.143.143 0 0 0-.22-.02l-.1.1c-.02.03-.04.04-.07.03c-.06 0-.1-.05-.08-.1a.454.454 0 0 0-.17-.42l-.13-.1l-.3-.2c-.08-.03-.2 0-.24.1l-.04.06c0 .02-.03.03-.04.04c-.04 0-.1 0-.1-.05l-.03-.05c-.03-.06-.1-.1-.16-.12zm-1.2 1l-.05-.05c-.05-.04-.1-.03-.15.02c-.07.12-.13.25-.16.38v.02c-.03.13-.15.22-.27.2H11.35c-.14 0-.25.12-.25.26c0 .18-.06.36-.17.5l-.06.06c-.1.13-.25.22-.4.27l-.08.02c-.1.03-.18.1-.2.22c0 .1-.06.2-.14.28l-.1.08c-.12.13-.3.2-.48.22l-.5.05c-.16 0-.3.1-.4.25c-.1.15-.25.25-.4.27l-.22.02c-.16.02-.33.02-.5-.02l-.1-.02l-.27-.07c-.1-.03-.18 0-.24.07l-.1.13a.58.58 0 0 1-.5.2l-.65-.08c-.1 0-.18-.05-.27-.1c-.1-.06-.17-.13-.24-.2l-.25-.3c-.03-.02-.08-.03-.13-.02l-.14.06l-.56.14c-.1.03-.23 0-.33-.06c-.1-.08-.22-.1-.34-.1H3.2c-.12.03-.2.16-.16.28l.04.2c.03.1.02.22-.03.32s-.04.2.03.3l.06.08c.08.12.2.22.3.32c.1.1.2.2.28.33l.15.27c.08.14.2.22.36.22c.15 0 .3.05.42.15l.3.28c.08.07.2.08.28.02l.05-.02c.06 0 .1.04.1.1v.05c0 .13.1.25.23.3l.45.1c.16.05.32.1.47.2h.08c.08 0 .15-.07.14-.16v-.35c0-.1.04-.2.12-.24l.05-.02c.05.02.1.06.08.1v.17c0 .13.04.25.13.34c.1.1.23.12.34.08c.12-.05.24-.06.37-.05l.37.02c.18.02.35 0 .5-.07c.18-.06.33-.14.47-.25l.06-.04l.3-.27c.1-.1.23-.15.35-.15h.4c.2-.02.38-.2.4-.4l.04-.2c0-.13.06-.25.15-.35c.1-.1.2-.16.3-.2l.12-.05c.17-.07.3-.22.36-.4l.06-.24c.05-.2.15-.4.3-.53l.02-.02c.12-.1.14-.3.06-.44l-.03-.07a.42.42 0 0 1-.03-.38c.05-.14.1-.26.18-.38l.1-.14c.04-.08.04-.2-.02-.27a.478.478 0 0 1-.1-.28l-.02-.14v-.34c.02-.1 0-.23-.03-.33l-.04-.12zm-1.43-.76v-.03c0-.1-.06-.16-.14-.16h-.26c-.1.02-.2.02-.28 0h-.45c-.23 0-.45-.04-.67-.1l-.24-.06l-.2-.06l-.45-.15a.849.849 0 0 1-.53-.45l-.05-.1a.337.337 0 0 0-.37-.2c-.17 0-.34 0-.5-.08l-.12-.05c-.23-.1-.4-.3-.4-.57l-.04-.27c-.03-.14-.12-.27-.24-.32c-.14-.06-.27-.14-.4-.23l-.05-.03a1.1 1.1 0 0 1-.35-.47l-.02-.06a.94.94 0 0 1-.02-.5l.02-.06c.04-.13.05-.26.05-.4a.47.47 0 0 0-.14-.33l-.14-.13a.726.726 0 0 1-.27-.53c-.02-.22-.02-.43.02-.64v-.06a.2.2 0 0 0-.2-.2H4.2c-.13 0-.24.08-.3.2c-.05.14-.13.25-.22.36l-.04.05l-.2.2l-.1.1c-.1.1-.16.25-.18.4c-.02.15-.06.3-.12.44l-.02.05c-.05.12-.13.23-.23.3c-.1.08-.17.2-.17.32l-.02.46c0 .2-.03.4-.1.6l-.02.08c-.05.13 0 .27.12.33l.42.18l.04.02c.03 0 .04.02.05.05c.03.04 0 .1-.03.1l-.1.05c-.06.02-.1.08-.12.15l-.02.1v.02l-.1.56c-.02.08-.02.17-.02.26c0 .08.05.15.12.18l.22.1c.1.06.22.13.3.2l.1.08c.03.04.08.08.12.1l.04.04c.07.06.12.14.14.23l.1.45c0 .12.1.22.2.25l.16.05s.03 0 .05.02l.2.06c.16.05.3.14.42.26c.12.1.24.23.34.37l.04.04c.08.1.2.15.32.12s.25-.04.38-.04h.15c.1 0 .23.03.34.1c.1.06.23.1.35.15h.03c.12.05.25.03.35-.04c.1-.08.23-.12.36-.12l.47.03c.1 0 .2-.02.25-.1h.02l.17-.16l.05-.05c.08-.1.2-.14.32-.15h.45c.12 0 .23-.1.28-.2c.05-.1.15-.18.27-.2l.2-.04c.08 0 .15-.07.18-.16c.03-.1.08-.18.15-.24l.16-.16c.1-.1.15-.2.17-.32z" fill="currentColor"/></svg>`;

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
                        <a class="nav-link" target="_blank" href="https://blog.oitsjustjose.com/">
                            <span>
                                <i class="fas fa-blog"></i>
                                <span class="link-desc">
                                    &nbsp;Blog
                                </span>
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="_blank" href="https://www.codewars.com/users/oitsjustjose">
                            <span>
                                ${codewarsIcn}
                                <span class="link-desc">
                                    &nbsp;CodeWars
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
