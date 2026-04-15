import React, { useEffect, useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("/friend.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  const addTimelineEntry = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  const data = {
    friends,
    setFriends,
    loading,
    timeline,
    addTimelineEntry,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
