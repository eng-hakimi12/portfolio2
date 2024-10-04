import cv from "../cv/cv.pdf"

function Content () {

    return <div>
        <div className="sm:flex sm:h-[500px] h-[800px] relative bg-gray-800 ">
        <div  id="home" className=" m-0 pl-20 sm:pt-32 pt-8 ">
    <p className="text-yellow-500 text-lg pb-10">
        Hello, Welcome
    </p>
    <h2 className="text-white text-4xl font-bold pb-5">
    I am Hakimi 
    </h2>
    <p className="text-lg text-gray-300 pb-3 ">
        
        Hello! My name is Hakimi, and I am a passionate <br /> web developer with a strong  background in creating <br /> modern and responsive websites. 

    </p>
    <button className="bg-yellow-500 mt-3 font-semibold text-lg px-6 py-3 mb-24 rounded-xl">
        <a href={cv} download="cv.pdf">Resume</a>
    </button>
    
    </div>
    <div>
        <img src="/src/assets/Hakimi.jpg" className="sm:w-[450px ] sm:pl-0 pl-14 w-[350px] sm:pt-10  rounded-3xl absolute sm:top-10 sm:right-32"/>
    </div>
</div>

{/* About page */}
<div className="sm:flex bg-gray-900">

<div id="about" className="flex  py-24 sm:pl-24">
        <div className=" relative sm:w-[450px] ml-5 w-[320px] sm:h-[500px] h-[300px] border-[16px] rounded-3xl border-yellow-500 bg-transparent">
            <img src="/src/assets/Hakimi.jpg" className="absolute pl-5 bottom-5 left-7 w-[550px] h-[300px] sm:h-[480px] rounded-2xl" />
        </div>
    </div>
    <div className="sm:pl-32 pl-10 sm:pt-24">
        <h2 className="text-white text-4xl font-bold">About <span className="text-yellow-500">me</span></h2>
        <p className="text-gray-300 font-semibold pr-14 pt-5">
        Hello! My name is Hakimi, and I am a passionate Web Developer with a strong focus on building dynamic and responsive websites. With a solid foundation in front-end and back-end development, I enjoy crafting user-friendly interfaces and ensuring that web applications are both functional and aesthetically pleasing.
        </p>
        <button className="bg-yellow-500 font-semibold mt-10 text-lg px-6 py-3 mb-24 rounded-xl">
            Contact me
        </button>
    </div>
</div>

{/* Skills Page */}

<div id="skills" className="bg-gray-800 m-0 sm:pl-28 pb-5 pt-5 pl-8 sm:pt-32 pr-5">
    <h2 className="text-4xl text-white font-bold pb-10">
        My Skill <span className="text-yellow-500">Set</span> 
    </h2>
    <p className="text-lg text-gray-300 font-semibold">
    "I'm a passionate web developer with experience in building responsive and user-friendly websites. <br/> Skilled in HTML, CSS, JavaScript, and React, I love creating seamless digital experiences. <br/> Constantly learning and staying updated with the latest web development trends."
    </p>
    <div className="sm:flex pt-10 pb-14 sm:justify-center">
        <div className="bg-gray-900 px-7 py-6 rounded-2xl mr-5">
        <i className="fa-solid fa-code text-4xl text-yellow-500 ml-28 mb-5"></i>
        <h3 className="text-white text-3xl font-bold pl8-">
                <span className="pl-7">Frontend</span> <br /> <span className="pl-0">Development</span>
            </h3>
           
        </div>
        <div className="bg-gray-900 mt-5 px-7 py-6 rounded-2xl mr-5">
            <i className="fa-solid fa-code text-4xl text-yellow-500 ml-28 mb-5"></i>
            <h3 className="text-white text-3xl font-bold pl-8">
                <span className="pl-7">Backend</span> <br /> <span className="pl-0">Development</span>
            </h3>
            
        </div>
        <div className="bg-gray-900 px-4 mt-5 py-4 rounded-2xl ">
            <i className="fa-solid fa-code text-4xl text-yellow-500 ml-20 mb-5"></i>
            <h3 className="text-white text-3xl font-bold pl-8">
                <span className="pl-7">Tools & </span> <br /> <span className="pl-0">Technologies</span>
            </h3>
            
        </div>
    </div>
</div>

{/* Portifolio Page */}

<div id="portfolio" className="bg-gray-900 sm:px-24 sm:pt-14 ">
    <h2 className="sm:text-4xl text-2xl text-white font-bold pt-5 sm:pb-5 ml-10 sm:pl-[37%]">
        My <span className=" text-yellow-500">Portfolio</span> 
    </h2>
    <p className="text-gray-500 text-base pt-8 sm:pt-0 font-medium sm:pl-[28%] ml-10 pb-10">
        Explore snapshots reflecting my journey from professional 
        <br /> 
        <span className="pl-3">endeavors to personal milestones. Discover who I am.</span>
    </p>
    <div className="pb-10 sm:flex">
        <img src="/src/assets/pic5.png" className="sm:w-[450px] w-[300px] sm:ml-0 ml-10 rounded-3xl mr-10" />
        <div className="inline-block">
            <div className="sm:flex sm:mt-5 sm:ml-0 ml-10 mt-10">
                <img src="/src/assets/pic1.png" className="w-[250px] h-[250px] rounded-2xl mr-6 mb-6" />
                <img src="/src/assets/Hormuud.png" className="w-[250px] h-[250px] rounded-2xl" />
            </div>
            <div className="sm:flex  sm:mt-5 sm:ml-0 ml-10 mt-10">
                <img src="/src/assets/pic3.png" className="w-[250px] h-[250px] rounded-2xl  mr-6" />
                <img src="/src/assets/pic4.png" className="w-[250px] h-[250px] pt-10 rounded-2xl" />
            </div>
        </div>
    </div>
</div>

{/* Contact Page */}
<div id="contact" className="bg-gray-800 m-0 sm:pl-28 pb-5 pt-10 pl-8 sm:pt-32">
    <h2 className="text-4xl text-white font-bold pb-10 sm:pl-[33%]">
        Contact<span className="text-yellow-500"> Me</span> 
    </h2>
    <p className="sm:pl-[20%] text-gray-500 text-lg font-semibold">
        Reach out and connect with me directly. Let's start a conversation  <br />
        <span className="">about collaboration or opportunities.</span>
    </p>
    <div className="sm:flex pt-10">
        <div className="sm:mr-40">
            <ul className="text-lg font-semibold text-white">
                <li className="mb-2 sm:mb-5"><span className="text-yellow-500">Phone _</span>  +252 615 163 075</li>
                <li className="mb-2 sm:mb-5"><span className="text-yellow-500">Address _</span> Heliwa-Mogadishu-Somalia</li>
                <li className="mb-2 sm:mb-5"><span className="text-yellow-500">Email _</span> ahakimbashir0@gmail.com  </li>
                <li className="mb-2 sm:mb-5"><span className="text-yellow-500">Website _</span> www.Hakimi12.com</li>
            </ul>
        </div>
        <div className="inline-block">
            <input type="text" className="w-[300px] py-4 pl-2 bg-gray-900 rounded-xl" placeholder="Name" />  <br />  <br />
            <input type="text" className="sm:w-[500px] w-[300px] pb-[130px] bg-gray-900 pt-3 pl-3 rounded-xl border-[1px solid white]" placeholder="Message" />  <br />
            <button className="bg-yellow-500 font-semibold mt-10 text-lg px-6 py-3 mb-24 rounded-xl">
                Contact me
            </button>
        </div>
    </div>
    <hr className="mr-32" />
    <p className="text-gray-400 sm:pl-[30%]">
        All rights are reserved by @Hakimi
    </p>
</div>
    </div>
}

export default Content 