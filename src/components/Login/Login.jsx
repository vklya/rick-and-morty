import { signInWithPopup } from "firebase/auth";
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

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res);
                const newUser = {
                  name: res._tokenResponse.firstName,
                  token: res._tokenResponse.oauthAccessToken,
                };
                setUser(newUser);
            })
            .catch(e => alert(e));
    };

    const signUp = () => {
        setUser('');
    }
    
    return (
      <div className={css.user}>
        {user.token ? (
          <div>
            <p className={css.user__name}>
              Hello, {user.name} <span>👋</span>
            </p>
            <button className={css.user__signUp} onClick={signUp}>
              Sign up
            </button>
          </div>
        ) : (
          <button className={css.user__signIn} onClick={signIn}>
            Sign in{' '}
            <img
              src={google}
              alt="Google logo"
              className={css.user__logo}
            ></img>
          </button>
        )}
      </div>
    );
}

export default Login;