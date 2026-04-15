import { useContext } from "react";
import { FriendContext } from "../context/FriendContext";

const useFriendData = () => {
  const context = useContext(FriendContext);
  return context;
};

export default useFriendData;
