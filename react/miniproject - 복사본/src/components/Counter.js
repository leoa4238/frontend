import { Component } from "react";

class Counter extends Component {
  //생성자 메서드
  constructor(props) {
    super(props); //constructor를 사용할 때에는 반드시 super(props를 호출해 주어야 한다)
    // state의 초기값 설정하기
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회합니다

    return (
      <div>
        <h1>{number}</h1>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
