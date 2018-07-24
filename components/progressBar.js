import React,{Component} from 'react';
import {Progress, Button} from 'semantic-ui-react';

class progressBar extends Component {
  constructor(props) {
    super(props);

    const percentageValue = 100 - (this.props.percentage * 100);
    
    this.state = {percent: percentageValue };
  }


  render() {

    return (
      <div className="progress-bar">
        <Progress  percent={this.state.percent} indicating progress
        size='large' />

      </div>
    );
  }
}

export default progressBar;

//        <Button onClick={this.increment}>Increment</Button>
