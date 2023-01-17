import React, {useRef} from "react";
import Generator from "./Generator";

function App() {
  const [gradient, setGradient] = React.useState({
    color1: '#ffffff',
    color2: '#000000',
    angle: '0'
  })

function handleChange(event){
  const {name, value}= event.target
  setGradient(prevState => {
    return{
      ...prevState,
      [name]: value
    }
  })
  console.log(gradient)
}

// setting a cross-browser CSS code in a text box that user will be able to generate and copy. 
const cssColorCode = `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2});
-moz-background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2});
-webkit: linear-gradient(${gradient.angle}deg, ${gradient.color1} , ${gradient.color2})`

const newGradient = `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`;

  return (
    <div>
      <h1 className="title">CSS Gradient Code Generator</h1>
  
    <div className="main-container">
      <Generator>
        <h2>GRADIENT OPTIONS:</h2>
          <form className="form">
            <h3>Color 1:</h3>
            <h3>{gradient.color1}</h3>
              <input 
              type="color"
              name="color1"
              value={gradient.color1}
              onChange={handleChange}
              className="color-input"
              />
            <h3>Color 2:</h3>
            <h3>{gradient.color2}</h3>
              <input 
              type="color"
              name="color2"
              value={gradient.color2}
              onChange={handleChange}
              className="color-input"
              />

            <h3>Angle</h3>
              <input
              type="number"
              name="angle"
              value={gradient.angle}
              min="0"
              max="180"
              className="angle-input"
              onChange={handleChange}
              />
          </form>
      </Generator>

      {/* gradient box with css code for user to copy */}
      <Generator>
        <div  className="gradient-box">
          <div className="gradient-color" style={{background: newGradient}}> </div>
          <textarea readOnly value={cssColorCode} cols="50" rows="6"/>
        </div>
      </Generator>
    </div>
    </div>
  );
}

export default App;
