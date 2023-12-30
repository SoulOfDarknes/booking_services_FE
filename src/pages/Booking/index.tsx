import { useGetBicyclesQuery } from '../../redux/services/bicycleApi';
import BicycleList from '../../components/Bicycle';
import BicycleForm from '../../components/BicycleForm';
import Footer from '../../components/Footer/index';
import Navigation from '../../components/Navigation/index';
import './styles.scss';

export default function Booking() {
  const { data: bicycles, error, isLoading } = useGetBicyclesQuery();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  return (
      <div className='main'>
          <Navigation />
      <div className='content'>
        <div className='leftSide'>
          <BicycleList bicycles={bicycles || []} />
        </div>
        <div className='rightSide'>
          <BicycleForm />
          </div>
            </div>
          <Footer />
      </div>
  )
}
