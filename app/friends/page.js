import { notFound } from "next/navigation";
import FriendDetailsClient from "@/components/friends/FriendDetailsClient";
import { getFriendById } from "@/lib/friends";

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;
  const friend = getFriendById(id);

  if (!friend) {
    notFound();
  }

  return <FriendDetailsClient friend={friend} />;
}