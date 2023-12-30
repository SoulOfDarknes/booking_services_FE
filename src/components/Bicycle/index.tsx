import { useEffect, useState } from 'react';
import { useDeleteBicycleMutation, useUpdateBicycleStatusMutation } from '../../redux/services/bicycleApi';
import { Bicycle } from '../../types/typeBicycle';
import { getStatusClassName } from './hooks';
import './styles.scss';

interface BicycleListProps {
  bicycles: Bicycle[];
}

export default function BicycleList({ bicycles }: BicycleListProps) {

  const statusOrder = {
    'Available': 1,
    'Busy': 2,
    'Unavailable': 3
  };

  const sortBicyclesByStatus = (a: Bicycle, b: Bicycle) => {
    return statusOrder[a.status] - statusOrder[b.status];
  };
    const [sortedBicycles, setSortedBicycles] = useState<Bicycle[]>([]);

  useEffect(() => {
    setSortedBicycles([...bicycles].sort(sortBicyclesByStatus));
  }, [bicycles]); 


  const [updateBicycleStatus] = useUpdateBicycleStatusMutation();
  const [deleteBicycle] = useDeleteBicycleMutation();

  const handleStatusChange = async (id: string, newStatus: string) => {
    if (!id || !['Available', 'Busy', 'Unavailable'].includes(newStatus)) {
      console.error('Bad id or status');
      return;
    }

    try {
      await updateBicycleStatus({ id, status: newStatus }).unwrap();
    } catch (error) {
      console.error('Error when change status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBicycle(id).unwrap();
    } catch (error) {
      console.error('Error when delete:', error);
    }
  };

  return (
    <div className="bicycle-list">
      {sortedBicycles.map((bicycle) => (
        <div key={bicycle.id} className={`bicycle-item ${getStatusClassName(bicycle.status)}`}>
          <div className='bicycle-left'>
            <div className="bicycle-info">
              <span className="bicycle-name">{bicycle.name}</span> - <span className="bicycle-type">{bicycle.type}</span> (<span className="bicycle-color">{bicycle.color}</span>)
            </div>
            <div className="bicycle-id">ID: {bicycle.id}</div>
            <div className="bicycle-status">STATUS: <select 
                className="bicycle-status-selector"
                value={bicycle.status}
                onChange={(e) => handleStatusChange(bicycle.id, e.target.value)}
              >
                <option value="Available">Available</option>
                <option value="Busy">Busy</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>
          <div className='bicycle-right'>
            <div className="bicycle-delete" onClick={() => handleDelete(bicycle.id)}><span></span></div>
            <div className="bicycle-price">{bicycle.price} UAH/hr.</div>
          </div>
        </div>
      ))}
    </div>
  );
};
