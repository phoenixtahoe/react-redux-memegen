import React from "react";
import PropTypes from "prop-types";

function Meme({ removeMeme, topText, bottomText, url, id }) {

  function handleDeleteMeme() {
    removeMeme(id);
  }

  return (
      <div id={id} className="my-2 container card">
        <span className="top-text">{topText}</span>
        <img src={url} />
        <span className="bottom-text">{bottomText}</span>
        <button className="mb-2 btn btn-danger" onClick={handleDeleteMeme}>
          Remove
        </button>
      </div>
  );
}

Meme.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Meme;
