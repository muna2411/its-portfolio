import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
// import Marquee from "react-fast-marquee";
import Headline from "./Headline";
import Tilt from 'react-parallax-tilt'; //banner image er jonno
import { Parallax } from 'react-parallax';
import { FaGithub } from 'react-icons/fa';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';



const Nav = () => {

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
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: "Successfully Send",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
    }, (error) => {
        console.log(error.text);
    });
};




const aboutRef = useRef(null);
const serviceRef = useRef(null);
const skillRef = useRef(null);
const proRef = useRef(null);
const eduRef = useRef(null);
const tesRef = useRef(null);
const conRef = useRef(null);

const handleAbout = () =>{
aboutRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handleService = () =>{
  serviceRef.current?.scrollIntoView({behavior: 'smooth'});
  }

const handleSkill = () =>{
skillRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handlePro= () =>{
  proRef.current?.scrollIntoView({behavior: 'smooth'});
  }


const handleEdu = () =>{
eduRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handleTes= () =>{
tesRef.current?.scrollIntoView({behavior: 'smooth'});
}

const handleCon = () =>{
conRef.current?.scrollIntoView({behavior: 'smooth'});
}




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
      <button className="text-black text-[20px] font-c mx-[20px]" onClick={handleAbout}>About</button>
      <button className="text-black text-[20px] font-c mx-[20px]" onClick={handleService}>Service</button>
      <button className="text-black text-[20px] font-c mx-[20px]" onClick={handleSkill}>Skill</button>
      <button className="text-black text-[20px] font-c mx-[20px]" onClick={handlePro}>Projects</button>
      <button className="text-black text-[20px] font-c mx-[20px]" onClick={handleEdu}>Qualification</button>
      <button className="text-black text-[20px] font-c mx-[20px]" onClick={handleTes}>Testimonial</button>
      <button className="text-black text-[20px] font-c mx-[20px]" onClick={handleCon}>Contact</button>
                    </ul>
                </div>
   
                <p className='font-b text-[40px] text-black'>JOHN</p>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 ">
                    <Link to="/"> <button className="text-black text-[20px] font-c mx-[20px]">Home</button></Link>
                      <button onClick={handleAbout}  className="text-black text-[20px] font-c mx-[20px]">About</button>
                      <button onClick={handleService} className="text-black text-[20px] font-c mx-[20px]" >Service</button>
                      <button onClick={handleSkill} className="text-black text-[20px] font-c mx-[20px]">Skill</button>
                      <button onClick={handlePro} className="text-black text-[20px] font-c mx-[20px]">Projects</button>
                      <button onClick={handleEdu} className="text-black text-[20px] font-c mx-[20px]">Qualification</button>
                      <button onClick={handleTes} className="text-black text-[20px] font-c mx-[20px]">Testimonial</button>
                      
                  </ul>
              </div>

              <div>
                <button onClick={handleCon} className='w-[150px] h-[50px] bg-black text-white font-c'>Contact<img src=''></img></button>
              </div>
  
            </div>



          <div>
              {userData ? (

              <div>
               {/* intro */}
               <div className='lg:flex lg:flex-row md:flex-col sm:flex-col justify-around items-center lg:ml-[0px] md:ml-[150px] sm:ml-[0px]'>
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
                      <button onClick={handleCon} className='w-[150px] h-[50px] bg-black text-white font-c '>Contact</button>
                    </div>
                </div>

                <div className='mx-[-200px] lg:block md:hidden sm:hidden'>
                <img className='w-[300px]' src="https://i.ibb.co/JpwYCf6/Animation-1711705548311.gif" alt="Animation"></img>
               </div>


                

                <Tilt>
                <div className='relative'>
                <img className='lg:w-[420px] lg:h-[620px] md:w-[320px] md:h-[520px] sm:w-[320px] sm:h-[520px]' src={userData.user.about.avatar.url}></img>
                <div className="absolute top-[550px] left-[10px] transform -translate-x-1/2 -translate-y-1/2 w-[230px] bg-white h-[80px] text-center text-[20px] rounded-full text-black border border-black border-1">
                  <p><span className='text-[50px] font-b'>{userData.user.about.exp_year}</span>+ year Experience</p>
                </div>
                </div>
                </Tilt>
              
               
                </div>

            {/* about */}
            <div> <Headline ref={aboutRef}  /> </div>
            
            <div className='lg:flex lg:flex-row md:flex-col sm:flex-col justify-around items-center my-[100px] lg:ml-[0px] md:ml-[100px] sm:ml-[0px]'>
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
                <div className='divider bg-[#29465B] h-[2px] lg:w-[700px] md:w-[500px] sm:w-[400px] my-[50px]'></div>
                <p className='text-black w-[550px] font-c text-[20px]'>{userData.user.about.description}</p>
                <div className='lg:flex lg:flex-row md:flex-col sm:flex-col justify-between items-center'>
                <div className='text-[18px] font-c text-black p-[30px] w-[350px] mb-[5px] mt-[50px] skeleton h-[200px]'>
                  <p className=' mb-[5px]'>Name      : {userData.user.about.name}</p>
                  <p className=' mb-[5px]'>Address   : {userData.user.about.address}</p>
                  <p className=' mb-[5px]'>Email     : {userData.user.about.contactEmail}</p>
                  <p className=' mb-[5px]'>Phone No. : {userData.user.about.phoneNumber}</p>
                </div>
                <div className='lg:block md:hidden sm:hidden'>
                <FaArrowAltCircleRight className='w-[50px] h-[50px] text-black'  />
                </div>
                <div>
              <button onClick={handleEdu} className='w-[150px] h-[50px] bg-black text-white font-c '>Dowload CV {userData.user.skills.percentage}<img src=''></img></button>
                </div>
                </div>
              </div>
              </div>

 
{/* service */}

<div> <Headline ref={serviceRef}  /> </div>
<div className='mt-[150px]'>
  <p className='text-center font-d text-[40px] text-black'>WHAT I DO</p>
  <div className='divider w-[350px] mx-auto bg-black h-[5px]'></div>
  <p className='text-center font-c text-[30px] text-black'>My <span className='font-e text-[#29465B] text-[40px]'>Services</span></p>
</div>

<div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-[100px] my-[100px]'>
  {userData.user.services.map((service, index) => (
      <div key={index}>
        <div className=' card lg:w-[650px]  md:w-[650px] sm:w-[550px] h-[200px] bg-slate-200 text-black my-[30px]'>
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
<div> <Headline ref={skillRef}  /> </div>
<div>
  <p className='text-center font-d text-[40px] text-black'>Professional Skills</p>
  <div className='divider w-[450px] mx-auto bg-black h-[5px]'></div>
  <p className='text-center font-c text-[30px] text-black'>My <span className='font-e text-[#29465B] text-[40px]'>Skills</span></p>
</div>

        <Parallax bgImage="https://i.ibb.co/DpH0jYB/pexels-buchkiste-4835009.jpg" className='my-[150px]'>

        <div className='p-[50px] '>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[50px] text-start '>
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


{/* project */}
<div> <Headline ref={proRef}  /> </div>
<div>
  <p className='text-center font-d text-[40px] text-black'>Project List</p>
  <div className='divider w-[450px] mx-auto bg-black h-[5px]'></div>
  <p className='text-center font-c text-[30px] text-black'>My <span className='font-e text-[#29465B] text-[40px]'>Work</span></p>
</div>

         <div className='mx-[150px] my-[100px]'>
  <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[50px] text-start mx-auto'>
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
            <p className="py-4 text-black font-d gap-[20px]">{project.techStack}</p>
            <div className='flex justify-around items-center'>
            <a href={project.githuburl} ><button className='btn w-[150px] h-[50px] flex text-[15px] text-black'>GitHub <FaGithub className='w-[50px] h-[30px]' /></button></a>
            <a href={project.liveurl} ><button className='btn w-[150px] h-[50px] flex text-[15px] text-black'>View <FaArrowAltCircleRight className='w-[50px] h-[30px]' /></button> </a>
            </div>
          </div>
        </dialog>
      </div>
    ))}
  </div>
</div>







{/* education */}
<div> <Headline ref={eduRef}  /> </div>
<div>
  <p className='text-center font-d text-[40px] text-black'>Qualification & Experience</p>
  <div className='divider w-[650px] mx-auto bg-black h-[5px]'></div>
  <p className='text-center font-c text-[30px] text-black'>My <span className='font-e text-[#29465B] text-[40px]'>Resume</span></p>
</div>

         <div className='lg:flex lg:flex-row md:flex-col sm:flex-col justify-around items-start my-[100px]'>
         <div className='mx-[100px]'>
         <h2 className='text-[50px] font-e text-[#1D1615] divider mb-[100px]'>Education</h2>
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

          <div className="divider h-auto border-l border-black mt-[-0px] lg:block md:hidden sm:hidden"></div>
          <div className='mx-[100px]'>
            <h2 className='text-[50px] font-e text-[#1D1615] divider mb-[100px]'>Work Experience</h2>
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



{/* testimonial */}

<div> <Headline ref={tesRef}  /> </div>
<div className='my-[150px] '>
<div>
  <p className='text-center font-d text-[40px] text-black'>Testimonial</p>
  <div className='divider w-[450px] mx-auto bg-black h-[5px]'></div>
  <p className='text-center font-a text-[30px] text-black'>The <span className='font-e text-[#29465B] text-[40px]'>Reviews</span></p>
</div>


<div className='lg:w-[1000px] md:w-[700px] sm:w-[600px] lg:h-[300px] md:h-[500px] sm:h-[500px] mx-auto  border border-black my-[50px]'>
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
        className="mySwiper lg:w-[1000px] md:w-[700px] sm:w-[600px] lg:h-[300px] md:h-[500px] sm:h-[500px]"
      >
        <div className='lg:w-[1000px] md:w-[700px] sm:w-[600px] lg:h-[300px] md:h-[500px] sm:h-[500px]'>
          {userData.user.testimonials.map((testimonial, index) => (
            <div key={index}>
                <SwiperSlide>
                  <div className='lg:flex justify-around items-center w-[800px] h-[300px] lg:mx-[100px] md:mx-[0px] sm:mx-[0px] my-[10px]'>
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

</div>




{/* Contact */}
<div> <Headline ref={conRef}  /> </div>
<div className='my-[100px]'>
  <p className='text-center font-d text-[40px] text-black'>Contact Me</p>
  <div className='divider w-[350px] mx-auto bg-black h-[5px]'></div>
  <p className='text-center font-a text-[30px] text-black'>Grow <span className='font-e text-[#29465B] text-[40px]'>Communication</span></p>
</div>

<div className='flex justify-around items-center' >
<div>
<div className="flex-col justify-center">
{userData.user.social_handles.map((handle, index) => (
      <div key={index}>
        <div key={handle._id} className="mx-4">
            <a href={handle.url} >
            <div className='flex justify-center items-center my-[30px] w-[300px] h-[100px] bg-[#1D1615] gap-[30px] text-white' >
            <img src={handle.image.url} alt={handle.platform} className="w-[50px] h-[50px]" />
            <p className='text-[20px] font-a'>{handle.platform}</p>
            </div>
            </a>
            
        </div>
        </div>
      ))}
    </div>
</div>



  <div>
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 ">
      <label className="text-[20px] font-c text-[#1D1615]">Name</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px] " style={{border: '2px solid black'}} type="text" name="user_name" required/>
      <label className="text-[20px] font-c text-[#1D1615]">Email</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px]" style={{border: '2px solid black'}} type="email" name="user_email" required/>
      <label className="text-[20px] font-c text-[#1D1615]">Message</label>
      <textarea className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[100px] my-[20px]" style={{border: '2px solid black'}} name="message" required/>
      <input className='w-[150px] h-[50px] bg-[#1D1615] text-white font-c ml-[250px]' type="submit" value="Send" />
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