// EL TEXTO QUE INGRESA EL USUARIO EN EL INPUT SE TRANSFORMARÁ EN UN TEMPLATE STRING

let btn = document.getElementById('btn');
btn.addEventListener('click', transformMdToString);

function transformMdToString(){
    let textInput = `${document.getElementById('userInput').value}`;
    //console.log(textInput);

    let printUrlsMd = getUrlsMd(textInput);
    console.log(printUrlsMd);
    //let textObject = document.createTextNode(printUrlsMd);
    //console.log(textObject);
    let containerText = document.getElementById('showResult');
    containerText.innerHTML = printUrlsMd;

    return containerText;
};

transformMdToString();




/*const links = getUrlsMd(`# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

);*/

//console.log(links);