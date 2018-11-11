"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    )
);

var userName = 'Serenity owo';
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName + " :o"
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        "Who knows >.<"
    ),
    React.createElement(
        "p",
        null,
        "Weeb"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
