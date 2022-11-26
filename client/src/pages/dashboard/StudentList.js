import { useEffect, useState, useMemo } from "react";
import Avatar from "../../assets/Avatar_D.png";
import { Link } from "react-router-dom";
import Footer from "../../component/footer.js";

const StudentList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    
    if (!search) {
      setFilteredUsers(users);
      return
    }
    setFilteredUsers(
      users.filter(
        (item) =>
          item.name.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      )
    );
    
  }, [search]);

  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
    setFilteredUsers(users);
  };

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch(
      "https://nexum.wmdd4950.com/backend/api/v1/auth/getUsers"
    );
    const data = await res.json();

    console.log(data);
    return data;
  };

  

  // const filterUsers = useMemo(() => {
  //   if (search) {
  //     return users.filter(
  //       (item) =>
  //         item.name
  //           .toLowerCase()
  //           .indexOf(search.toLocaleLowerCase()) > -1
  //     );
  //   }
  //   return users;
  // }, [search]);

  return (
    <>
      <div>
        <div className="alumni-list">
          <h1>Student List</h1>
          <div className="search-list">
            <input
              type="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="search">Search</button>
          </div>

          <hr />
          <div className="alumni-list-detail">
            <ul>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <li key={user._id}>
                    <div className="avatar-img-alumniList">
                      <img
                        className="alumni-avatar"
                        src={Avatar}
                        alt="default avatar"
                      />
                    </div>
                    <div className="fb">
                      <span>{user.status}</span>
                      <h6>{user.name}</h6>
                    </div>
                    <div className="fb1">
                      <h6>
                        {user.status === "alumni"
                          ? user.jobTitle
                          : user.program}{" "}
                      </h6>
                      <span>{user.yearsOfExperience} of Experience</span>
                    </div>
                    <div className="fb2">
                      <Link to={`alumni-individual-profile/${user._id}`}>
                        {" "}
                        <button className="alumni-list-button">
                          View Profile
                        </button>{" "}
                      </Link>
                    </div>
                  </li>
                ))
              ) : (
                <div>No User</div>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default StudentList;
