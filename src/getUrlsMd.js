function getUrlsMd(markdown){
    let regex = /!?\[([^\[.]+?)\]\((.+?)\)/g
   
    let foundMatches = [];
    let match=[];
    
    while( ( match = regex.exec(markdown) ) !== null) {
      if (match[0].startsWith("!")){ continue;}
          
      var match1 = {
        'href' : match[2],
        'text': match[1]
      }
    
      foundMatches.push(match1);
    
    }
    return foundMatches;    
}


var links = getUrlsMd(`# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

);
console.log(links);*/

//module.exports = getUrlsMd;

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

