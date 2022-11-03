import Avatar from '../assets/Avatar_D.png'

const AlumniList = () => {
    return (   
    <>
     <div className="alumni-list">
        <h1>Alumni List</h1>
        <div className="search-list">
            <input type="text" />
            
            <button className="search">Search</button>
        </div>
        <hr />
        <div className="alumni-list-detail">
        <ul>
            <li>
                <div className="avatar-img-alumniList fb">
                    <img className='alumni-avatar' src={Avatar} alt="default avatar" />
                </div>
                <div className='fb'>
                    <span>Alumni</span> <br />
                    <h6>Kunal Dandona</h6>
                </div>
                <div className='fb'>
                    <h6>Front End Developer</h6>
                    <span>3 Years of Experience</span>
                </div>
                <div className='fb'>
                    <button className="alumni-list-button">Default</button>
                </div>
            </li>
            <li>hello</li>
            <li>hello</li>
        </ul>
    </div>    
    </div>
    
        </>
    );
}
 
export default AlumniList;