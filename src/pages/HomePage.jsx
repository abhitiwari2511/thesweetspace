import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className='w-full min-h-screen pt-20'>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
