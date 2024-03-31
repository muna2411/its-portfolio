import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
// import Marquee from "react-fast-marquee";
import Tilt from 'react-parallax-tilt'; //banner image er jonno
import { Parallax } from 'react-parallax';


const Nav = () => {

  const [userData, setUserData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
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
        <div >

          {/* navbar */}
           
            <div className="navbar ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-10 shadow bg-base-100 rounded-box w-[150px] items-start">
                      <Link to="/"> <button className="mb-[10px]">Home</button></Link>
                      <button className="mb-[10px]" >About</button>
                      <button className="mb-[10px]">Skill</button>
                      <button className="mb-[10px]" >Qualification</button>
                      <button className="mb-[10px]" >Projects</button>
                      <button className="mb-[10px]" >Contact</button>
                    </ul>
                </div>
   
                <p className='font-b text-[40px] text-black'>JOHN</p>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 ">
                    <Link to="/"> <button className="text-black text-[20px] font-c mx-[20px]">Home</button></Link>
                      <button  className="text-black text-[20px] font-c mx-[20px]">About</button>
                      <button  className="text-black text-[20px] font-c mx-[20px]">Skill</button>
                      <button  className="text-black text-[20px] font-c mx-[20px]">Qualification</button>
                      <button  className="text-black text-[20px] font-c mx-[20px]">Projects</button>
                  </ul>
              </div>

              <div>
                <button className='w-[150px] h-[50px] bg-black text-white font-c'>Contact<img src=''></img></button>
              </div>
  
            </div>



          <div>
              {userData ? (

              
              <div>
               {/* intro */}
              <div className='flex justify-around items-center'>
                <div className='my-[200px]'>
                    <p className='text-[50px] font-c mt-[-200px] text-black'><img className='mb-[-120px] ml-[-50px]' src="https://i.ibb.co/N9NH5DZ/Achivemet-Skills-removebg-preview.png"></img>{userData.user.about.name}</p> 
                    <p  className='text-[30px] font-a text-black ml-[100px] mb-[50px]'>{userData.user.about.title}...</p> 
                    <TypeAnimation
                                sequence={[
                                  userData.user.about.subTitle,
                                    100,
                                ]}

                                speed={50}
                                style={{ fontSize: '25px' }}
                                className="text-black font-a "
                                repeat={Infinity}
                    />

                    <div className='my-[50px]'>
                      <button className='w-[150px] h-[50px] bg-black text-white font-c '>Contact<img src=''></img></button>
                    </div>
                </div>

                <div className='mx-[-200px]'>
                <img className='w-[300px]' src="https://i.ibb.co/JpwYCf6/Animation-1711705548311.gif"></img>
                </div>

                <Tilt>
                <div>
                <img className='w-[420px] h-[620px]' src={userData.user.about.avatar.url}></img>
                </div>
                </Tilt>
              
               
                </div>

            {/* about */}
            <div className='flex justify-around items-center'>
              <div>
              <div className='flex'>
                <div className='w-[400px] h-[600px] rounded-full bg-black'></div>
                <div className="relative w-[400px] h-[600px] ml-[-300px] rounded-full overflow-hidden">
                    <img className="w-full h-full " src={userData.user.about.avatar.url} ></img>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ">
                    <span className="text-white text-[40px] font-c mt-[300px]">John Doe</span>
                  </div>
                </div>
              </div>
              <p className='text-center text-[30px] text-black font-a my-[30px] divider '>{userData.user.about.quote}</p>
              </div>
              <div>
                <p className='font-b text-[40px] text-black'>Biography</p>
                <div className='divider bg-[#29465B] h-[2px] w-[700px] my-[50px]'></div>
                <p className='text-black w-[550px] font-c text-[20px]'>{userData.user.about.description}</p>
                <div className='flex justify-between items-center'>
                <div className='text-[18px] font-c text-black p-[30px] w-[350px] mb-[5px] mt-[50px] skeleton h-[200px]'>
                  <p className=' mb-[5px]'>Name      : {userData.user.about.name}</p>
                  <p className=' mb-[5px]'>Address   : {userData.user.about.address}</p>
                  <p className=' mb-[5px]'>Email     : {userData.user.about.contactEmail}</p>
                  <p className=' mb-[5px]'>Phone No. : {userData.user.about.phoneNumber}</p>
                </div>
                <div>
                <img className='w-[150px]' src="https://i.ibb.co/JpwYCf6/Animation-1711705548311.gif"></img>
                </div>
                <div>
                <button className='w-[150px] h-[50px] bg-black text-white font-c '>Dowload CV {userData.user.skills.percentage}<img src=''></img></button>
                </div>
                </div>
              </div>
              </div>


     
{/* service */}

<div className='grid grid-cols-2 mx-[100px] my-[100px]'>
  {userData.user.services.map((service, index) => (
      <div key={index}>
        <div className=' card w-[650px] h-[200px] bg-slate-200 text-black my-[30px]'>
          <div className=" flex justify-around items-center">
            <img className='w-[150px] h-[150px] mt-[-0px] rounded-full ml-[-50px]' src={service.image.url}></img>
            <div className='w-[350px] h-[200px] my-[50px]'>
              <p className='text-[20px] font-c '>{service.name}</p>
              <p className='text-[15px] '>{service.desc}</p>
            </div>
            <div className="divider h-[200px] border-l border-gray-400 mt-[-0px]"></div>

            <div className='mt-[-80px]'>
              <p className='text-[20px]  font-c '>Charge</p>
              <p className='text-[20px]  font-c '>{service.charge}</p>
            </div>
          </div>
        </div>
      </div>
  ))}
</div>




    {/* Short Skill */}
        <Parallax bgImage="https://i.ibb.co/xHprZrD/White-Motivation-March-Banner.png" className='my-[150px]'>

        <div className='p-[50px] '>
            <div className='grid grid-cols-4 gap-[50px] text-start '>
              {userData.user.skills.map((skill, index) => (
                  <div key={index}>
                    {/* <Marquee>
                    <img className='w-[80px] ' src={skill.image.url}></img>
                    </Marquee> */}
                    <div className='flex justify-center items-center text-start gap-[20px]'>
                      <p className='text-[20px] text-start font-c text-black'>{skill.name}</p>
                      <progress className="progress w-56 h-[3px] text-black" value={skill.percentage} max="100"></progress>
                      <p className='font-medium text-[#29465B]'>{skill.percentage}%</p>
                    </div>
                  </div>
              ))}
            </div>
         </div>
        </Parallax>

{/* 
        <Marquee  speed="30">
          <img className="w-[80px]" src={userData.user.skills.image.url}  />
        </Marquee> */}
         {/* projects */}
         <div className='mx-[100px]'>
  <div className='grid grid-cols-3 gap-[50px] text-start mx-auto'>
    {userData.user.projects.map((project, index) => (
      <div key={index}>
        <button className='mx-auto' onClick={() => document.getElementById(`my_modal_${index}`).showModal()}>
          <Tilt>
            <img className='w-[500px]' src={project.image.url} alt={project.title} />
          </Tilt>
          <p className='text-[20px] text-start font-c text-black'>{project.title}</p>
        </button>
        <dialog id={`my_modal_${index}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="py-4">{project.description}</p>
            <p className="py-4">{project.techStack}</p>
            {/* {userData.user.projects.techStack.map((pro, index) => (
                <div key={index}>
                    <p className='text-[20px] text-start font-c text-black'>{pro}</p>
                </div>
            ))} */}
            <button></button>
            <button></button>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={() => document.getElementById(`my_modal_${index}`).close()}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    ))}
  </div>
</div>


            
</div>





              ) : (

              <p>Loading user data...</p>

             )}

          </div>
       
      
      </div>
    );
};

export default Nav;