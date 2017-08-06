import React from 'react';
import { Text } from 'react-native';

export default class LoadingComponent extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    // Add your render code here for the Loading Component
    return (
      <Text>{'Loading .....'}</Text>
    );
  }
}
