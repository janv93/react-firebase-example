import React, {Component} from 'react';
import './Content.css';
import firebase from 'firebase';

var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
};

firebase.initializeApp(config);

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    login(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                    console.log(user.user.email + " logged in");
                },
                (error) => {        // error kann nur so gecatcht werden, try catch=crash
                    console.log(error)
                }
            )
    }

    register() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                    console.log(user.user.email + " created");
                },
                (error) => {        // error kann nur so gecatcht werden, try catch=crash
                    console.log(error);
                }
            )
    }

    render() {
        return (
            <div className="content">
                <div className="formarea">
                    <form className="forms" onSubmit={this.login.bind(this)}>
                        <input value={this.state.email} onChange={(text) => {
                            this.setState({email: text.target.value})
                        }} id="inputEmail4" placeholder="Email" className="form-control" type="email"/>
                        <input value={this.state.password} onChange={(text) => {
                            this.setState({password: text.target.value})
                        }} placeholder="Password" className="form-control" type="password"/>

                        <input value="Login" type="submit" className="btn btn-success"/>
                        <button onClick={this.register.bind(this)} className="btn btn-light">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Content;
