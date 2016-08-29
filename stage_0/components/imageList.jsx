var ImageList = (props) => (
  <div>
    <h1>Puppies!</h1>
    <div className="image-list">
      {props.list.map((image, i) =>
          <ImageListEntry image={image} onClick={props.onClick} key={i} />
      )}
    </div>
  </div>
);

window.ImageList = ImageList;