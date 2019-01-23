const elementBody = document.body;

var headers = `<header>
        <img
          src="image/logo.svg"
          class="logo"
          alt="DI Logo"
          draggable="false"
        />
        <h1 class="app-title">To</h1>
        <span class="app-title-line"></span>
        <h1 class="app-title">do</h1>
      </header>`;

headers = new DOMParser().parseFromString(headers, "text/html").body.firstChild;

elementBody.appendChild(headers);

