function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "HTML") {
        return "Hypertext Markup Language";
    }
    else if (input == "What is HTML") {
        return "HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web.";
    }
    else if (input == "What are Tags") {
        return "HTML tags are composed of three things: an opening tag, content and ending tag.";
    }
    else if (input == "How to create a nested webpage in HTML?") {
        return "The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage. The HTML <iframe> tag defines an inline frame.";
    }
    else if (input == "basic structure of the HTML template?") {
        return "HTML5 is the latest or updated version of the markup language that defines HTML.";
    }
    else if (input == "What is HTML5") {
        return "HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web.";
    }
    else if (input == "What is CSS") {
        return "Casscading Style Sheet";
    }
    else if (input == "What is CSS frameworks") {
        return " CSSframeworks are libraries that make web page styling easier. Some of them are Foundation, Bootstrap, Gumby, Ukit, Semantic UI, etc. ";
    }
    else if (input == "How can CSS be integrated into an HTML page?") {
        return "There are three ways of integrating CSS into HTML: using style tags in the head section, using inline-styling, writing CSS in a separate file, and linking into the HTML page by the link tag.";
    }
    else if (input == "What is class and an ID") {
        return " Class is a way of using HTML elements for styling. They are not unique and have multiple elements. Whereas ID is unique and it can be assigned to a single element. ";
    }
    else if (input == "z-index") {
        return "This is one of the most frequently asked CSS interview questions. Z-index is used to specify the stack order of elements that overlap each other. Its default value is zero and can take both negative and positive values. A higher z-index value is stacked above the lower index element. It takes the following values- auto, number, initial, and inherit. ";
    }
    else if (input == " How is opacity specified in CSS3") {
        return "Opacity is the measure of content transparency. It is measured in the range from 0 to 1. Value 1 means the content is completely opaque. It is not supportable in the internet browser. Also, the 60% of opacity is applicable in the div section where we need to apply the filter property (polyfill) to make it completely opaque.";
    }
    else if (input == "What is JavaScript") {
        return "JavaScript is a scripting language. It is different from Java language. It is object-based, lightweight, cross-platform translated language";
    }
    else if (input == "What is Reactjs") {
        return "React JavaScript";
    }
    else if (input == "What is jsx") {
        return "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.";
    }
    else if (input == "What are props in React") {
        return "Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.        ";
    }
    else if (input == "What is Redux") {
        return "Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management.";
    }
    else if (input == "What is React Router?") {
        return "React Router is a routing library built on top of React, which is used to create routes in a React application.";
    }
    else if (input == "What is Python programming") {
        return "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax.";
    }
    else if (input == "What is C programming") {
        return "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft";
    }
    else if (input == "What is C++ programming") {
        return "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft";
    }
    else if (input == "What is Java programming") {
        return "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself.";
    }
    else if (input == "What is php") {
        return "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development";
    }
    else if (input == "android") {
        return "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT).";
    }
    else if (input == "node.js") {
        return "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.";
    }
    else {
        return "Try asking something else!";
    }
}