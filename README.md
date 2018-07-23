# DayLu Library

* **Autoras :** _Lourdes Atilano y Dayra Álvarez_
* **Bootcamp :** _Laboratoria - 1er Generación GDL_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_

***

  La biblioteca **DayLu** implementa un módulo de Node.js que recibe un string (en formato Markdown) y
extrae todos los links encontrados. Devolviendo un arreglo de objetos como se muestra a continuación:

```js
const extractLinksFromMd = require('extract-links-from-md');
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const links = extractLinksFromMd(str);

console.log(links);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```
***
## Instrucciones de instalación

Descarga la libreria desde npm:

La libreria puede instalarse de manera local o global, se necesita colocarse en la carpeta donde sea rquerido. 

Para instalar usando npm:

```js
npm install requirejs
```

```js
 $ npm i -g npm
 $ npm i --save DayLu-library-markdown-2018
```

Se creara una carpeta llamada node_modules, que lista un directorio del paquete instalado junto con un archivo json. 

Este descargable es la primer version de DayLu.

## Uso desde Node.js
 
El texto de markdown a revisar se ingresa en el html, dentro del **div** con **id="showResult".**

Para ejecutarse desde Node.js de introduce **DayLu-library-markdown-2018** más el nombre de archivo de usuario, ejemplo: 

**DayLu-library-markdown-2018 app.js**


```js
 DayLu-library-markdown-2018 app.js
```

 Este uso supone la instalacion de require.js , en caso de usar el archivo directamente sera necesario  reemplazar **requirejs** con el source del archivo , ejemplo: **('../geturlurlsmd.js')**

## Uso en web. 

   Se agrega el index.html incluido en el paquete DayLu, al ejecutarlo direcciona a la web de la libreria, donde solo sera necesario ingresar el texto a revisar para obtener el resultado.
   

