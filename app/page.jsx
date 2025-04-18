import Users from "@/components/Users";

async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    // console.log(data.data)
    return data.data
}

async function HomePage() {
    const users = await fetchUsers()
    return(
        <div>
            <Users users={users} />
        </div>
    )
}

export default HomePage;
