import FriendsCard from "../friends/FriendsCard";

export default function FriendsGrid({ friends }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-[#1f2b3f]">Your Friends</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {friends?.map((friend) => (
          <FriendsCard key={friend?.id} friend={friend} />
        ))}
      </div>
    </section>
  );
}