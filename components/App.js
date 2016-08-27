import React from 'react';
import NameFilter from './NameFilter';
import GenderFilter from './GenderFilter';
import StudentTable from './StudentTable';
import Observer from '../observer/observer';

const App = React.createClass({
    componentDidMount() {
        Observer.subscribe('deleteStudent', this._delete);
        Observer.subscribe('genderChange', this.genderFilter);
        Observer.subscribe('nameChange', this.nameFilter);
    },

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
       this.setState({gender: gender});
    },

    nameFilter(name) {
       this.setState({name: name})
    },

    render() {
        return (
            <div>
                <GenderFilter />
                <NameFilter />
                <StudentTable students={this.state.students}
                                gender={this.state.gender}
                                name={this.state.name}
                />
            </div>
        );
    }
});

export default App;