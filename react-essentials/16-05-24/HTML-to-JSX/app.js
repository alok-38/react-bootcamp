// Convert HTML string to valid JSX
function Pricing() {
	return (
	  <div className="mt-5 bg-white rounded-lg shadow-lg overflow-hidden">
		<h2 className="text-3xl font-semibold text-gray-800 p-5 border-b border-gray-200">Simple no-tricks pricing</h2>
		<hr className="border-t border-gray-200" />
		<a href="/buy" className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg text-center py-3">
		  Buy Now <span aria-hidden="true">→</span>
		</a>
	  </div>
	);
  }

  const app = document.getElementById("app");

  const root = ReactDOM.createRoot(app);
  root.render(<Pricing />);