import TypeWriter from './src/index';

const typeWriter = new TypeWriter(
    document.querySelector('#typeWriter') as HTMLDivElement,
    {
        loop: true,
        typingSpeed: 60,
        deletingSpeed: 100,
        title: 'Web Developer',
        fontSize: 20,
        isDarkTheme: true,
    }
);

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
    .typeString('Here I am introducing typescript typing library')
    .pauseFor(1000)
    .typeString('\n\nI watched the video of WebDevSimplified')
    .pauseFor(1000)
    .typeString('\n\nAnd thought I could make some improvements in this library')
    .pauseFor(1000)
    .deleteChars(100)
    .typeString('\n\nHere, is the final result. Thanks also to WebDevSimplified')
    .pauseFor(2000)
    .deleteAll(10)
    .start();
