import { useState, useEffect } from 'react';

const Nav = () => {

  const [userData, setUserData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setUserData(userData);
        // setLoading(false);
      } catch (error) {
        console.error(error);
        // setLoading(false);
      }
    };

    fetchUserData();
  }, []);


    return (
        <div>
            <p>JOHN</p>
            <img src="https://i.ibb.co/JpwYCf6/Animation-1711705548311.gif"></img>
            <div>
      <h1>User Data</h1>
      {userData ? (
        <div>
          <h2>{userData.user.about.name}</h2> {/* Displaying "name" */}
          <p>Title: {userData.user.about.title}</p> {/* Displaying "title" */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
        </div>
    );
};

export default Nav;