import { useState } from "react";
import "./styles.css";
var heading = "Emoticon";
var Dictionary = {
  "😀": "Grinning",
  "😆": "Laughing",
  "😉": "Wink",
  "😊": "Blush",
  "😇": "Innocent",
  "😍": "Heart eyes",
  "😋": "Yum",
  "🤔": "Thinking face",
  "🥱": "Yawning face",
  "😞": "Disappointed face",
  "😨": "Fearful face",
  "🤥": "Lying face"
};

var emojiaray = Object.keys(Dictionary);

export default function App() {
  var [meaning, emoji] = useState("");
  function inputChange(event) {
    var userinput = event.target.value;
    var meaning = Dictionary[userinput];
    if (meaning == undefined) {
      emoji("emoji not in our database");
    } else {
      emoji(meaning);
    }
  }
  function emojissmeaning(item) {
    var meaning = Dictionary[item];
    emoji(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "black",
          padding: "0px",
          margin: "0px"
        }}
      >
        <span style={{ color: "orange" }}>{heading}</span>{" "}
        <span style={{ color: "white" }}>Interpreter </span>
      </h1>
      <input
        style={{
          margin: "15px",
          border: "2px solid black",
          borderRadius: "10px",
          width: "30%",
          fontSize: "1rem",
          fontWeight: "bold"
        }}
        onChange={inputChange}
        placeholder="enter emoji here"
      ></input>
      <h2>
        MEANING==>
        <span style={{ color: "orange", fontWeight: "bolder" }}>{meaning}</span>
      </h2>
      <h3
        style={{
          marginTop: "60px",
          marginBottom: "2px",
          display: "inline",
          fontWeight: "bolder"
        }}
      >
        emojis we know--
      </h3>
      {emojiaray.map((item) => {
        return (
          <span
            onClick={() => emojissmeaning(item)}
            style={{
              cursor: "pointer",
              backgroundColor: "grey"
            }}
            key={item}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
