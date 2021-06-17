A reproducible example for Webpack 5 incompatibility / possible bug

## The issue

I deploy a bunch of Lambdas to AWS to handle API requests. The runtime is Node 14.

AWS expects that each entry point should export a variable named 'handler': `export const handler = ...`

When I use the Webpack 5 version as the body of a Lambda function, I get the following error

```
"errorMessage": "the-filename.handler is undefined or not exported",
```

## Generated Output

This is just here as a convenience in case you don't want to run the build. I know this output is not designed to be human-readable. If you want to generate the
output with other params, e.g. development mode, then please clone the project.

Webpack 4

```
module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handler=void 0;t.handler=()=>{}}]);
```

Webpack 5 (which I do not expect to be identical, by any means)

```
(()=>{"use strict";var e,r={};e=r,Object.defineProperty(e,"__esModule",{value:!0}),e.handler=void 0,e.handler=()=>{},module.exports.main=r})();
```

## How to run

The master branch contains the Webpack 4 version. Clone the project and run 

```
npm install
npm run webpack
```

Then check `dist/handler.js`.

There's a branch named `webpack5` which contains the upgrades for Webpack 5.

```
git checkout webpack5
npm install
npm run webpack
```
