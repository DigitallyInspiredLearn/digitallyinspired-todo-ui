const parseFunction = (elementParse) => new DOMParser().parseFromString(elementParse,'text/html').body.firstChild;
const elementBody = document.querySelector("body");

elementBody.appendChild(parseFunction(`<header onclick="deleteValueFromAddTask()">
      <img src="img/logo1.png" class="logo">
      <b>To</b>
      <p id="line"></p>
      <b>do</b>
    </header>`));
elementBody.appendChild(parseFunction(`<div id="content" onclick="deleteValueFromAddTask()">
        <main onclick="deleteValueFromAddTask()"></main>
        <div class="addNewArticleButton" onclick="funcOpenWindowAdd()">+</div>
        </div>`));