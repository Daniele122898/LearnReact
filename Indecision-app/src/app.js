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

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const subOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);
};

renderCounterApp();