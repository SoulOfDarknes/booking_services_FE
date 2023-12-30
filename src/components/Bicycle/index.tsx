import { Bicycle} from '../../types/typeBicycle';

interface BicycleListProps {
  bicycles: Bicycle[];
}

export default function BicycleList({ bicycles }: BicycleListProps){
  return (
    <div>
      {bicycles.map((bicycle) => (
        <div key={bicycle.id} className="bicycle-item">
          <div>{bicycle.name} - {bicycle.type} ({bicycle.color})</div>
          <div>ID: {bicycle.id}</div>
          <div>STATUS: {bicycle.status}</div>
        </div>
      ))}
    </div>
  );
};
