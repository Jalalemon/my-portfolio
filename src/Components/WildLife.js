import React from 'react';
import w1 from './assets/w1.png'
import w2 from './assets/w2.png'
import w3 from './assets/w3.png'
import w4 from './assets/w4.png'
const WildLife = () => {
    return (
      <div>
        <div className="w-full mt-10 gap-5 mx-auto grid lg:grid-cols-4">
          <img src={w1} alt="" />
          <img src={w2} alt="" />
          <img src={w3} alt="" />
          <img src={w4} alt="" />
        </div>
        <div>
          <div className="card  card-compact mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">WildLife Studio</h2>
              <p>
                <p className="flex font-semibold">
                  <img
                    className="w-6 h-6"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span className="text-red-500 text-xl ">
                    {" "}
                    Created by Mohammad Jalal Uddin
                  </span>
                </p>
                <p className="flex font-semibold">
                  <img
                    className="w-6 h-6"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span>
                    {" "}
                    In the project directory used deployed client-side-Jalalemon
                    created by GitHub Classroom: JavaScript 93.6% CSS 3.7% HTML
                    2.7%,:
                  </span>
                </p>

                <p className="flex font-semibold">
                  <img
                    className="w-6 h-6"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span>
                    {" "}
                    To create this website i have used react tailwind css
                    frameWork also use daysiUi for make up clean and smart
                    shownig.Carousel show images or content in a scrollable
                    area. Open https://daisyui.com to view it in your browser.
                  </span>
                </p>
                <p className="flex font-semibold">
                  <img
                    className="w-6 h-6"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span>
                    {" "}
                    Firebase hosting. hosted the the client side in firebase
                    hosting. also email-password and goggle
                    authanticationhttps://firebase.google.com/ for more
                    information.
                  </span>
                </p>

                <p className="flex font-semibold">
                  <img
                    className="w-6 h-6"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span>
                    {" "}
                    Mongodb for store data. for creaking this web i used mongodb
                    https://www.mongodb.com/ for restore data. there have a
                    clienddb name like Wildlife studio and it has two collection
                    name addreviews and addservices.
                  </span>
                </p>
                <p className="flex font-semibold">
                  <img
                    className="w-6 h-6"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span>
                    {" "}
                    server side hosting. hosted in the vercel with github login
                    .added Production, Preview, Development Environment Variable
                    DB_USER to Project wildlife-studio-server See the section
                    about https://vercel.com/dashboard for more information. 5.
                    Mongodb for store data.
                  </span>
                </p>
              </p>
              <div className="card-actions justify-end">
                <a href="https://wildlife-studio.web.app/">
                  {" "}
                  <button className="btn btn-sm btn-primary">Live</button>
                </a>

                <a href="https://github.com/Jalalemon/wildlife-studio-client">
                  <button className="btn btn-sm btn-primary">Client</button>
                </a>
                <a href="https://github.com/Jalalemon/wildlife-studio-server">
                  {" "}
                  <button className="btn btn-sm btn-primary">Server</button>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WildLife;