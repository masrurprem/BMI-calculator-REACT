import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calcBMI = () => {
    if (!height || !weight) {
      setResult("Please Enter both Height and Weight");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    // also add category along with number
    let cat = "";
    if (bmi < 18.5) cat = "Underweight!";
    else if (bmi < 25) cat = "Normal";
    else if (bmi < 30) cat = "Overweight!!";
    else cat = "Obese!!!";

    // update result state
    setResult(`Your BMI is ${bmi}--> ${cat}`);
  };

  return (
    <>
      <div>
        <div className="container">
          <h1>BMI Calculator</h1>

          <label htmlFor="height">Height (cm.)</label>
          <input
            type="number"
            placeholder="e.g. 170"
            id="height"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <label htmlFor="weight">Weight (kg.)</label>
          <input
            type="number"
            placeholder="e.g. 63"
            id="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <button onClick={calcBMI}>Calculate</button>
          <div className="result">{result}</div>
        </div>
      </div>
    </>
  );
}

export default App;
