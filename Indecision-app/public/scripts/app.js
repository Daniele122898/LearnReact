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

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var subOne = function subOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: subOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
