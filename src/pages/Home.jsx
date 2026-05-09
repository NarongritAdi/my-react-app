import { useState, useEffect } from "react"

function HomePage() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    useEffect(() => {
        fetch("https://backend-production-9ecd6.up.railway.app/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    async function addUser() {
        const response = await fetch("https://backend-production-9ecd6.up.railway.app/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, role })
        })
        const data = await response.json()
        setUsers([...users, data.user])
        setName("")
        setRole("")
    }

    async function deleteUser(id){
        await fetch("https://backend-production-9ecd6.up.railway.app/users/" + id, {
            method: "DELETE"
        })
        setUsers(users.filter(user => user.id !== id))
    }


    return (
        <div>
            <h1>User List</h1>

            <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input 
                type="text" 
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            <button onClick={addUser}>Add User</button>

            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.role}</p>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default HomePage