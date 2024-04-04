import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
// import Marquee from "react-fast-marquee";
import Tilt from 'react-parallax-tilt'; //banner image er jonno
import { Parallax } from 'react-parallax';
import { FaGithub } from 'react-icons/fa';
// , FaEnvelope, FaLinkedin, FaMapMarkerAlt
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import emailjs from '@emailjs/browser';

const Nav = () => {

  // const emailAddress = 'nurnahar.muna.2411@gmail.com';
  // const linkedIn = 'https://www.linkedin.com/in/nur-nahar-muna-0084142a4/';
  // const location = 'https://www.google.com/maps/place/17+No.+West+Bakalia+Ward,+Chattogram/@22.3516772,91.8445535,15z/data=!4m6!3m5!1s0x30ad276c6e2b0f99:0x56129b01088360bd!8m2!3d22.35016!4d91.8440259!16s%2Fg%2F11dd_tdbv0?entry=ttu'

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const userData = await response.json();
        setUserData(userData); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cp71a1d','template_kag4xnw', form.current, {
        publicKey: 'rPbZzwJKv6ivVb0F7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


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
                                className="text-black font-a"
                                repeat={Infinity}
                    />

                    <div className='my-[50px]'>
                      <button className='w-[150px] h-[50px] bg-black text-white font-c '>Contact<img src=''></img></button>
                    </div>
                </div>
                <div >
    <img className='w-[300px]' src="https://i.ibb.co/JpwYCf6/Animation-1711705548311.gif" alt="Animation"></img>
    
</div>


                

                <Tilt>
                <div className='relative'>
                <img className='w-[420px] h-[620px]' src={userData.user.about.avatar.url}></img>
                <div className="absolute top-[550px] left-[10px] transform -translate-x-1/2 -translate-y-1/2 w-[230px] bg-white h-[80px] text-center text-[20px] rounded-full text-black border border-black border-1">
                  <p><span className='text-[50px] font-b'>{userData.user.about.exp_year}</span>+ year Experience</p>
                </div>
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


              <div className='my-[150px] ml-[20px]'>
<TypeAnimation
    sequence={[
    'WHAT I DO . . . . . .',
    100,
    ]}
    speed={50}
    style={{ fontSize: '90px' }}
    className="text-[#B2BEB5] font-b "
    repeat={Infinity}
/>
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
        <Parallax bgImage="https://i.ibb.co/DpH0jYB/pexels-buchkiste-4835009.jpg" className='my-[150px]'>

        <div className='p-[50px] '>
            <div className='grid grid-cols-4 gap-[50px] text-start '>
              {userData.user.skills.map((skill, index) => (
                  <div key={index}>
                    <div className='flex justify-between items-start '>
                      <div className='flex'>
                        <img className='w-[30px]' src={skill.image.url}></img>
                      <p className='text-[20px] text-start font-c text-black'>{skill.name}</p>
                      </div>
                      {/* <progress className="progress w-56 h-[3px] text-black" value={skill.percentage} max="100"></progress> */}
                      <p className='font-medium text-[#29465B]'>{skill.percentage}%</p>
                    </div>
                    <progress className="progress w-[350px] h-[4px] text-black" value={skill.percentage} max="100"></progress>
                  </div>
              ))}
            </div>
         </div>
        </Parallax>



         <div className='my-[150px] ml-[20px]'>
<TypeAnimation
    sequence={[
    'P R O J E C T S . . . . . .',
    100,
    ]}
    speed={50}
    style={{ fontSize: '90px' }}
    className="text-[#B2BEB5] font-b "
    repeat={Infinity}
/>
</div>

         <div className='mx-[150px]'>
  <div className='grid grid-cols-3 gap-[50px] text-start mx-auto'>
    {userData.user.projects.map((project, index) => (
      <div key={index}>
        <button className='mx-auto' onClick={() => document.getElementById(`my_modal_${index}`).showModal()}>
          <Tilt>
            <img className='w-[350px]' src={project.image.url} />
          </Tilt>
          <p className='text-[20px] text-start font-c text-black'>{project.sequence} .</p>
        </button>
        <dialog id={`my_modal_${index}`} className="modal">
          <div className="modal-box">
          <div className="modal-action">
              <form method="dialog">
                <button className="btn rounded-full font-bold text-red-500" onClick={() => document.getElementById(`my_modal_${index}`).close()}>X</button>
              </form>
            </div>
            <img className='w-[250px] mx-auto' src={project.image.url} />       
            <p className='text-[22px] text-black font-bold divider'>About Project</p>
            <img className='w-[50px]' src='https://i.ibb.co/x6r3JwZ/Untitled-design-1-removebg-preview.png'></img>
            <p className="py-4 text-black ">{project.description}</p>
            <p className="py-4 text-black font-c">Technology : <span className='text-[#29465B]'>{project.techStack}</span></p>
            <div className='flex justify-around items-center'>
            <button className='btn w-[150px] h-[50px] flex text-[15px]'>GitHub <FaGithub className='w-[50px] h-[30px]' /></button>
            <button className='btn w-[150px] h-[50px] flex text-[15px]'>GitHub <FaGithub className='w-[50px] h-[30px]' /></button> 
            </div>
          </div>
        </dialog>
      </div>
    ))}
  </div>
</div>



{/* testimonial */}

<div className='my-[150px] ml-[20px]'>
<TypeAnimation
    sequence={[
    'T E S T I M O N I A L . . . . . .',
    100,
    ]}
    speed={50}
    style={{ fontSize: '90px' }}
    className="text-[#B2BEB5] font-b "
    repeat={Infinity}
/>
</div>

<div className='w-[1000px] h-[300px] mx-auto'>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[1000px] h-[300px]"
      >
        <div className='w-[1000px] h-[300px]'>
          {userData.user.testimonials.map((testimonial, index) => (
            <div key={index}>
                <SwiperSlide>
                  <div className='flex justify-around items-center w-[800px] h-[300px] mx-[100px] my-[10px]'>
                    <div>
                       <img className='w-[200px] rounded-full' src={testimonial.image.url}></img>
                    </div>
                    <div className='text-black w-[600px] ml-[60px]'>
                      <p className='text-[30px] font-b'>{testimonial.name}</p>
                      <p className='text-[20px] text-[#29465B] font-c'>{testimonial.position}</p>
                      <p className='mt-[10px] text-[15px] '>{testimonial.review}</p>
                    </div>
                  </div>
                
                </SwiperSlide>
            </div>
          ))}

        </div>
      </Swiper>
</div>



{/* education */}

         <div className='flex justify-around items-start my-[200px]'>
         <div className='mx-[100px]'>
         <h2 className='text-[40px] font-d text-[#29465B] divider mb-[100px]'>Education</h2>
            <ul>
              {userData.user.timeline.map(item => (
                item.forEducation && (
                  <li key={item._id} >
                  <div className='flex justify-between items-center mt-[50px]'>
                   <div >
                   <p className='text-[25px] font-b text-black'>{item.company_name}</p>
                   <p className='text-[18px] font-c text-black'>{item.jobTitle}</p>
                   </div>
                   <div className='font-medium text-black text-[15px]'>
                   <p >{item.jobLocation}</p>
                   <p>{item.startDate.substring(0, 10)} to {item.endDate.substring(0, 10)}</p>
                   </div>
                 </div>
                 <p className='text-black mt-[20px] font-c text-[18px]'> - {item.summary}</p>
                 <div className='my-[30px]'>
           {item.bulletPoints.map((point, index) => (
             <p key={index}><span className='text-[30px] font-bold text-black'>.</span> {point}</p>
           ))}
         </div>
               </li>
                )
              ))}
            </ul>
          </div>

          <div className="divider h-auto border-l border-black mt-[-0px] "></div>
          <div className='mx-[100px]'>
            <h2 className='text-[40px] font-d text-[#29465B] divider mb-[100px]'>Work Experience</h2>
            <ul className='gap-[20px]'>
              {userData.user.timeline.map(item => (
                !item.forEducation && (
                  <li key={item._id} >
                  <div className='flex justify-between items-center mt-[50px]'>
                   <div >
                   <p className='text-[25px] font-b text-black'>{item.company_name}</p>
                   <p className='text-[18px] font-c text-black'>{item.jobTitle}</p>
                   </div>
                   <div className='font-medium text-black text-[15px]'>
                   <p >{item.jobLocation}</p>
                   <p>{item.startDate.substring(0, 10)} to {item.endDate.substring(0, 10)}</p>
                   </div>
                 </div>
                 <p className='text-black mt-[20px] font-c text-[18px]'> - {item.summary}</p>
                 <div className='my-[30px]'>
           {item.bulletPoints.map((point, index) => (
             <p key={index}><span className='text-[30px] font-bold text-black'>.</span> {point}</p>
           ))}
         </div>
               </li>
                )
              ))}
            </ul>
          </div>
         </div>


<div className='flex justify-around items-center'>
  
  {/* <div className="grid grid-cols-1  items-start">
  <p className="flex items-center mb-[20px]">
   
    <a href={`mailto:${emailAddress}`} className="ml-[10px] text-[18px] font-c flex items-center text-black">
    <FaEnvelope size={35} color="#000000" />
      <p className='ml-[10px]'>{emailAddress}</p>
    </a>
  </p>

  <p className="flex items-center mb-[20px]">
   
    <a href={linkedIn} className="ml-[10px] text-[18px] font-c flex items-center text-black">
    <FaLinkedin size={35} color="#000000"  />
     <p className='ml-[10px]'>Nur Nahar Muna</p>
    </a>
  </p>

  <p className="flex items-center mb-[20px]">
   
    <a href={location} target="_blank" rel="noopener noreferrer" className="ml-[10px] text-[18px] font-c flex items-center text-black">
    <FaMapMarkerAlt size={35}  color="#000000" />
     <p className='ml-[10px]'>West Bakolia, Chittagong, Bangladesh.</p>
    </a>
  </p>
</div> */}
 

<div>
<div className="flex-col justify-center">
{userData.user.social_handles.map((handle, index) => (
      <div key={index}>
        <div key={handle._id} className="mx-4">
            <a href={handle.url} >
            <img src={handle.image.url} alt={handle.platform} className="w-8 h-8" />
            {handle.platform}
            </a>
            
        </div>
        </div>
      ))}
    </div>
</div>



  <div>
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 ">
      <label className="">Name</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px]" style={{border: '2px solid black'}} type="text" name="user_name" required/>
      <label>Email</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px]" style={{border: '2px solid black'}} type="email" name="user_email" required/>
      <label>Message</label>
      <textarea className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[100px] my-[20px]" style={{border: '2px solid black'}} name="message" required/>
      <input className='w-[150px] h-[50px] bg-black text-white font-c ml-[250px]' type="submit" value="Send" />
    </form>
  </div>
</div>

{/* FOOTER */}

<div className='mt-[100px]'>
  <footer className="footer items-center p-4 bg-black text-neutral-content h-[100px]">
   <div className="items-center  mx-auto font-c">
    <p>Copyright © 2024 - All right reserved</p>
   </div> 
  </footer>
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