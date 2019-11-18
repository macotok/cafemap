import React, { useContext } from 'react';
import AppContext from '@/contexts/AppContext';
import Cafe from '@/components/Atoms/List/Cafe';

interface CafeList {
  id: number;
  name: string;
  address: string;
}

const CafeList: React.FC = (): JSX.Element => {
  const { state } = useContext(AppContext);

  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Cafe</th>
        <th scope="col">Address</th>
        <th scope="col"/>
      </tr>
      </thead>
      <tbody>
      {
        state.cafe.map((cafe: CafeList, index: number) => (
          <Cafe cafe={cafe} key={index}/>
        ))
      }
      </tbody>
    </table>
  );
};

export default CafeList;
