// import React from "react";

// class PostRequest extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       postId: null,
//     };
//   }

//   componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//       method: "POST",
//       body: JSON.stringify({
//         name: "Vlad",
//         email: "test@gmail.com",
//         message: "123",
//       }),
//     };
//     fetch("http://localhost:3000/addFeedback", requestOptions)
//       .then((response) => response.json())
//       .then((data) => this.setState({ postId: data.id }));
//   }

//   render() {
//     const { postId } = this.state;
//     return (
//       <div className="card text-center m-3">
//         <h5 className="card-header">Simple POST Request</h5>
//         <div className="card-body">Returned Id: {postId}</div>
//       </div>
//     );
//   }
// }

// export default PostRequest;

import { useState } from "react";

const PostRequest = () => {
  const [data, setData] = useState();
  const [err, setErr] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/addFeedback", {
        method: "POST",
        body: JSON.stringify({
          name: "Vlad",
          email: "test@gmail.com",
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

      <button onClick={handleClick}>Make request</button>
    </div>
  );
};

export default PostRequest;
