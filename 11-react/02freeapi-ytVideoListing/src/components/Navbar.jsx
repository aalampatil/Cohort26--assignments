// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">YouTube Clone</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-1 rounded-md"
      />
    </div>
  );
};

export default Navbar;
