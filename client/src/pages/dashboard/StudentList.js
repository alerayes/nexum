import { useEffect, useState } from "react"

const StudentList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers()
      setUsers(users)
    }
    getUsers()
  }, [users])

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch('/api/v1/auth/getUsers')
    const data = await res.json()

    console.log(data)
    return data
  }

   

  return (
    <div>
      {
        users.length && users.map((user) => (
          <div key={user._id}>
            <p>{user.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default StudentList
