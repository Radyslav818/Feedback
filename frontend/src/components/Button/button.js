// import React from "react";
// import "./button.css";

// class Button extends React.Component {
//   render() {
//     return (
//       <div className="button">
//         <button className="startButton" onClick={this.startButton}>
//           Send message
//         </button>
//       </div>
//     );
//   }
// }

// export default Button;

import { useState } from "react";
import "./button.css";

const Button = () => {
  const [data, setData] = useState();
  const [err, setErr] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/addFeedback", {
        method: "POST",
        data: JSON.stringify({
          name: "Some name",
          email: "some_email@test.net",
          message: "123",
        }),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    }
  };

  console.log(data);

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Send message</button>
    </div>
  );
};

export default Button;
