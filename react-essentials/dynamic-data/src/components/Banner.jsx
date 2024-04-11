// components/Banner.js
export default function Banner({ bannerData }) {
  return (
    <div className="bg-blue-100 border-b border-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-blue-500 mr-6">
            {bannerData.icon}
            <span className="ml-2 font-semibold text-sm">Software Update</span>
          </div>
          <div className="order-2 flex-grow flex justify-center sm:order-3 sm:justify-end">
            <div className="flex items-center">
              <p className="text-xs sm:text-sm text-blue-700 mr-2">
                A new software update is available. See what's new in version {bannerData.version}
              </p>
              <a href={bannerData.href} className="text-blue-800 font-semibold hover:text-blue-600">
                Details
                <span aria-hidden="true" className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
