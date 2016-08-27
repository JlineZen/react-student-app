import React from 'react';

const NameFilter = React.createClass({
    handleNameChange () {
        this.props.nameChange(this.refs.name.value);
    },

    render () {
        return (
            <p>
                <label>姓名：</label>
                <input type="text" ref="name" placeholder="请输入姓名" onChange={this.handleNameChange} />
            </p>
        );
    }
})

export default NameFilter;