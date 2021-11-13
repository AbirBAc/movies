import React, { useState } from "react";
import ReactDOM from 'react-dom';



function Movielist() {
  return (
<div>
      
      <form >
        <label>
          Add your movie name :
          <input type="text" Moviename="Moviename" />
        </label>
        <input type="Submit" value="Ajouter" />
      </form>
    </div>
)
}
export default Movielist;