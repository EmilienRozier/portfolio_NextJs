"use client"

import Router from "next/router";
import { useState } from "react";

export default function AdminPanel() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [techno, setTechno] = useState([]);
    const [content, setContent] = useState('');

    const addWork = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost/api/works/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ title, year, techno, content }),
        });
    }

    return (
        <>
            Admin panel
            <form onSubmit={addWork}>
                title :
                <input onChange={(e) => setTitle(e.target.value)} value={title} />
                year :
                <input onChange={(e) => setYear(e.target.value)} value={year} />
                techno :
                <input onChange={(e) => setTechno(e.target.value)} value={techno} />

                <button type="submit">Add</button>
            </form>
        </>
    )
}