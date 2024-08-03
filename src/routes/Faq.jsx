import { useState } from "react";

function Faq() {
  const [collapsedIndexes, setCollapsedIndexes] = useState([]);

  const toggleCollapse = (index) => {
    setCollapsedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const questions = [
    "first question",
    "second question",
    "third question",
    "fourth question",
  ];

  const answers = [
    "first answer",
    "second answer",
    "third answer",
    "fourth answer",
  ];

  return (
    <div className="faq">
      <div className="faq__content">
        <h1>Answers To Your Questions</h1>
        <p>
          Welcome to our FAQ section! Here, we've compiled answers to the most
          common questions our clients ask. Whether you're buying, selling, or
          renting a property, we understand that you might have some queries.
          Our goal is to provide you with clear, concise, and helpful
          information to make your real estate journey as smooth as possible. If
          you can't find the answer you're looking for, feel free to reach out
          to our team for personalized assistance.
        </p>
      </div>
      <div className="faq__questions">
        {questions.map((question, index) => (
          <div className="container" key={index}>
            <p className="question" onClick={() => toggleCollapse(index)}>
              {question}
            </p>
            <p
              className={`answer ${
                collapsedIndexes.includes(index) ? "showCollapsedAnswer" : ""
              }`}
            >
              {answers[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
