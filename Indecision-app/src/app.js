console.log("App.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'This is a noice app'
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

const user = {
    name: 'Serenity',
    age: 20,
    profession: 'weeb'
};

function getProfession(profession) {
    if (profession)
        return <p>{profession}</p>;
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getProfession(user.profession)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);