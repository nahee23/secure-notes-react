import { useState } from "react";

function Gugudan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  function submit(e) {
    e.preventDefault();
    if (parseInt(value) == first * second) {
      //답을 맞췄을 때
      setResult("정답입니다");
      setScore(score + 1);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
    } else {
      setResult("틀렸습니다");
      setScore(score - 1);
    }
  }

  return (
    <>
      <div>
        {first} 곱하기 {second} 는?
      </div>
      <form onSubmit={submit}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <div>
        {result} 점수 : {score}
      </div>
    </>
  );
}

export default Gugudan;
