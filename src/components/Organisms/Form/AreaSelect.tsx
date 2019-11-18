import React from 'react';
import TextInput from '@/components/Atoms/Form/TextInput';

const AreaSelect: React.FC = (): JSX.Element => (
  <form className="d-flex mb-4">
    <div className="form-group flex-grow-1 mb-0">
      <TextInput
        idName="areaOrShopInput"
        placeHolder="Area...Shop..."
      />
    </div>
    <button type="submit" className="btn btn-primary">Select</button>
  </form>
);

export default AreaSelect;
