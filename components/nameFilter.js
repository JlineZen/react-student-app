import React from 'react';
import Observer from '../observer/observer';

const NameFilter = React.createClass({
    handleNameChange () {
        Observer.publish('nameChange', this.refs.name.value);
    },

    render () {
        return (
            <p>
                <label>姓名：</label>
                <input type="text" ref="name" placeholder="请输入姓名" onChange={this.handleNameChange} />
            </p>
        );
    }
});

export default NameFilter;