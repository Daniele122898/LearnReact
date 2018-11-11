console.log("App.js is running");

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Serenity</h1>
        <p>{"Age: Who knows >.<"}</p>
        <p>Weeb</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);