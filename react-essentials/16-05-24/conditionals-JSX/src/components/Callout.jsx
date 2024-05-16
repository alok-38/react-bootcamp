import saleOpen from "../saleOpen";
import saleClosed from "../saleClosed";

export default function Callout() {
  const isSaleOpen = true; // Set this to true or false based on whether there's an active sale

  return (
    <section className="section">
      <div className="section-wrapper">
        <h2 className="section-heading">
          {isSaleOpen ? saleOpen.heading : saleClosed.heading}
        </h2>
        <p className="section-description">
          {isSaleOpen ? saleOpen.description : saleClosed.description}
        </p>
        {isSaleOpen && (
          <a
            href={saleOpen.href}
            className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
          >
            Get access to our one-time sale
          </a>
        )}
      </div>
    </section>
  );
}
