import React from 'react';

class Add extends React.Component {

    constructor() {
        super();
    }

    render () {
        return (
            <div>
                <input
					type="text"
					value={this.props.inputValue}
					onChange={(e) => this.props.inputChange(e)}
				/>
				<button onClick={() => this.props.add()}>+</button>
            </div>
        );
    }
}

export default Add;