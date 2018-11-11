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

const onMakeDecison = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    const selected = app.options[rand];
    alert(selected);
};

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecison}>What should I do?</button>
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