import React from 'react';
import List from './Components/List';
import Add from './Components/Add';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [ 'Milk', 'Egg' ],
			input: ''
		};
	}

  // @desc  When Add Button Click
	add = () => {
		const input = this.state.input;

		this.setState({
			data: [ ...this.state.data, input ],
			input: ''
		});
	};

  // @desc  When Input On Change Event Func
	inputChange = (e) => {
		this.setState({ input: e.target.value });
  };
  
  // @desc  When List Item Remove
  remove = (name) => {
    this.setState({
      data: this.state.data.filter( item => item != name)
    });
  }

	render() {
		return (
			<div>
				<List data={this.state.data} remove={this.remove} />
        
        <Add
         inputValue={this.state.input} 
         inputChange={this.inputChange} 
         add={this.add} 
        />

			</div>
		);
	}
}

export default App;

// F73100085T
