import React from 'react';
import contact from './assets/contactme.png'
const Contact = () => {
    return (
      <div className="grid justify-center mt-20">
        {/* <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpXpSXdwXBcvNvjTmJgHmkRqCpBdHVCnhDpPGGvpkVvmbWkRjRGVGXpSGGgLXwbhWXFDx">
          <button className="btn btn-outline">contact with me</button>
        </a> */}
        <div className=" bg-base-200">
          <div className="hero-content ">
            <div className="text-center">
              <img
                src={contact}
                className="lg:w-3/4 w-full shadow-2xl "
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                alt=""
              />
            </div>
            <div className="card  w-full  shadow-2xl bg-base-100">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                className="card-body"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img src={contact} alt="" className='h-[300px]' />   */}
      </div>
    );
};

export default Contact;