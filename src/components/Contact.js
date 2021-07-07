import React, { useState } from "react";

const Contact = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    message: "",
  });

  const inputEventChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `FullName : ${userInfo.fullName}, Email : ${userInfo.email}, Password : ${userInfo.password}, Message : ${userInfo.message}`
    );
    console.log(
      `FullName ; ${userInfo.fullName}, Email : ${userInfo.email}, Password : ${userInfo.password}, Message : ${userInfo.message} `
    );
  };

  return (
    <>
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-capitalize fw-bold display-6 text-center mb-5">
            Contact Us
          </h2>
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div className="formDiv">
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={userInfo.fullName}
                      onChange={inputEventChange}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter name"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      value={userInfo.email}
                      onChange={inputEventChange}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="abc@gmail.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput3"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      value={userInfo.password}
                      onChange={inputEventChange}
                      type="password"
                      className="form-control"
                      id="exampleFormControlInput3"
                      placeholder="Type password"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea4"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={userInfo.message}
                      onChange={inputEventChange}
                      className="form-control"
                      id="exampleFormControlTextarea4"
                      rows="4"
                      placeholder="Write your message"
                    />
                  </div>
                  <button className="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
