import React from "react";

import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form form="Login" /> : <Form form="Register" />}
    </div>
  );
}

export default App;
