const elementBody = document.querySelector("body");
const parser = new DOMParser();

function parseFunction(elementParse,parser) {
    return parser.parseFromString(elementParse,'text/html').body.firstChild;
}