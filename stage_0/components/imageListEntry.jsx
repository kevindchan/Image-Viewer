var ImageListEntry = (props) => (
  <div className="image-list-entry">
      <div className="image-list-entry-title" onClick={ function() { props.onClick(props.image.url); } }>
      {props.image.title}
      </div>
  </div>
);

window.ImageListEntry = ImageListEntry;