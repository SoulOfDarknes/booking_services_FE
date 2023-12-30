import React from 'react';

interface StatisticsProps {
  totalBikes: number;
  availableBikes: number;
  bookedBikes: number;
  averageCost: number;
}

export default function Statistics({totalBikes, availableBikes, bookedBikes, averageCost }: StatisticsProps){
  return (
    <div>
      <div>Total Bikes: {totalBikes}</div>
      <div>Available Bikes: {availableBikes}</div>
      <div>Booked Bikes: {bookedBikes}</div>
      <div>Average Bike Cost: {averageCost} UAH/hr</div>
    </div>
  );
};
