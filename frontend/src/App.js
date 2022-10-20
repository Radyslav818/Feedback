import React from "react";
import "./App.css";
import RegistrationForm from "./components/registrationForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
