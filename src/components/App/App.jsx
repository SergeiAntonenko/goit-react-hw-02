import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const [countFeedbacks, setcountFeedbacks] = useState(() => {
    const localStorageData = window.localStorage.getItem("feedbacks");
    return localStorageData
      ? JSON.parse(localStorageData)
      : { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback =
    countFeedbacks.good + countFeedbacks.neutral + countFeedbacks.bad;
  const positiveFeedback =
    Math.round((countFeedbacks.good / totalFeedback) * 100) || 0;

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(countFeedbacks));
  }, [countFeedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setcountFeedbacks({
        ...countFeedbacks,
        good: countFeedbacks.good + 1,
      });
    } else if (feedbackType === "bad") {
      setcountFeedbacks({
        ...countFeedbacks,
        bad: countFeedbacks.bad + 1,
      });
    } else if (feedbackType === "neutral") {
      setcountFeedbacks({
        ...countFeedbacks,
        neutral: countFeedbacks.neutral + 1,
      });
    } else if (feedbackType === "reset") {
      setcountFeedbacks({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 && (
        <Feedback
          good={countFeedbacks.good}
          neutral={countFeedbacks.neutral}
          bad={countFeedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
};

export default App;
