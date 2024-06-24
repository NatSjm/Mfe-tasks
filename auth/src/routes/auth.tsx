import {useContext} from "react";
import {NavigationContext} from "../App";

function Auth() {
    const onNavigateContext = useContext(NavigationContext);

    return (
        <div className="login-container">
            <h2 className={"mb-8"}>Login</h2>
            <>
                <h3 className={"mb-8"}>Hello user!</h3>

                <button
                    className="!bg-blue-600 !text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-700"
                    onClick={async () => {
                        await onNavigateContext?.auth?.signOut();
                        onNavigateContext?.auth?.invalidate();
                    }}
                >
                    Sign out
                </button>
            </>
        </div>
    );
};

export default Auth;