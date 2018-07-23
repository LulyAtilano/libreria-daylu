# DayLu Library Markdown

* **Autoras :** _Lourdes Atilano y Dayra Álvarez_
* **Bootcamp :** _Laboratoria - 1er Generación GDL_
* **Descripción:**  La biblioteca DayLu Library Markdown implementa un módulo de Node.js que recibe un string (en formato Markdown) y extrae todos los links encontrados.

***
La biblioteca **DayLu Library Markdown** implementa un módulo de Node.js que recibe un string (en formato Markdown) y extrae todos los links encontrados. Devolviendo un arreglo de objetos como se muestra a continuación:

```js
const getUrlsMd = require('getUrlsMd');
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

const links = getUrlsMd(str);

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
 $ npm i DayLu-library-markdown
 ```

## Documentación

### Uso desde Node.js

Dentro del archivo donde se van a extraer los links se importa el archivo principal **getUrlsMd.js** que se encuentra en la subcarpeta modules dentro de la carpeta src.

```js
const getUrlsMd = require('getUrlsMd');
 ```

### Uso en navegador. 

1. Abrir archivo index.html
2. Insertar en el form el texto en formato markdown de donde se quieran extrar los links (url y href), dentro del div con id "userInput".
3. Dar click en el botón y la información aparecerá pintada en el div inferior con id "showResult".