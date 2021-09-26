import React, { useState } from "react";
import "./styles.css";

const emojiDB = {
  "\u{1F975}":
    "This emoji means hot face with sweat or some people use it for sarcasm.",
  "\u{1F410}":
    "GOAT. stands for “Greatest of all time” which is a short puniciation for the word| He is the G.O.A.T That was the G.O.A.T. ",
  "👁️👄👁️": "It is what it is.",
  "🔥": "It's Lit.",
  "😮💨":
    "Used to project how something is impressive or how surprising something is..",
  "💁✋": "I have had enough of your complaining,.",
  "🤣": "Rolling on the Floor Laughing",
  "🤩": "Star-Struck",
  "🤪": "Zany Face",
  "😬": "Grimacing Face"
};

const emojisKeys = Object.keys(emojiDB);

export default function App() {
  const [is_emoji, emojiSet] = useState("");
  const [disEmoji, setDisEmoji] = useState("");

  function whenInput(event) {
    let input = event.target.value;
    let explainaion = emojiDB[input];
    if (explainaion === undefined) {
      explainaion =
        "Currently not in our database.Check back again. We add more everyday";
    }
    setDisEmoji(input);
    emojiSet(explainaion);
  }

  function whenClicked(emoji) {
    let explaination = emojiDB[emoji];
    setDisEmoji(emoji);
    emojiSet(explaination);
  }

  return (
    <div className="App">
      <h1 className="h1">Urban Emoji Dictionary</h1>
      <input
        onChange={whenInput}
        placeholder="To search, Enter an Emoji or Select one from below..."
      />
      <div className="box-emoji">
        {emojisKeys.map(function (emoji) {
          return (
            <span onClick={() => whenClicked(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>

      <div className="output">
        <h3>The Urban Meaning Of: {disEmoji}</h3>
        <span>{is_emoji}</span>
      </div>
      <footer>
        <p>Thanks to Urban Dictionary for the explainations</p>
        <p>Sahil Shah</p>
      </footer>
    </div>
  );
}
