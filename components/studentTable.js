import React from 'react';
import StudentItem from './StudentItem';

const StudentTable = React.createClass({
    filter() {
        var gender = this.props.gender == 0 ? '' : ( this.props.gender == 1 ? '男' : '女'),
                    name = this.props.name;
        return this.props.students.filter((item) => {
            if(!item._delete) return item;
        }).map((item) => {
            if (!gender && !name) {
                return item;
            } else if (gender && !name) {
                if (item.gender == gender) return item;
            } else if (!gender && name) {
                if (item.name == name) return item;
            } else if (gender && name) {
                if (item.name == name && item.gender == gender) return item;
            }
        });
    },

    render() {
        var _this = this,
            items = this.filter().map((item, index) => {
                if (item) {
                    return <StudentItem student={item} key={index} delete={_this.props.delete} />
                }
            });
        return (
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
});

export default StudentTable;