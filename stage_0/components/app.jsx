class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   click: //do something here
    // }
  }

  // onImageListClick(image) {
  //   this.setState({
  //     click: image
  //   });
  // }

  //NEED TO FIX LINES 21 & 24
  render() {
    return (
      <div>
        <div>
          <ImageList list={window.exampleImageData} onClick={this.onImageListClick.bind(this)} />
        </div>
        <div>
          <Image image={this.state.click} />
        </div>
      </div>
    );
  }
}

window.App = App;