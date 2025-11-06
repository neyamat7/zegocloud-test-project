import { useState } from "react";
import { useNavigate } from "react-router";


export default function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Handler function for input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler function for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value:", inputValue);

    alert(`Submitted: ${inputValue}`);
    setInputValue("");

    navigate(`/room/${inputValue}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">Enter text: </label>
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
