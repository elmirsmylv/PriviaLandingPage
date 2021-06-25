//import { app } from "./App.module.scss";
import Analytics from "./Containers/Analytics/Analytics";
import Features from "./Containers/Features/Features";
import Header from "./Containers/Header/Header";
import MoreFeature from "./Containers/MoreFeature/MoreFeature";
import Collaborate from "./Containers/Collaborate/Collaborate";
import Testimonial from "./Containers/Testimonial/Testimonial";
import Pricing from "./Containers/Pricing/Pricing";
import Footer from "./Containers/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <Analytics />
      <MoreFeature />
      <Collaborate />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
