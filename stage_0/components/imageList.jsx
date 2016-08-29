var ImageList = (props) => (
  <div>
    <div className="image-list">
    <h1>Puppies!</h1>
      {props.list.map((image, i) =>
          <ImageListEntry image={image} onClick={props.onClick} key={i} />
      )}
    </div>
  </div>
);

window.ImageList = ImageList;