// Add inline styles on each individual button, corresponding to the action
export default function ButtonVariants() {
  return (
    <span className="wrapper flex gap-10 tracking-wider">
      <button className="button-create bg-transparent hover:bg-lime-600 hover:text-white outline-lime-50">Create</button>
      <button className="button-update bg-transparent">Update</button>
      <button className="button-delete bg-transparent">Delete</button>
    </span>
  );
}
