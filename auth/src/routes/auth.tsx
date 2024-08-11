import {useContext} from "react";
import {NavigationContext} from "../App";
import styles from './auth.module.scss';

function Auth() {
    const onNavigateContext = useContext(NavigationContext);

    return (
        <div className="login-container">
            <h3>Hello user!</h3>
                <button
                    className={styles.button}
                    onClick={async () => {
                        await onNavigateContext?.auth?.signOut();
                        onNavigateContext?.invalidate();
                    }}
                >
                    Sign out
                </button>
        </div>
    );
};

export default Auth;