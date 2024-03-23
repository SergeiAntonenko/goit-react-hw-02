import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css["descriptoin-container"]}>
      <h1 className={css["description-title"]}>Sip Happens Café</h1>
      <p className={css["descriptoin-parag"]}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
