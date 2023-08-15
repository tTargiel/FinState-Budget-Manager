import "./tile.scss";

const Tile = ({ data }) => {
  if (data.urlToImage == null) {
    return null;
  } else {
    return (
      <div className="tile">
        <div className="left">
          <img className="image" src={data.urlToImage} alt={data.source.name} />
        </div>
        <div className="right">
          <span className="title">{data.title}</span>
          <span className="description">{data.description}</span>
          <a className="author"href={data.url} target="_blank" rel="noreferrer">{data.source.name}</a>
        </div>
      </div>
    );
  }
};

export default Tile;
