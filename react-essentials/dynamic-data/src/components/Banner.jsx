import { InformationCircleIcon as Icon } from "@heroicons/react/20/solid";

export default function Banner() {
  const bannerData = {
    icon: <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />,
    version: 4,
    href: "/details",
    message: "A new software update is available. See what's new in version",
    buttonText: "Details",
    arrowIcon: <span aria-hidden="true"> &rarr;</span>,
  };

  return (
    <div className="bg-blue-100 border border-blue-400 rounded-md p-4 banner-wrapper">
      <div className="flex items-center">
        <div className="flex-shrink-0">{bannerData.icon}</div>
        <div className="ml-3 banner-content">
          <p className="text-sm text-blue-700">
            {bannerData.message} {bannerData.version}.
          </p>
          <p className="text-sm text-blue-700">
            <a
              href={bannerData.href}
              className="text-blue-500 font-medium hover:underline"
            >
              {bannerData.buttonText}
              {bannerData.arrowIcon}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
