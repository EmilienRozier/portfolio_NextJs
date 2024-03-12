"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const router = useRouter()

    const register = async () => {

        try {
            const res = await fetch('http://localhost/api/register', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await res.json();
            console.log(data);
            if(data.message == 'User already exist.') {
                setError('User already exist.')
            } else {
                router.push('/')
            }

        } catch (error) {
            console.error('An unexpected error occurred:', error);
        }
    };

    return (
        <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
            <span>{error}</span>
        </div>
    );
}
