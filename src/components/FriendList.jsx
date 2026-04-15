import React from "react";
import useFriendData from "../hooks/useFriendData";
import FriendCard from "./FriendCard";

const FriendList = () => {
  const { friends, loading } = useFriendData();
  if (loading)
    return <div className="text-center py-10">Loading Friends ...</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend}></FriendCard>
      ))}
    </div>
  );
};

export default FriendList;
