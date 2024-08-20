import { useState } from "react";
import FriendForm from "./components/friend-form/FriendForm";
import FriendsList from "./components/friends-list/FriendsList";
import SplitForm from "./components/splitForm/SplitForm";
import "./App.css";

const initialFriends = [
  {
    id: 11886,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=1142066",
    balance: -10,
  },
  {
    id: 933372,
    name: "John",
    image: "https://i.pravatar.cc/48?u=437212",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=49476",
    balance: 0,
  },
];

const initialPayer = "you";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [isFriendFormOpen, setIsFriendFormOpen] = useState(false);
  const [payer, setPayer] = useState(initialPayer);

  const handleToggleFriendForm = () => {
    setIsFriendFormOpen((prevState) => !prevState);
  };

  const handleSelection = function () {
    setSelectedFriend((prevState) => {
      return prevState === this ? null : this;
    });
    if (isFriendFormOpen) setIsFriendFormOpen(false);
    setPayer(initialPayer);
  };

  const handleAddFriend = (newFriend) => {
    setFriendsList((prevState) => [...prevState, newFriend]);
  };

  const handleChangePayer = (event) => {
    setPayer(event.target.value);
  };

  const handleSplit = (value, setYourExpense, setBill) => {
    setFriendsList((prevState) => {
      return prevState.map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      });
    });
    setBill("");
    setYourExpense("");
  };

  return (
    <div className="app">
      <div className="left">
        <FriendsList
          onSelectFriend={handleSelection}
          friends={friendsList}
          selectedFriend={selectedFriend}
        />
        <FriendForm
          isFriendFormOpen={isFriendFormOpen}
          onToggleFriendForm={handleToggleFriendForm}
          setIsFriendFormOpen={setIsFriendFormOpen}
          onAddFriend={handleAddFriend}
        />
      </div>
      {selectedFriend && (
        <SplitForm
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          className="right"
          onSplit={handleSplit}
          payer={payer}
          onChangePayer={handleChangePayer}
        />
      )}
    </div>
  );
}

export default App;
