import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import Question from "./components/Question";
import PlayAgain from "./components/PlayAgain";

class QuizBee extends Component {
  state = {
    questions: [],
    score: 0,
    responses: 0,
  };

  setQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questions: question,
      });
    });
  };

  userScore = (answer, correct) => {
    if (answer === correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  newGame = () => {
    this.setQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.setQuestions();
  }
  render() {
    return (
      <div className="container">
        <div className="title">Quiz App</div>
        <div className="content">
          {this.state.questions.length > 0 &&
            this.state.responses < 5 &&
            this.state.questions.map(
              ({ question, answers, correct, questionId }) => (
                <Question
                  question={question}
                  options={answers}
                  key={questionId}
                  selected={(answer) => this.userScore(answer, correct)}
                />
              )
            )}

          {this.state.responses === 5 ? (
            <PlayAgain score={this.state.score} newGame={this.newGame} />
          ) : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.querySelector("#root"));
