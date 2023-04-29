import React from 'react';
import InputForm from "./InputForm.js";
import ListItem from './ListItem.js';
function App() {

  return (
    <>
      <InputForm />
      <ul>
        <ListItem id={""} text={""} />
      </ul>
    </>
  )

}
export default App;