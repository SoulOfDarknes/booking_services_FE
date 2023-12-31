import './styles.scss';
import { useGetStatisticsQuery } from 'src/redux/services/bicycleApi';

export default function Statistics() {
  const { data, error, isLoading } = useGetStatisticsQuery();

  const defaultStats = {
    totalCount: 0,
    availableCount: 0,
    busyCount: 0,
    averagePrice: 0,
  };

  const stats = { ...defaultStats, ...data };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  return (
    <div className='statistics'>
      <h3>STATISTICS</h3>
      <div>Total Bikes: <span>{stats.totalCount}</span></div>
      <div>Available Bikes: <span>{stats.availableCount}</span></div>
      <div>Booked Bikes: <span>{stats.busyCount}</span></div>
      <div>Average Bike Cost: <span>{stats.averagePrice}</span> UAH/hr</div>
    </div>
  );
};
