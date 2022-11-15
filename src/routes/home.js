import { useEffect, useState } from "react";

import HomeTitle from "../components/home-title/home-title.component";
import SecondHomeTitle from "../components/second-home-title/second-home-title.component";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
      console.log("done");
    }, 8700);
  }, [loading]);

  return <>{loading ? <HomeTitle /> : <SecondHomeTitle HomeTitle />}</>;
};

export default Home;
