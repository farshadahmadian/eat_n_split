import { useState } from "react";
import Button from "../button/Button";
import "./SplitForm.css";

const SplitForm = ({ selectedFriend, onSplit, onChangePayer, payer }) => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");

  const friendExpense = bill ? bill - yourExpense : "";

  const handleBillChange = (event) => {
    const billValue = Number(event.target.value);
    if (isNaN(billValue)) return;
    setBill(billValue);
  };

  const handleChangeYourExpense = (event) => {
    const yourExpenseValue = Number(event.target.value);
    if (isNaN(yourExpenseValue)) return;

    if (yourExpenseValue > bill) {
      setYourExpense(yourExpense);
    } else setYourExpense(yourExpenseValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSplit(
      payer === "you" ? friendExpense : -yourExpense,
      setYourExpense,
      setBill
    );
  };

  return (
    <form className="right" onSubmit={(event) => handleSubmit(event)}>
      <div className="split-form">
        <h2 className="split-header">
          Split a bill with {selectedFriend.name}
        </h2>
        <label>Bill value</label>
        <input
          className="input split-input"
          type="text"
          value={bill}
          onChange={handleBillChange}
        />
        <label>Your expense</label>
        <input
          className="input split-input"
          type="text"
          value={yourExpense}
          onChange={handleChangeYourExpense}
        />
        <label>{selectedFriend.name}'s expense</label>
        <input
          disabled={true}
          className="input split-input"
          type="text"
          value={friendExpense}
        />
        <label>Who is paying the bill?</label>
        <select
          className="input split-input"
          value={payer}
          onChange={onChangePayer}
        >
          <option value="you">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
        <Button className="btn btn-split">Split</Button>
      </div>
    </form>
  );
};

export default SplitForm;
