import CardButton from "./CardButton";

export default function Card({ username }) {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="bg-white sm:rounded-lg sm:shadow">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">
                <a href="#" className="hover:underline">
                  {username}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <a href="#" className="hover:underline">
                  December 9 at 11:43 AM
                </a>
              </p>
            </div>
            <CardButton />
          </div>
        </div>
        <div className="px-4 pb-5 opacity-25 sm:p-6 sm:pt-0">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam
            quam, quidem vel assumenda repellat inventore sint nesciunt, ullam
            asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda
            distinctio veniam quam tempora modi aperiam nemo voluptate
            reprehenderit quidem, nisi vero est.
          </p>
        </div>
      </div>
    </div>
  );
}
