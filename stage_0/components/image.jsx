var Image = (image) => (
  <div id="image">
    <img src={image.image.url} height="400"/>
    <p>This is a {image.image.title} puppy with a {image.image.rating} of 5 rating.</p>
  </div>
);

window.Image = Image;