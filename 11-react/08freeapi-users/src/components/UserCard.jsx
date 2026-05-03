export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <img
        src={user.picture.large}
        alt="user"
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />

      <h2 className="text-xl font-semibold">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>

      <p className="text-gray-600 text-sm">{user.email}</p>

      <p className="mt-2 text-sm">
        📍 {user.location.city}, {user.location.country}
      </p>

      <p className="text-sm">📞 {user.phone}</p>
    </div>
  );
}
