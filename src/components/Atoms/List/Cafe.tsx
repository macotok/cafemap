import React from 'react';

type CafeProps = {
  cafe: {
    id: number;
    name: string;
    address: string;
  };
}

const Cafe: React.FC<CafeProps> = ({ cafe }): JSX.Element => (
  <tr>
    <th scope="row">{cafe.id}</th>
    <td>{cafe.name}</td>
    <td>{cafe.address}</td>
    <td>ボタン</td>
  </tr>
);

export default Cafe;
