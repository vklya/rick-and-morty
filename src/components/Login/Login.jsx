import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from "services/firebase";
import { useEffect, useState } from "react";
import google from '../../images/google.webp'
import css from './login.module.scss';

const LS_KEY = 'user';

const Login = () => {
    const [user, setUser] = useState(() => {
        const user = JSON.parse(localStorage.getItem(LS_KEY));
        return user ? user : '';
    });

    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(user));
    }, [user]);

    const logIn = () => {
            signInWithPopup(auth, provider).then(res => {
                const newUser = {
                name: res._tokenResponse.displayName,
                token: res._tokenResponse.refreshToken,
                };
                setUser(newUser);
            });
    };


    const logOut = () => {
            signOut(auth)
                .then(() => {
                    setUser('');
                })
                .catch(e => alert(e));
        };

    return (
        <div className={css.user}>
        {user ? (
            <div>
            <p className={css.user__name}>
                Hello, {user.name} <span>👋</span>
            </p>
            <button className={css.user__logOut} onClick={logOut}>
                Log out
            </button>
            </div>
        ) : (
            <button className={css.user__logIn} onClick={logIn}>
            Log in{' '}
            <img src={google} alt="Google logo" className={css.user__logo}></img>
            </button>
        )}
        </div>
    );
    }

export default Login;