import React from "react";

const MovieDetail = ({movie}) => {
    const{title,poster}=movie
  return (
    <>
    <div className="section-line">
      <div className="movie-info-entity">
        <div className="entity-poster" data-role="hover-wrap">
          <div className="embed-responsive embed-responsive-poster">
            <img className="embed-responsive-item" src={poster} alt />
          </div>
          <div className="d-over bg-theme-lighted collapse animated faster" data-show-class="fadeIn show" data-hide-class="fadeOut show">
            <div className="entity-play">
              <a className="action-icon-theme action-icon-bordered rounded-circle" href="https://www.youtube.com/watch?v=d96cjJhvlMA" data-magnific-popup="iframe" savefrom_lm_index={0} savefrom_lm={1}>
                <span className="icon-content"><i className="fas fa-play" /></span>
              </a><span style={{padding: 0, margin: 0, marginLeft: 5}}><a href="http://savefrom.net/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dd96cjJhvlMA&utm_source=userjs-chrome&utm_medium=extensions&utm_campaign=link_modifier" target="_blank" title="Получи прямую ссылку" savefrom_lm={1} savefrom_lm_is_link={1} style={{backgroundImage: 'url("data:image/gif', backgroundRepeat: 'no-repeat', width: 16, height: 16, display: 'inline-block', border: 'none', textDecoration: 'none', padding: 0, position: 'relative'}} /></span>
            </div>
          </div>
        </div>
        <div className="entity-content">
          <h2 className="entity-title">{title}</h2>
          <div className="entity-category">
            <a className="content-link" href="movies-blocks.html">comedy</a>,
            <a className="content-link" href="movies-blocks.html">detective</a>
          </div>
          <div className="entity-info">
            <div className="info-lines">
              <div className="info info-short">
                <span className="text-theme info-icon"><i className="fas fa-star" /></span>
                <span className="info-text">8,7</span>
                <span className="info-rest">/10</span>
              </div>
              <div className="info info-short">
                <span className="text-theme info-icon"><i className="fas fa-clock" /></span>
                <span className="info-text">130</span>
                <span className="info-rest">&nbsp;min</span>
              </div>
            </div>
          </div>
          <ul className="entity-list">
            <li>
              <span className="entity-list-title">Release:</span>July 21, 2014 (Dolby Theatre), August 1, 2014 (United States)</li>
            <li>
              <span className="entity-list-title">Directed:</span>
              <a className="content-link" href="#">Lindson Wardens</a>,
              <a className="content-link" href="#">Anabelle One</a>
            </li>
            <li>
              <span className="entity-list-title">Starring:</span>
              <a className="content-link" href="#">Octopus Wardens</a>,
              <a className="content-link" href="#">Quanta Wardens</a>,
              <a className="content-link" href="#">Anabelle Two</a>,
              <a className="content-link" href="#">Anabelle Three</a>
            </li>
            <li>
              <span className="entity-list-title">Production company:</span>
              <a className="content-link" href="#">Re-Production Bro.</a>,
              <a className="content-link" href="#">Pentakid</a>
            </li>
            <li>
              <span className="entity-list-title">Country:</span>
              <a className="content-link" href="#">USA</a>,
              <a className="content-link" href="#">India</a>
            </li>
            <li>
              <span className="entity-list-title">Language:</span>english</li>
          </ul>
        </div>
      </div>
    </div>
  </>
 
  )
}

export default MovieDetail;