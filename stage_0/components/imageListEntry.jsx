var ImageListEntry = (props) => (
  <div className="image-list-entry">
      <div className="image-list-entry-title" onClick={ function() { props.onClick(props.image.url); } }>
      <h3>{props.image.title}</h3>
      </div>
  </div>
);

window.ImageListEntry = ImageListEntry;