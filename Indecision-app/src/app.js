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

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);