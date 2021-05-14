import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '',
            name: '',
            userId: null
        };
    }

    componentDidMount() {
        let pastName = this.props.location.pathname.split('/edit/');
        let id = pastName[1];
        this.setState({
            userId: id
        })

        if (!!id) {
            axios.get('http://178.128.196.163:3000/api/records/' + id)
                .then(res => {
                    let newName = res.data.data.name;
                    let newAge = res.data.data.age;

                    this.setState({
                        name: newName,
                        age: newAge
                    })
                })
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = () => {
        let object = {
            data: {
                name: this.state.name,
                age: this.state.age
            }
        }

        if (!this.state.userId) {
            axios.put('http://178.128.196.163:3000/api/records', object)
                .then(res => {
                    if (res && res.data) {
                        this.props.history.push('/')
                    }
                })
        } else {
            axios.post('http://178.128.196.163:3000/api/records/' + this.state.userId, object)
                .then(res => {
                    if (res && res.data) {
                        this.props.history.push('/')
                    }
                })
        }
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label>Введите данные пользователя</Label>
                    <Input type="text" value={this.state.name} onChange={this.inputChange} name="name"
                           placeholder="Введите имя" required>
                    </Input>
                    <Input type="text" value={this.state.age} onChange={this.inputChange} name="age"
                           placeholder="Введите возраст" required>
                    </Input>
                </FormGroup>
                <Button onClick={this.addUser}>Сохранить</Button>
                <Link to="/" className="btn btn-danger ml-2">Отмена</Link>
            </Form>
        )
    }
}

export {AddUser}
