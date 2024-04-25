export default function Header({ text = "HTML to JSX", classes = "" }) {
	return (
		<h1 className={`text-5xl font-bold underline text-center mt-20 ${classes}`}>
			{text}
		</h1>
	);
}
