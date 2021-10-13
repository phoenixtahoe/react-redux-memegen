import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Meme from "./Meme"
import MemeForm from "./MemeForm"

import "./App.css";

function App() {
  const memes = useSelector(st => st.memes);
  const dispatch = useDispatch();

  function createMeme(meme) {
    dispatch({ type: "ADD_MEME", meme: meme });
  }

  function removeMeme(id) {
    dispatch({ type: "REMOVE_MEME", id: id });
  }

  const memeList = memes.map(e => (
    <Meme
      key={e.id}
      topText={e.topText}
      bottomText={e.bottomText}
      url={e.url}
      removeMeme={() => removeMeme(e.id)}
    />
  ));

  return (
    <div className="App">
      <main>
        <MemeForm add={createMeme} />
        <div className="my-3 text-center">
          {memeList}
        </div>
      </main>
      
    </div>
  );
}

export default App;
