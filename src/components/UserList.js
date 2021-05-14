import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap/es";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }


    componentDidMount() {

        axios.get('http://178.128.196.163:3000/api/records')
            .then(res => {
                this.setState({
                    users: res.data
                });

            })
    };

    deleteUser = (UserId) => {
        axios.delete('http://178.128.196.163:3000/api/records/' + UserId)
            .then(response => {
                if (response && response.data) {
                    window.location.reload();
                }
            })
    };


    render() {
        return (
            <ListGroup className="mt-4">
                {this.state.users.length > 0 ? (
                    <>
                        {this.state.users.map(user => (
                            user.hasOwnProperty('data') ?
                                <ListGroupItem className="display-flex" key={user._id}>
                                    <p><strong> Имя: {user.data.name}</strong></p>
                                    <p><strong> Возраст:{user.data.age}</strong></p>
                                    <div className="ml-auto">
                                        <Link to={`/edit/${user._id}`} color="warning"
                                              className="btn btn-warning mr-1">Изменить данные пользователя</Link>
                                        <Button color="danger" onClick={() => this.deleteUser(user._id)}>Удалить
                                            пользователя</Button>
                                    </div>
                                </ListGroupItem>
                                : null
                        ))}
                    </>
                ) : (
                    <h4 className="text-center">Список пуст</h4>
                )}
            </ListGroup>
        )
    }
}
