const data = {
    visible: false,
    visText: "Show details",
    invisText: "Hide details",
    textToShow: "Some text that is hidden"
};

const toggleHide = () => {
    data.visible = !data.visible;
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const app = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleHide}>{data.visible ? data.invisText : data.visText}</button>
            {data.visible && (
                <p>{data.textToShow}</p>
            )}
        </div>
    );

    ReactDOM.render(app, appRoot);
};

render();