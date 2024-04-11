import Banner from './components/Banner'
import { InformationCircleIcon as Icon } from "@heroicons/react/20/solid";

function App() {
  const bannerData = {
    icon: <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />,
    version: 4,
    href: "/details",
  };

  return (
    <>
      <Banner bannerData={bannerData} />
    </>
  )
}

export default App;
