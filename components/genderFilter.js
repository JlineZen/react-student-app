import React from 'react';

const GenderFilter = React.createClass({
    handleGenderChange() {
        this.props.genderChange(this.refs.genderFilter.value);
    },

    render()  {
        return (
            <p>
                <label>性别：</label>
                <select ref="genderFilter" onChange={this.handleGenderChange}>
                    <option value="0">All</option>
                    <option value="1">男</option>
                    <option value="2">女</option>
                </select>
            </p>
        );
    }
});

export default GenderFilter;