class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      click: {
        url: 'http://cdn3-www.dogtime.com/assets/uploads/2015/03/file_21300_column_national-cute-puppy-day-4.jpg'
      }
    }
  };

  onImageListClick(image) {
    console.log('clicked!', image)
    this.setState({
      click: {
        url: image
      }
    });
  };

  //NEED TO FIX LINES 21 & 24
  render() {
    return (
      <div>
        <div id="image">
          <Image url={this.state.click.url} />
        </div>
        <div id ="list">
          <ImageList list={window.ImageData} onClick={this.onImageListClick.bind(this)} />
        </div>
      </div>
    );
  };
}

window.App = App;