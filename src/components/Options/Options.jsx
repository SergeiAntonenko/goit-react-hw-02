import css from "./Options.module.css";
import clsx from "clsx";

const Options = (props) => {
  return (
    <div className={css["options-container"]}>
      <button
        className={css["options-btn"]}
        onClick={() => {
          props.updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css["options-btn"]}
        onClick={() => {
          props.updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css["options-btn"]}
        onClick={() => {
          props.updateFeedback("bad");
        }}
      >
        Bad
      </button>
      <button
        className={clsx(
          css["options-btn"],
          props.totalFeedback === 0 && css["is-hiden"]
        )}
        onClick={() => {
          props.updateFeedback("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
