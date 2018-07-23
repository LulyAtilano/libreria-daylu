// EL TEXTO QUE INGRESA EL USUARIO EN EL INPUT SE TRANSFORMARÁ EN UN TEMPLATE STRING

let btn = document.getElementById('btn');
btn.addEventListener('click', transformMdToString);

function transformMdToString(){
    let textInput = `${document.getElementById('userInput').value}`;
   // console.log(textInput);

    let printUrlsMd = getUrlsMd(textInput);
    console.log(printUrlsMd);
    
    //1ER INTENTO PARA IMPRIMIR LOS OBJETOS EN EL DIV SHOWRESULT
    //let textUrlsMds = Object.values(printUrlsMd);
    //console.log(textUrlsMds);

    //2DO INTENTO
    //JSON.stringify(printUrlsMd,replacer);
  

    //let textObject = document.createTextNode(JSON.stringify(printUrlsMd,replacer));
    //console.log(textObject);

    // let containerText = document.getElementById('showResult').innerHTML;

    printTextObject(printUrlsMd);

    //return getUrlsMd;
};

function printTextObject(printUrlsMd) {    
    let textObjetList = document.createElement('p');
    let containerText = document.getElementById('showResult')
    // let stringText = '';
    console.log(printUrlsMd.length);

    for (let i = 0; i < printUrlsMd.length; i++ ) {
        console.log(i);
        
        console.log(printUrlsMd[i]);
        
        let href = printUrlsMd[i].href;
        let text = printUrlsMd[i].text;

        let hrefObject = document.createTextNode(href + " " +text);
        console.log(hrefObject);
        // let textObject = document.createTextNode();
        // console.log(textObject);
        textObjetList.appendChild(hrefObject);
        containerText.appendChild(textObjetList);
    }
        //ANIDAR ELEMENTOS
        // textObjetList.appendChild(hrefObject);
        // textObjetList.appendChild(textObject);
        

//    return stringText;

}



/*
    for ( const prop in textInput ) {
        //console.log (`href: ${textInput}, text: ${textInput}`);
        return (`href: ${textInput}, text: ${textInput}`);
    }
    //return (`href: ${textInput}, text: ${textInput}`);
*/

/*function replacer(key, value) {
    // Filtrando propiedades 
    if (typeof value === "string") {
      return undefined;
    }
    return value;
}*/

// transformMdToString();


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