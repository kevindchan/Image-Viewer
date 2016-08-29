var Image = (url) => (
  <div>
    {console.log('here!', url)}
    <img src={url.url} height="400"/>
  </div>
);

window.Image = Image;