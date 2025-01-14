import Chat from "./components/homeComponents/Chat";
import CustomerReviews from "./components/homeComponents/CustomerReviews";
import LatestProducts from "./components/homeComponents/LatestProducts";
import OurProducts from "./components/homeComponents/OurProducts";
import WhyChooseJoyStick from "./components/homeComponents/WhyChooseJoyStick";

export default function Home() {
  return (
    <div className="">
      <WhyChooseJoyStick/>
      <Chat/>
      <LatestProducts/>
      <OurProducts/>
      <CustomerReviews/>
    </div>
  );
}
