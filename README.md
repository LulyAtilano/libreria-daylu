# DayLu Library Markdown

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

Usando npm:

```js
 $ npm i -g npm
 $ npm i --save DayLu
```

## Uso

1. Se agrega el archivo markdown a trabajar en la carpeta ms bajo el nombre README.md

## Documentación de DayLu


###### DayLu Library
