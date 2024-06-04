import "./Friend.css";
import "../friend-form/FriendForm.css";
import Button from "../button/Button";

const Friend = ({ friend, onSelectFriend, selectedFriend }) => {
  const isSelected = friend === selectedFriend;
  return (
    <li className={`friend-container ${isSelected ? "selected" : ""}`}>
      <div className="friend">
        <div className="friend-image-container">
          <img className="friend-image" src={friend.image} alt={friend.name} />
        </div>
        <div>
          <h3>{friend.name}</h3>
          {friend.balance < 0 ? (
            <p className="balance-negative">
              You owe {friend.name} {Math.abs(friend.balance)}$
            </p>
          ) : friend.balance > 0 ? (
            <p className="balance-positive">
              {friend.name} owes you {friend.balance}$
            </p>
          ) : (
            <p className="balance-even">You and {friend.name} are even</p>
          )}
        </div>
        <Button
          onClick={onSelectFriend.bind(friend)}
          className="btn btn-friend"
        >
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
};

export default Friend;
