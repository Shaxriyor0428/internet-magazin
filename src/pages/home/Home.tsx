import { memo } from "react";
import Hero from "./Hero";
import Products from "./Products";
import Brand from "./Brand";
import News from "./News";
import Info from "./Info";
import Fixed_header from "../../components/header/Fixed_header";

const Home = () => {
  return (
    <div>
      <Fixed_header/>
      <Hero />
      <Products />
      <Brand/>
      <News/>
      <Info/>
    </div>
  );
};

export default memo(Home);
