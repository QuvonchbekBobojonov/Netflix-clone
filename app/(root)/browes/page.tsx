"use client";

import { Login } from "@/components/shared/login";
import { useGlobalContext } from "@/context";

function Page() {
    const {account} = useGlobalContext()

    if (account === null) return <Login/>


    return (
        <div>
            Browes page
        </div> 
    );
}

export default Page;