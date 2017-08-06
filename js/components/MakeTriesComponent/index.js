import React from 'react';
import ReactPromisedComponent from 'react-promised-component';
import LoadingComponent from './components/loading_component.js';
import ErrorComponent from './components/error_component.js';
import SuccessComponent from './components/success_component.js';

var PromisedReactComponent = ReactPromisedComponent(
  "promise_name",
  LoadingComponent,
  ErrorComponent,
  SuccessComponent
);

export default class PromisedComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.try_num = 0;
  }

  // Promise creator method
  promiseGenerator(params)
  {
    return new Promise((function(resolve, reject)
    {
      if (this.try_num === 1)
      {
        resolve(true);
      }
      else
      {
        this.try_num++;
        reject(false);
      }
    }).bind(this));
  }

  // Method to supply parameters to promise method
  promiseParams()
  {
    // return {
    //   abc: 123
    // };
  }

  // Method to check for any errors in the result, prior to rendering success component
  checkErrorsInResult(result)
  {
    // return new Error('Any error could be thrown here');
  }

  render()
  {
    return (
      <PromisedReactComponent
          promise_name={this.promiseGenerator.bind(this)}
          promise_name_params={this.promiseParams.bind(this)}
          promise_name_check_result_errors={this.checkErrorsInResult.bind(this)} />
    );
  }
}
