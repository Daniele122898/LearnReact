'use strict';

console.log("App.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'This is a noice app'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var user = {
    name: 'Serenity',
    age: 'Who knows >.<',
    profession: 'weeb'
};

function getProfession(profession) {
    if (profession) return profession;else return "unknown";
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        getProfession(user.profession)
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
