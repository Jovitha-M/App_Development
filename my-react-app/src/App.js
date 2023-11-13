import { useState } from "react";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const handleInputChange = (event, type) => {
    if (type == "height") {
      setHeight(event.target.value);
    }
    if (type == "weight") {
      setWeight(event.target.value);
    }
  };

  const checkBMI = (event) => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const bmiResult = (w / (h * h)) * 10000;
    const roundBmi = parseFloat(bmiResult.toFixed(2));
    setBmi(roundBmi);
  };

  return (
    <div>
      <p>Enter the height: </p>
      <input
        type="text"
        value={height}
        onChange={(e) => handleInputChange(e, "height")}
      />{" "}
      <br />
      <p>Enter the weight: </p>
      <input
        type="text"
        value={weight}
        onChange={(e) => handleInputChange(e, "weight")}
      />
      <br />
      <button onClick={checkBMI}>Check</button>
      <p>BMI: {bmi}</p>
    </div>
  );
}

export default BMICalculator;
