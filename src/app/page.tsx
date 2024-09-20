import Navbar from '@/app/components/Navbar';
import MainSection from '@/app/components/Main';
import Footer from '@/app/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
