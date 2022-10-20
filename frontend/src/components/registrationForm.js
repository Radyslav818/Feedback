import "./style.css";
import Button from "./Button/button";
import map from "./img/map.png";
import linkidin from "./img/linkidin.png";
import twitter from "./img/twitter.png";
import facebook from "./img/facebook.png";
import pinterst from "./img/pinterest.png";
import yellowSmile from "./img/yellowSmile.png";
import yellowOpacity from "./img/yellowOpacity.png";
import roseSmile from "./img/roseSmile.png";
import yellowSmileFooter from "./img/yellowSmileFooter.png";
import greenFooter from "./img/greenFooter.png";
import roseSmileTwo from "./img/roseSmileTwo.png";
import yellowSmileMap from "./img/yellowSmileMap.png";
import opacityInput from "./img/opacityInput.png";
import opacityCloud from "./img/opacityCloud.png";
import opacityButton from "./img/opacityButton.png";
import opacityButton2 from "./img/opacityButton2.png";
import opacityButton3 from "./img/opacityButton3.png";
import opacityUnderSmily from "./img/opacityUnderSmily.png";
import opacityAboveSmily from "./img/opacityAboveSmily.png";
import opacityAboveSmily2 from "./img/opacityAboveSmily2.png";
import opacityAboveSmily3 from "./img/opacityAboveSmily3.png";
import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/addFeedback", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));
    } catch (err) {}
  };
  return (
    <div>
      <div className="body">
        <div className="all">
          <div className="opacityAboveSmily">
            <img src={opacityAboveSmily} alt="opacityAboveSmily" />
          </div>
          <div className="opacityAboveSmily2">
            <img src={opacityAboveSmily2} alt="opacityAboveSmily2" />
          </div>
          <div className="opacityAboveSmily3">
            <img src={opacityAboveSmily3} alt="opacityAboveSmily3" />
          </div>
          <div className="image_yellow">
            <img src={yellowSmile} alt="yellowSmile" />
          </div>
          <div className="roseSmileTwo">
            <img src={roseSmileTwo} alt="roseSmileTwo" />
          </div>
          <div className="yellowSmileMap">
            <img src={yellowSmileMap} alt="yellowSmileMap" />
          </div>
          <div className="opacityInput">
            <img src={opacityInput} alt="opacityInput" />
          </div>
          <div className="yellowOpacity">
            <img src={yellowOpacity} alt="yellowOpacity" />
          </div>
          <div className="opacityCloud">
            <img src={opacityCloud} alt="opacityCloud" />
          </div>
          <div className="opacityButton">
            <img src={opacityButton} alt="opacityButton" />
          </div>
          <div className="opacityButton2">
            <img src={opacityButton2} alt="opacityButton2" />
          </div>
          <div className="opacityButton3">
            <img src={opacityButton3} alt="opacityButton3" />
          </div>
          <div className="opacityUnderSmily">
            <img src={opacityUnderSmily} alt="opacityUnderSmily" />
          </div>
          <div className="form">
            <h1>Reach out to us!</h1>
            <br />
            <form onSubmit={handleSubmit} method="post">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id=""
                placeholder="Your name*"
                required
              />
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id=""
                placeholder="Your e-mail*"
                required
              />
              <br />
              <textarea
                put
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your message*"
                required
              ></textarea>
              <br />
              <button onClick={handleClick}>Send message</button>
            </form>
            <br />
          </div>
        </div>
        <div className="imageMap">
          <img src={map} alt="map" />
        </div>
      </div>
      <div className="footer">
        <div className="greenFooter">
          <img src={greenFooter} alt="greenFooter" />
        </div>
        <div className="roseSmile">
          <img src={roseSmile} alt="roseSmile" />
        </div>
        <div className="yellowSmileFooter">
          <img src={yellowSmileFooter} alt="yellowSmileFooter" />
        </div>
        <div className="links">
          <div className="linkidin">
            <a
              href="https://www.linkedin.com/in/vladyslav-radetskyi-0b6a22228/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkidin} alt="linkidin" />
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div className="facebook">
            <a
              href="https://www.facebook.com/profile.php?id=100007717969122"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div className="pinterst">
            <a
              href="https://www.pinterest.ca/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pinterst} alt="pinterst" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
