console.log("App.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'This is a noice app',
    options: []
};

const onFormSubmit = (event) => {
    // stop full page refresh
    event.preventDefault();

    const option = event.target.elements.option.value;

    if(option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((op) => {
                        return <li key={op}>{op}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();