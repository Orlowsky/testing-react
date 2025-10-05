import React, { useEffect } from 'react'

export const Users = () => {
    const [users, setUsers] = React.useState<string[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const userNames = data.map((user: { name: string }) => user.name);
                setUsers(userNames);
            })
            .catch(err => {
                setError('Failed to fetch users');
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {users.map((user, index) => (
                    <li key={index+user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}
