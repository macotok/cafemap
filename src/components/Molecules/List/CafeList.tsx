import React from 'react';
import Cafe from '@/components/Atoms/List/Cafe';

interface CafeList {
  id: number;
  name: string;
  address: string;
}

const list = [
  {
    id: 1,
    name: 'カフェ1',
    address: '東京都渋谷区...'
  },
  {
    id: 2,
    name: 'カフェ2',
    address: '東京都新宿区...'
  },
  {
    id: 3,
    name: 'カフェ3',
    address: '東京都港区...'
  }
];

const CafeList: React.FC = (): JSX.Element => (
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
        list.map((cafe: CafeList, index: number) => (
          <Cafe cafe={cafe} key={index} />
        ))
      }
    </tbody>
  </table>
);

export default CafeList;
