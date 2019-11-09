import React from 'react';

type Props = {
  idName: string;
  placeHolder: string;
}

const TextInput: React.FC<Props> = ({ idName, placeHolder }: Props): JSX.Element => (
  <input type="text" className="form-control" id={idName} placeholder={placeHolder} />
);

export default TextInput;
