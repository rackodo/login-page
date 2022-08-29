import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/login.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function Login({ title }) {
    const [isHidden, setHidden] = useState(true);

    function handleHidden() {
        var toggle = document.getElementById("togglePassword")
        var password = document.getElementById("password")

        toggle.classList.remove(styles.pulse)
        void toggle.offsetWidth;
        toggle.classList.add(styles.pulse)

        password.classList.remove(styles.flush)
        void password.offsetWidth;
        password.classList.add(styles.flush)

        if (isHidden == true) {
            setHidden(false)
            password.type = "text"
            toggle.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock-open" class="svg-inline--fa fa-lock-open " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"></path></svg>'
        } else {
            setHidden(true)
            password.type = "password"
            toggle.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" class="svg-inline--fa fa-lock " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>'
        }
    }
    
    return(
        <div className={styles.container}>
            <h1>{title}</h1>
            <form id="login-form">
                <label htmlFor="username">Username</label><br />
                <input id="username" type="text" required /><br/>
                <label htmlFor="password">Password</label><br />
                <div className={styles.passwordField}>
                    <button tabIndex="0" id="togglePassword" className={styles.togglePassword} onMouseDown={handleHidden}  type="button">
                        <FontAwesomeIcon icon={faLock} />
                    </button>
                    <input className="password" id="password" type="password" required />
                </div>
                <input id="submit" type="submit" value="Login" />
            </form>
        </div> 
    )
}

export default Login