import React from 'react';

type Props = {
  idName: string;
  ariaDescribedby: string;
  placeHolder: string;
}

const TextInput: React.SFC<Props> = (props: Props): JSX.Element => {
  const { idName, ariaDescribedby, placeHolder} = props;
  return (
    <input type="text" className="form-control" id={idName} aria-describedby={ariaDescribedby} placeholder={placeHolder}/>
  )
};

export default TextInput;
