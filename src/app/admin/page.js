import React from 'react'

const Admin = () => {

    const articles = [
        {name: "test"},
        {name: "test2"},
        {name: "test3"}
    ]

    return (
        <div>
            <h1>Admin panel</h1>
            <ul>
                {articles.map((articles, index) => {
                    return (
                        <li key={index}>{articles.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Admin