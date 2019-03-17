import React from 'react';
import Item from './Item';

// @desc  List Give Properties in which Children
//        Can't Change Parent Value Bcoz of One Way Binding.

class List extends React.Component {
	render() {
		return (
			<ul>
				{this.props.data.map((items, index) => <Item key={index} remove={this.props.remove} name={items} />)}
			</ul>
		);
	}
}

export default List;
