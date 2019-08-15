import React from 'react';
import Field from './Field';
import Button from './Button';
import ButtonVsConsumer from './ButtonVsConsumer';

const UserCreate = () => {
  return (
    <div className="ui form">
      <Field />
      <Button />
      <ButtonVsConsumer />
    </div>
  )
}

export default UserCreate;