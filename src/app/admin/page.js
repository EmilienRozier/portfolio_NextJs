"use client"

import { signOut, useSession } from "next-auth/react"

export default function AdminMainPage() {
    const {data: session} = useSession()

    return (
        <div>
            {session?.user?.email}
            <button onClick={() => signOut()}>logout</button>
        </div>
    )
}