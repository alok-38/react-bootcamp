export default function App() {
  return (
    <span className="wrapper flex gap-10">
      <button className="button-create bg-green-500 hover:bg-green-600 focus:bg-green-700 hover:text-white font-bold py-2 px-4 rounded">
        Create
      </button>
      <button className="button-update bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 hover:text-white  font-bold py-2 px-4 rounded">
        Update
      </button>
      <button className="button-delete bg-red-500 hover:bg-red-600 focus:bg-red-700 hover:text-white  font-bold py-2 px-4 rounded">
        Delete
      </button>
    </span>
  );
}
