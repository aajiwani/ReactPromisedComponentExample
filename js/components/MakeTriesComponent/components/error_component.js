import React from 'react';
import { View, Button, Text } from 'react-native';

export default class ErrorComponent extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  retryPromise()
  {
    // Use retry from props, in case you want to implement retry-able promise
    this.props.retry();
  }

  render()
  {
    // Add your render code here for the Error Component
    return (
      <View style={{flexDirection: 'column'}}>
        <Text>{'Uh oh ..... Wanna retry?'}</Text>
        <Button
          onPress={this.retryPromise.bind(this)}
          title="Give it another try"
          color="#841584"
        />
      </View>
    );
  }
}
