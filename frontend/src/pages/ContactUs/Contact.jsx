import React, { useState } from "react";
import contact from "../../assets/neww.avif";
import Footer from "../../components/Footer";

const Contact = () => {
    const[state,setState] = useState({
        name : "",
        email:'',
        subject:'',
        message:''
      });
      const inputHandle=(e)=>{
        setState({
          ...state,
          [e.target.name] : e.target.value
        })
      }
      const submit =(e)=>{
        e.preventDefault()
        console.log(state)
      }
  return (
    <div>
      <div>
        <img
          src={contact}
          alt=""
          className="w-[100%] md:h-[80vh] relative bg-[#00000038]"
        />
        <p className="absolute left-[20%] md:left-[38%] top-[13%] md:top-[30%] text-white text-[50px] md:text-[65px] font-semibold">
          Contact Us
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 pl-10 md:pl-20 pr-10 md:pr-20 mt-10 md:mt-20 mb-20">
        <div>
          <p className="text-[30px] font-semibold mb-10">GET IN TOUCH</p>
          <form onSubmit={submit}>
            <div className="md:flex gap-5 mb-4">
              <span className=" flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={inputHandle}
                  value={state.name}
                  required
                  placeholder="Enter your Name"
                  className="h-[40px] md:w-[257px] border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                />
              </span>
              <span className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[13px] font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={inputHandle}
                  value={state.email}
                  required
                  placeholder="Enter your Email"
                  className="h-[40px] md:w-[257px] border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                />
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className=" flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-medium">
                  Your Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  onChange={inputHandle}
                  value={state.subject}
                  required
                  placeholder="Subject..."
                  className="border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                />
              </span>
              <span className=" flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  onChange={inputHandle}
                  value={state.message}
                  cols="30"
                  rows="5"
                  placeholder="Enter your Message"
                  className="border-2 border-[#e4e6efff] rounded-[4px] pt-1 pb-1 pl-3 pr-3"
                ></textarea>
              </span>
              <div>
                <button className="bg-[#2250fcff] hover:bg-[#3651b5] h-[40px] w-[150px] rounded-lg text-white text-[14px] font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <p className="text-[30px] font-semibold mb-10">ADDRESS & MAP</p>
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
          <div className="flex gap-5 mt-10">
            <div className="flex flex-col gap-2">
              <p className="text-[#3c4043] text-[15px] font-semibold">OURIERGE Shipping & Security Co., Inc.</p>
              <p className="text-[#5b5959] text-[14px]">10 Via Walter Gropius Ravenna, Emilia-Romagna 48124, Italy</p>
              <p className="text-[#5b5959] text-[14px]">P: +33 757-909-0582</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#3c4043] text-[15px] font-semibold">OURIERGE Shipping & Security Co. Office</p>
              <p className="text-[#5b5959] text-[14px]">Mecidiyeköy Şişli, İstanbul 34371, Turkey</p>
              <p className="text-[#5b5959] text-[14px]">P: +90 207-600-5000</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
