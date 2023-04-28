import React from 'react';
import {Button} from '@rneui/themed';
import AddIcon from './AddIcon';

export default props => {
  return <Button onPress={props.onPress} type="clear" icon={<AddIcon />} />;
};
