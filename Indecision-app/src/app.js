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
    age: 20,
    profession: 'weeb'
};

function getProfession(profession) {
    if (profession)
        return <p>{profession}</p>;
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getProfession(user.profession)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);