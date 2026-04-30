
import friends from "../data/friends.json"

export function getFriends() {
  return friends;
}

export function getFriendById(id) {
  return friends.find((friend) => friend.id === Number(id));
}

export function getSummaryStats() {
  const total = friends.length;
  const onTrack = friends.filter((friend) => friend.status === "on-track").length;
  const almostDue = friends.filter((friend) => friend.status === "almost due").length;
  const overdue = friends.filter((friend) => friend.status === "overdue").length;

  return {
    total,
    onTrack,
    almostDue,
    overdue,
  };
}