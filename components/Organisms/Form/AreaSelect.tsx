import React from 'react';
import TextInput from '../../Atoms/Form/TextInput';

const AreaSelect: React.FunctionComponent = (): JSX.Element => (
  <form className="d-flex">
    <div className="form-group flex-grow-1 mb-0">
      <TextInput
        idName="areaOrShopInput"
        ariaDescribedby="select Area or Shop"
        placeHolder="Area...Shop..."
      />
    </div>
    <button type="submit" className="btn btn-primary">Select</button>
  </form>
);

export default AreaSelect;
