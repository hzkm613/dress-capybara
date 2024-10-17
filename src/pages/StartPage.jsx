import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  const clickStartBtn = () => {
    navigate("/dressroom");
  };

  return (
    <div>
      <h1>Customize your capybara</h1>
      <button onClick={clickStartBtn}>Start</button>
    </div>
  );
}

export default StartPage;
