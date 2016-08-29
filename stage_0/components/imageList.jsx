var ImageList = (props) => (
  <div className="image-list">
    {props.list.map((image, i) =>
        <ImageListEntry image={image} onClick={props.onClick} key={i} />
    )}
  </div>
);

window.ImageList = ImageList;