import React, {useState, useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import {useHistory} from 'react-router-dom';

function LoginComponent(props) {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [isDisabled, changeDisabled] = useState(true);
    const {setJwt} = useContext(MainContext);
    const history = useHistory();

    function toggleDisabled() {
        if (email !== '' && password !== '') {
            changeDisabled(false);
        } else {
            changeDisabled(true);
        }
    }

    function handleChange(event) {
        switch (event.target.name) {
            case 'email':
                changeEmail(event.target.value);
                toggleDisabled();
                break;
            case 'password':
                changePassword(event.target.value);
                toggleDisabled();
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        setTimeout(() => {
            setJwt('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1OTExMzA4NzEsImV4cCI6MTYyMjY2Njg3MSwiYXVkIjoiaHR0cHM6Ly9tZWRpdW0uY29tL0BtYWtpbmhzIiwic3ViIjoiaHR0cHM6Ly9naXRodWIuY29tL21ha2luaHMiLCJmaXJzdE5hbWUiOiJNYXJjb3MiLCJTdXJuYW1lIjoiU2lsdmEiLCJSb2xlIjoiUHJvamVjdCBBZG1pbmlzdHJhdG9yIn0.TbjT3Yd1LFF94c5fv8pgRhQhOlcoJ3x5Imd9QVcT94E')
            history.push('/home');
        }, 1000);
    }

    return (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form className="box">
                                <div className="field">
                                    <label htmlFor="" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" value={email} name="email"
                                               onChange={handleChange}
                                               placeholder="e.g. bob@gmail.com" className="input"
                                               required/>
                                        <span className="icon is-small is-left">
                                          <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" value={password} name="password"
                                               onChange={handleChange} placeholder="*******"
                                               className="input" required/>
                                        <span className="icon is-small is-left">
                                          <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <button type="submit" onClick={handleSubmit} disabled={isDisabled}
                                            className="button is-success">Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default LoginComponent