import {createLazyFileRoute, useRouter, useNavigate} from "@tanstack/react-router";
import {createClient} from "@supabase/supabase-js";


import supabase from "../utils/supabase";
import React from "react";
const AuthLazy = React.lazy(() => import("auth/Auth"));

function Auth() {
    const router = useRouter();
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <AuthLazy
                auth={supabase.auth}
                invalidate={router.invalidate}
            />
        </div>
    );
}

export const Route = createLazyFileRoute('/auth')({
    component: Auth,
});