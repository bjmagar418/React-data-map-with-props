import React from "react";
import '../../public/index.css';
import Entry from "./Entry";
import { emojipedia } from "../emojipedia";


function createEntry(emojiTerm){
  return <Entry
  key={emojiTerm.key}
  emoji={emojiTerm.emoji}
  name={emojiTerm.name}
  meaning={emojiTerm.meaning}

  />
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="flex flex-wrap justify-between my-16 mx-auto max-w-[90%]">
       {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
