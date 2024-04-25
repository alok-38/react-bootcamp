export default function ButtonVariants() {
	return (
		<span className="wrapper">
			<button className="button-create" style={{ backgroundColor: "green", color: "white" }}>Create</button>
			<button className="button-update" style={{ backgroundColor: "darkorange", color: "white" }}>Update</button>
			<button className="button-delete" style={{ backgroundColor: "red", color: "white", fontWeight: "bold" }}>Delete</button>
		</span>
	);
}