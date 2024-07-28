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
          Get to know everything about Premier Assets and our service by going
          through our FAQ section, Whether you are interested in our properties
          viewing registrations, want to grasp what we offer, or simply vivid
          the difference between our agency and others, our FAQs have the
          answers that you desire.
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
