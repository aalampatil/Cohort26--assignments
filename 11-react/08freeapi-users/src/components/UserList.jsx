import UserCard from "./UserCard";

export default function UserList({ users }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
