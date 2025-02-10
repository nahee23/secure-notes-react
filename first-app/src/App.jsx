import { useEffect, useState } from "react";

// 컴포넌트
function App() {
  // 여기는 자바스크립트
  const [pets, setPets] = useState(
    JSON.parse(
      localStorage.getItem("PetData") ? localStorage.getItem("PetData") : "[]"
    )
  ); //DB에서 pets를 가져옴

  // pets 값이 바뀔 때마다 실행
  useEffect(() => {
    localStorage.setItem("PetData", JSON.stringify(pets));
  }, [pets]);

  // jsx는 리턴시 한개의 부모태그
  return (
    <>
      {/* jsx에서 클래스는 className이다. */}
      <Header />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => (
          <Pet
            setPets={setPets}
            id={pet.id}
            key={pet.id} //jsx 반복문을 쓰면 구분하기 위해서 key 속성이 필요함
            name={pet.name}
            species={pet.species}
            age={pet.age}
          />
        ))}
      </ul>
      <Footer cr="부산IT교육센터" />
      {/* html 과 javascript 같이 쓸 수 있음 { } 사용 */}
    </>
  );
}

// 컴포넌트 : UI 를 재사용 가능한 개별적인 여러 조각
function Header() {
  return <h1 className="special">처음 앱</h1>;
}

function TimeArea() {
  // useState() 를 사용해 상태관리
  const [time, setTime] = useState(new Date().toLocaleString());
  // [ 이름, set이름 ] / 자동으로 useState import / useState(초기값)
  // setTime(time을 업데이트)
  // setTimeout(함수, 시간);
  // 일정시간 후에 함수 실행 (1초) => 스테이트 time이 업데이트 됨 => 화면 업데이트 => 1초 뒤에 함수실행
  setTimeout(() => setTime(new Date().toLocaleString()), 1000);

  return <p>현재 시간 : {time} </p>;
}

function Footer(props) {
  return <small>Copyright : {props.cr} </small>;
}

function Pet(props) {
  function handleDelete() {
    // alert("삭제버튼클릭");
    // pets 배열에 같은 id를 제외하고 업데이트 => id 같으면 삭제됨
    props.setPets((prev) => prev.filter((pet) => pet.id !== props.id));
  }
  return (
    <li>
      {props.name}은 {props.species}이고 {props.age}살 이다.
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function plus() {
    setLikeCount(likeCount + 1);
  }

  function minus() {
    setLikeCount(likeCount - 1);
  }

  return (
    <>
      <button onClick={plus}>추천하기</button>
      <button onClick={minus}>비추하기</button>
      <h2>이 페이지를 {likeCount}번 추천 했습니다.</h2>
    </>
  );
}

function AddPetForm(props) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  function handleSubmint(e) {
    e.preventDefault(); //기본 전송 이벤트 종료
    props.setPets((prev) =>
      prev.concat({ name: name, species: species, age: age, id: new Date() })
    );
    // 원래 있던 값(prev)을 => prev.concat 의 내용으로 바꿔줌 / concat = 새로운 값 추가해줌
    // 새 펫을 추가 후 이름, 종류, 나이 초기화
    setName("");
    setSpecies("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmint}>
      <fieldset>
        <legend>새 PET 을 추가하기</legend>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="종류"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="나이"
        />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
}

export default App;
