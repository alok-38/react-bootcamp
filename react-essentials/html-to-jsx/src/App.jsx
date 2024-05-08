export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Simple no-tricks pricing</h2>
      <hr className="w-16 border-t-2 border-gray-400 mb-6" />
      <a
        href="/buy"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out relative"
      >
        <span className="mr-1">Buy Now</span>
        <span
          className="inline-block transition-all duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </div>
  );
}
