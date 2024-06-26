import { InformationCircleIcon as Icon } from "@heroicons/react/20/solid";

export default function Banner() {
  const bannerData = {
    icon: <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />,
    version: 4,
    href: "/details",
  };

  return (
    <div className="banner-wrapper">
      <div className="flex">
        <div className="flex-shrink-0">
          {/* Display the icon */}
          {bannerData.icon}
        </div>
        <div className="banner-content">
          <p className="banner-text">
            A new software update is available. See what's new in version{" "}
            {bannerData.version}
          </p>
          <p className="banner-details">
            {/* Use href from bannerData for the link */}
            <a href={bannerData.href} className="banner-details-link">
              Details
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
