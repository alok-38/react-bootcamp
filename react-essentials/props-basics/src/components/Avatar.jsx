function Avatar({ imageSrc, name, profileText }) {
  return (
    <div className="group block p-8 flex-shrink-0">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-12 w-12 rounded-full"
            src={imageSrc}
            alt={`Avatar of ${name}`}
          />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
            {profileText}
          </p>
        </div>
      </div>
    </div>
  );
}
