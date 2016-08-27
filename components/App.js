import React from 'react';
import NameFilter from './NameFilter';
import GenderFilter from './GenderFilter';
import StudentTable from './StudentTable';

const App = React.createClass({
    getInitialState() {
        return {
            students: this.props.students,
            gender: 0,
            name: ''
        }
    },

    _delete(id) {
        var data = this.state.students.map((item) => {
            if (item.id == id) item._delete = true;
                return item;
        });
        this.setState({students: data});
    },

    genderFilter(gender) {
        this.setState({gender: gender})
    },

    nameFilter(name) {
        this.setState({name: name})
    },

    render() {
        return (
            <div>
                <GenderFilter genderChange={this.genderFilter}/>
                <NameFilter nameChange={this.nameFilter} />
                <StudentTable students={this.state.students}
                                delete={this._delete}
                                gender={this.state.gender}
                                name={this.state.name}
                />
            </div>
        );
    }
});

export default App;