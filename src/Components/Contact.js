import React from 'react';
import contact from './assets/contactme.png'
const Contact = () => {
    return (
      <div className="grid justify-center mt-20">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpXpSXdwXBcvNvjTmJgHmkRqCpBdHVCnhDpPGGvpkVvmbWkRjRGVGXpSGGgLXwbhWXFDx">
          <button className="btn btn-outline">contact with me</button>
        </a>
        {/* <div className="hero bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
             
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <img src={contact} alt="" className='h-[300px]' />   */}
      </div>
    );
};

export default Contact;