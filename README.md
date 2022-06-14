# Type Writer

Credit goes it : WebDevSimplified (https://github.com/WebDevSimplified)

Demo : [https://coderx707.github.io/Type-Writer-Library/](https://coderx707.github.io/Type-Writer-Library/)

![Type Writer](https://raw.githubusercontent.com/CoderX707/Type-Writer-Lib/master/typing.gif)

## Installation

Type Writer requires [Node.js](https://nodejs.org/) run.

Install the dependencies and devDependencies and start the server.

```sh
cd Type-Writer-Lib
yarn install
yarn dev
```

## CDN

Javascript CDN
```sh
https://cdn.jsdelivr.net/gh/coderx707/Type-Writer-Library@master/cdn/TypeWriter.js
https://cdn.jsdelivr.net/gh/coderx707/Type-Writer-Library@master/cdn/TypeWriter.min.js
```

CSS CDN
```sh
https://cdn.jsdelivr.net/gh/coderx707/Type-Writer-Library@master/cdn/css/style.css
https://cdn.jsdelivr.net/gh/coderx707/Type-Writer-Library@master/cdn/css/style.min.css
```

## Starter Template

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Type Writer</title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/coderx707/Type-Writer-Library@master/cdn/css/style.min.css">
</head>
<body>
   <div id="typeWriter"></div>
   <script src="https://cdn.jsdelivr.net/gh/coderx707/Type-Writer-Library@master/cdn/TypeWriter.min.js"></script>
   <script>
         const typeWriter = new TypeWriter(document.getElementById('typeWriter'), {
            loop: true,
            typingSpeed: 60,
            deletingSpeed: 100,
            title: 'Type Writer',
            fontSize: 20,
            isDarkTheme: false,
         });
         typeWriter
            .typeString('Hey Friends,')
            .pauseFor(1000)
            .typeString("\n\nI'm Ashish Mule")
            .pauseFor(200)
            .deleteChars(11)
            .typeString('Full Stack Developer')
            .pauseFor(200)
            .deleteChars(20)
            .typeString('Web Developer')
            .pauseFor(200)
            .deleteAll(10)
            .start();
   </script>
</body>
</html>
```
