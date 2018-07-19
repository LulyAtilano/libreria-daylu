const fs = require('fs');

fs.readFile("../md/README.md", "utf-8", (err, data) => {
   if(err) {
       console.log("error", err);

   } else {
       console.log(data);

   }

  function getUrl (){
      var searchUrl = /\[.+\]\(.+\)/g;
      var getUrl = textGiven.match(searchUrl);
      console.log(getUrl);
  }


});



//const fs = require('fs');  //  *./.md require import

//Obtener texto de markdown e imprimilo en consola gitbash

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


$(document).ready(function(){
    console.log(data);

    function initialize() {
       var  locations=Object.keys(data);
        console.log(locations);
    }

   function locationDetail(locationName){
       var locationObj = data[name];
       var generations = Object.keys(locationObj);
       generations.forEach(function (item, index){
           var generation =locationObj[item];
           var students= generation.students;

       });

   };
   initialize ();







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
