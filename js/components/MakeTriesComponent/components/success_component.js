import React from 'react';
import { View, Text } from 'react-native';

export default class SuccessComponent extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    // this.props.result could be used to retrieve promise results
    return (
      <View>
        <Text>{'See! your tries succeeded!'}</Text>
      </View>
    );
  }
}
