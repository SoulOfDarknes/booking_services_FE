import BicycleForm from '../../components/BicycleForm';
import Footer from '../../components/Footer/index';
import Navigation from '../../components/Navigation/index';
import './styles.scss'

export default function Booking() {
  return (
      <div className='main'>
          <Navigation />
      <div className='content'>
        <div className='leftSide'></div>
        <div className='rightSide'>
          <BicycleForm />
          </div>
            </div>
          <Footer />
      </div>
  )
}
