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

var user = {
    name: 'Serenity',
    age: 'Who knows >.<',
    profession: 'weeb'
};
var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>{user.profession}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);