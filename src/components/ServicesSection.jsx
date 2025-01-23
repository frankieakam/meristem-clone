import './App.css';
import { FaBuilding, FaHome, FaClock} from 'react-icons/fa';

const ServicesSection = () => {
    return (
        <section className='services-section'>
            <div className='services'>
                <div className='service-item' id='service-item1'>
                    <FaBuilding size={40} />
                    <h3>Property Listing</h3>
                </div>

                <div className='service-item' id='service-item2'>
                    <FaHome size={40} />
                    <h3>Property Marketplace</h3>
                </div>

                <div className='service-item' id='service-item3'>
                    <FaClock size={40} />
                    <h3>Other Services</h3>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;