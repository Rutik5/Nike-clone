import './App.css';
import TopNav from './Components/TopNav';
import Navbar from './Components/Navbar';
import DiscountHeader from './Components/DiscountHeader';
import MainCarousel from './Components/MainCarousel';
import BodyCarausal from './Components/BodyCarausal';
import Featured from './Components/Featured';
import NikePhotos from './Components/NikePhotos';
import NikeMedia from './Components/NikeMedia';
import AlwaysIconic from './Components/AlwaysIconic';
import ShopBySport from './Components/ShopBySport';
import MemberBenefits from './Components/MemberBenifits';
import Options from './Components/Options';
import Footer  from './Components/Footer';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Navbar />
      <DiscountHeader />
      <MainCarousel />
      <BodyCarausal />
      <Featured />
      <NikePhotos />
      <NikeMedia />
      <AlwaysIconic />
      <ShopBySport />
      <MemberBenefits />
      <Options />
      <Footer />
    </div>
  );
}

export default App;
