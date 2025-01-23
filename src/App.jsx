import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <HeroSection />
            <ServicesSection />
            <Footer />
        </div>
    );
};

export default App;