import {createRootRoute, Link, Outlet} from '@tanstack/react-router';
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import '../styles.scss';
import {Auth as SupabaseAuthComponent} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {useEffect, useState} from "react";

import supabase from "../utils/supabase";

export const Route = createRootRoute({
    component: () => {
        const [session, setSession] = useState(null)
        useEffect(() => {
            supabase.auth.getSession().then(({data: {session}}) => {
                setSession(session)
            })

            const {
                data: {subscription},
            } = supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session)
            })

            return () => subscription.unsubscribe()
        }, [])
        if (!session) {
            return (<div className={"bg-blue-50 p-10 rounded-lg"}><SupabaseAuthComponent supabaseClient={supabase} appearance={{theme: ThemeSupa}}/></div>)
        } else {
            return (
                <>
                    <div className="nav-container flex p-2 gap-2">
                        <Link to="/" className="[&.active]:font-bold">
                            Home
                        </Link>
                        <Link to="/auth" className="[&.active]:font-bold">
                            Auth
                        </Link>
                        <Link to="/editor" className="[&.active]:font-bold">
                            New Task
                        </Link>
                        <Link to="/list" className="[&.active]:font-bold">
                            List
                        </Link>
                    </div>
                    <Outlet/>
                    <TanStackRouterDevtools/>
                </>
            )
        }

    }
})