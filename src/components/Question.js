import React, { useState } from "react";

const Question = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div>
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default Question;
