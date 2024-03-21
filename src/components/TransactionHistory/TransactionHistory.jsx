import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css["table-header"]}>
        <tr>
          <th className={css["table-cell"]}>Type</th>
          <th className={css["table-cell"]}>Amount</th>
          <th className={css["table-cell"]}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={css["table-row"]}>
            <td className={css["table-cell"]}>{item.type}</td>
            <td className={css["table-cell"]}>{item.amount}</td>
            <td className={css["table-cell"]}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
