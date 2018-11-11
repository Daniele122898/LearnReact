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
    age: 20,
    profession: 'weeb'
};

function getProfession(profession) {
    if (profession) return React.createElement(
        'p',
        null,
        profession
    );
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getProfession(user.profession)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
