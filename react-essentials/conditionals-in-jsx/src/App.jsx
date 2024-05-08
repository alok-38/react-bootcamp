const saleOpen = {
  heading: "Get 25% off during our one-time sale",
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  href: "/one-time-sale",
};

const saleClosed = {
  heading: "Oops, you just missed out on our big sale!",
  description: "Now everything you like is back at full price. Sorry!",
};

export default function CallOut() {
  const isSaleOpen = false;
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {isSaleOpen ? saleOpen.heading : saleClosed.heading}
      </h2>
      <p className="text-gray-600 mb-6">
        {isSaleOpen ? saleOpen.description : saleClosed.description}
      </p>
      {isSaleOpen ? (
        <a
          href={saleOpen.href}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Get access to our one-time sale
        </a>
      ) : null}
    </section>
  );
}
