import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const [options, setOptions] = useState(() => {
    const localStorageData = window.localStorage.getItem("options");
    return localStorageData
      ? JSON.parse(localStorageData)
      : { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback =
    Math.round((options.good / totalFeedback) * 100) || 0;

  useEffect(() => {
    window.localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setOptions({
        ...options,
        good: options.good + 1,
      });
    } else if (feedbackType === "bad") {
      setOptions({
        ...options,
        bad: options.bad + 1,
      });
    } else if (feedbackType === "neutral") {
      setOptions({
        ...options,
        neutral: options.neutral + 1,
      });
    } else if (feedbackType === "reset") {
      setOptions({
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
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
};

export default App;
