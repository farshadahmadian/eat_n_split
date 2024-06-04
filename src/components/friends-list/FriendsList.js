import Friend from "../friend/Friend";
import "./FriendsList.css";

const FriendsList = ({ friends, onSelectFriend, selectedFriend }) => {
  return (
    friends.length > 0 && (
      <ul className="friends-list">
        {friends.map((friend) => (
          <Friend
            key={friend?.id}
            friend={friend}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    )
  );
};

export default FriendsList;
