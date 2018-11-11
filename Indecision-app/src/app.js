console.log("App.js is running");

let app = {
    title: 'Indecision App',
    subtitle: 'This is a noice app'
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var user = {
    name: 'Serenity',
    age: 'Who knows >.<',
    profession: 'weeb'
};

function getProfession(profession) {
    if (profession)
        return profession;
    else
        return "unknown";
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>{getProfession(user.profession)}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);