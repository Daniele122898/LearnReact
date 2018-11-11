'use strict';

console.log("App.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'This is a noice app',
    options: []
};

var onFormSubmit = function onFormSubmit(event) {
    // stop full page refresh
    event.preventDefault();

    var option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        renderApp();
    }
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
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
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
