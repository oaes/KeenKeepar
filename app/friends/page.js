import { notFound } from "next/navigation";
import FriendDetails from "../../components/friends/FriendsDetails.jsx"
import {getFriendById} from "../../lib/friend.js"

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;
  const friend = getFriendById(id);

  if (!friend) {
    notFound();
  }

  return <FriendDetails friend={friend} />;
}