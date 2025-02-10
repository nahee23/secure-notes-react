import { useState } from "react";

function GugudanGame() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 9) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 9) + 1);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(answer) === num1 * num2) {
      setMessage("정답입니다!");
      setNum1(Math.floor(Math.random() * 9) + 1);
      setNum2(Math.floor(Math.random() * 9) + 1);
      setAnswer("");
    } else {
      setMessage("틀렸습니다. 다시 시도하세요.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>구구단 게임</h1>
      <p>
        {num1} x {num2} = ?
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={answer}
          onChange={handleInputChange}
          placeholder="답을 입력하세요"
        />
        <button type="submit">제출</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default GugudanGame;
