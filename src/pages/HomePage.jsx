import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen pt-20">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
