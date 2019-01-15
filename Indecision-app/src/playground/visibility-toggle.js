class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.data = {
            visText: "Show details",
            invisText: "Hide details",
            textToShow: "Some text that is hidden"
        };
        this.state = {
            visibility: false
        };
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
          <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.handleToggle}>{this.state.visibility ? this.data.invisText : this.data.visText}</button>
              { this.state.visibility && (<p>{this.data.textToShow}</p>) }
          </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const data = {
//     visible: false,
//     visText: "Show details",
//     invisText: "Hide details",
//     textToShow: "Some text that is hidden"
// };
//
// const toggleHide = () => {
//     data.visible = !data.visible;
//     render();
// };
//
// const appRoot = document.getElementById("app");
//
// const render = () => {
//     const app = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleHide}>{data.visible ? data.invisText : data.visText}</button>
//             {data.visible && (
//                 <p>{data.textToShow}</p>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(app, appRoot);
// };
//
// render();