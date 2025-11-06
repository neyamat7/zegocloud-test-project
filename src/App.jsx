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

    setInputValue("");

    navigate(`/room/${inputValue}`);
    // toast.success("Room joined successfully!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f4f6f8",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#333",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          Join a Room
        </h2>
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter room ID..."
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
            transition: "border 0.3s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #007bff")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />
        <button
          type="submit"
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
            width: "100%",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0056b3")}
          onMouseOut={(e) => (e.target.style.background = "#007bff")}
        >
          Join Room
        </button>
      </form>
    </div>
  );
}
