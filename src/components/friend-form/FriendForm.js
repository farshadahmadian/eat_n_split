import { useState } from "react";
import "./FriendForm.css";
import Button from "../button/Button";

const defaultImageURL = "https://i.pravatar.cc/48";

const isStringEmptyOrWS = (string) => {
  const trimmedString = string.trim();
  if (trimmedString.length === 0) return true;
  return false;
};

const FriendForm = ({
  isFriendFormOpen,
  setIsFriendFormOpen,
  onAddFriend,
  onToggleFriendForm,
}) => {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState(defaultImageURL);

  const handleChangeNameInput = (event) => {
    setFriendName(event.target.value);
  };

  const handleChangeUrlInput = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAddFriend = (event) => {
    event.preventDefault();
    if (isStringEmptyOrWS(friendName) || isStringEmptyOrWS(imageUrl)) return;
    const newFrind = {
      id: crypto.randomUUID(),
      name: friendName,
      image: imageUrl,
      balance: 0,
    };
    onAddFriend(newFrind);
    setIsFriendFormOpen((isFriendFormOpen) => !isFriendFormOpen);
    setFriendName("");
    setImageUrl(defaultImageURL);
  };

  return (
    <div className="friend-form-container">
      {isFriendFormOpen && (
        <form onSubmit={handleAddFriend} className="friend-form">
          <div className="friend-input-container">
            <label className="friend-form-label">Friend name</label>
            <input
              value={friendName}
              onChange={handleChangeNameInput}
              className="input"
              type="text"
            />
            <label className="friend-form-label">Image URL</label>
            <input
              value={imageUrl}
              onChange={handleChangeUrlInput}
              className="input"
              type="text"
            />
            <Button type="submit" className="btn btn-add">
              Add
            </Button>
          </div>
        </form>
      )}
      <Button className="btn btn-close" onClick={onToggleFriendForm}>
        {isFriendFormOpen ? "Close" : "Add Friend"}
      </Button>
    </div>
  );
};

export default FriendForm;
