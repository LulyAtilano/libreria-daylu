'use strict';

function getUrlsMd(transformMdToString) {
    var regex = /!?\[([^\[.]+?)\]\((.+?)\)/g;

    var foundMatches = [];
    var match = [];

    while ((match = regex.exec(transformMdToString)) !== null) {
        if (match[0].startsWith("!")) {
            continue;
        }

        var match1 = {
            'href': match[2],
            'text': match[1]
        };

        foundMatches.push(match1);
    }
    return foundMatches;
}

if (typeof window == "undefined") {
    console.log('consola');
    module.exports = getUrlsMd;
} else {
    console.log('navegador');
    window.getUrlsMd = getUrlsMd;
}

/*( function(){ // función anónima autoinvocada

  const allanPoe = (number) => {
      let crow = "";

      for (let i = 0; i < number ; i++ ){
          crow += "nunca más ";
      }
      return crow;
  };

  if ( typeof window == "undefined" ) {
      console.log('consola');
      module.exports = allanPoe;
  } else {
      console.log('navegador');
      window.allanPoe = allanPoe;
  }

})();*/

/*
//Buscar http en string
var content;


const textGiven =`# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

//Señalar elementos que identifican un url
var searchUrl = /\[.+\]\(.+\)/g;

var urlFound = textGiven.match(searchUrl);
console.log(urlFound)



console.log(urlFound[0]); //Es un array de un solo index
//Separar array url found en name y link

//Dividir nombre de url
/*function divideStringTittle (){

    var getTittle = /\[\]/g;
    var urlTittle = urlFound.match(getTittle);
    console.log(getTittle)
}

divideStringTittle ();

//Dividir link del url
function divideStringLink (){

    var getLink = ^(http|https):\/\ $/g;  //No sirve linea rejex , opcion 2: /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/ opcion3: https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)
    var urlLink = urlFound.match(getLink);
    console.log(getLink)
}

divideStringLink ();

//Asignar getTittle como key, getLink como value y convertir a objeto textGivenUrl

/*var textGivenUrl = {
   'name': 'urlTittle',
   'link': 'urlLink'
}*/

/*var textGivenUrl1 = {
    textGiven['name'] = '',
    textGiven['link'] = ''
}

console.log(textGivenUrl1)

var textGivenUrl2 = {
    textGiven['name'] = '',
    textGiven['link'] = ''
}

console.log(textGivenUrl2)

//Hacer array con los dos objetos












/*const fs = require('fs');

fs.readFile("../md/README.md", "utf-8", (err, data) => {
   if(err) {
       console.log("error", err);

   } else {
       console.log(data);

   }

  function getUrl (){
      var searchUrl = /\[.+\]\(.+\)/g;
  }
});*/

/*var textSample = "textSample.md";

var textGiven = document.getElementById('textSample.md');
console.log(textGiven)*/

/*var content;

function getInput() {
    var userInput = document.getElementById("userInput").value;
    console.log(userInput);
}

getInput();

const textGiven =`# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

//Señalar elementos que identifican un url
var searchUrl = /\[.+\]\(.+\)/g;

var getUrl = textGiven.match(searchUrl);
console.log(getUrl);


/*const fs = require('fs');

fs.readFile("../md/README.md", "utf-8", (err, data) => {
   if(err) {
       console.log("error", err);
   } else {
       console.log(data);
   findUrl();
   }
});

const searchUrl = /\[(.?)\]\((.?|(http?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/+#-]*[\w@?^=%&/+#-]))\)/gi;
console.log(searchUrl)

const findUrl = function (regex) {

const fs = require('fs');

fs.readFile("../md/README.md", "utf-8", (err, data) => {
    if(err) {
        console.log("error", err);

    } else {
        console.log(data);

    //findUrl();

    }
});

const regex = /\[(.?)\]\((.?|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/+#-]*[\w@?^=%&/+#-]))\)/gi;

const findUrl = function (regex) {

 var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

var pathArray = window.location.pathname.split( '/' );

var secondLevelLocation = pathArray[0];

var newPathname = "";
for (i = 0; i < pathArray.length; i++) {
  newPathname += "/";
  newPathname += pathArray[i];
}

*/