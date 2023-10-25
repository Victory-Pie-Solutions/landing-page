import React, { useState } from "react";
import emailjs from 'emailjs-com';


function Contact() {
  const YOUR_SERVICE_ID = 'service_lvq1sbd'
  const YOUR_TEMPLATE_ID = 'template_sbeqm4p'
  const YOUR_USER_ID = 'aRkPlz6ncD2fBKbz_'

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const form = document.getElementById('form') as HTMLFormElement;
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, YOUR_USER_ID)
      .then((result) => {
        window.location.reload()
      }, (error) => {
        console.log(error.text);
      });
  }
  
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <form  id="form"  onSubmit={(e) => sendEmail}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
            Contact Us
          </h1>
          <p className="lg:w-1/3 mx-auto leading-relaxed text-base">
            We value your input and are eager to hear from you. Whether you have
            questions, feedback, or simply want to reach out, don't hesitate to
            get in touch with us
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
              onClick={(event) => sendEmail(event)}
              >
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a
                className="text-orange-500"
                href="mailto:Victorypiesolutions@outlook.com"
              >
                Victorypiesolutions@outlook.com
              </a>
              <p className="leading-normal my-5">
                {" "}
                Reichenhainer Straße
                <br />
                Chemnitz Germany
              </p>
            </div>
          </div>
        </div>
      </div>
      </form>
    </section>
  );
}

export default Contact;
