import "./tile.scss";

const Tile = ({ data }) => {
  return (
    <div className="tile">
      <div className="left">
        <img className="image" src={(data.source.name === "Fox Business" ? "http://img1.wikia.nocookie.net/__cb20120407163458/logopedia/images/a/a6/Fox-news-logo-1.jpg" : data.urlToImage) || (data.source.name === "The Guardian" ? "https://www.cognacpainturaud.fr/wp-content/uploads/2019/05/guardian-logo-kooth-1240x925.png" : data.urlToImage) || (data.source.name === "YouTube" ? "http://www.camelproductions.net/wp-content/uploads/2017/08/Youtube-logo-2017.jpg" : data.urlToImage)} alt={data.source.name} />
      </div>
      <div className="right">
        <span className="title">{data.title}</span>
        <span className="description">{data.description}</span>
        <a className="author"href={data.url} target="_blank" rel="noreferrer">{data.source.name}</a>
      </div>
    </div>
  );
};

export default Tile;
