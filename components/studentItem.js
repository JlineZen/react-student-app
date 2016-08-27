import React from 'react';
import Observer from '../observer/observer';

const StudentItem = React.createClass({
    handleDelete() {
        Observer.publish('deleteStudent', this.props.student.id);
    },

    render() {
        var student = this.props.student;
        return (
            <tr>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td><a href="javascript:void(0);" onClick={this.handleDelete}>删除</a></td>
            </tr>
        );
    }
});

export default StudentItem;