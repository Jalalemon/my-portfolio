import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Resume = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn btn-primary" onClick={toPdf}>
            Resume
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        Mohammad Jalal Uddin
         Front End Developer Chattogram, Bangladesh Email:
        jalaluddinemon4@gmail.com GitHub: https://github.com/Jalalemon Phone:
        (+88) 01815-382591 LinkedIn:
        https://www.linkedin.com/in/mohammad-jalal-uddin CAREER OBJECTIVE In the
        bud of my career. I am so illuminated as a quick learner. I will try to
        do the best to complete my daily tasks with hard work, dedication, and
        responsibilities. SKILLS • Expertise: JavaScript, ES6, REST API, React,
        React Router, React Hook, SQL, HTML5, CSS3, Bootstrap, figma, Netlify,
        Firebase, Tailwind CSS, Daisy Ui. • Comfortable: Node.js, MongoDB,
        Mongoose, stripe, Firebase, Vercel, Express.js react query. • Familiar:
        Gatsby.js Redux, stripe. PROJECTS Linkers.com – kind of e-commerce site
        Time period: 24/11/2022 – 28/11/2022 • buyer and seller, including admin
        can delete any user. • seller add or remove his/her products to show
        advertise in homepage • buyer can book any products and pay any online
        card Live Site link: live-site | client-code | server-code Technology
        used: React.js, Node.js, Daisy Ui, MongoDB, Firebase HTML, CSS, Tailwind
        CSS, Express.js, stripe, react-query. Wildlife Studio – kind of wild
        photography service site Time period: 7/11/2022 – 10/11/2022 • Service
        website including admin panel to add or remove services. • Reviews add
        or remove for the client to show homepage • Authentication secure and
        used simple JWT token Live Site link: live-link | client-code |
        server-code Technology used: React.js, Node.js, Daisy Ui, MongoDB,
        Firebase HTML, CSS, Tailwind CSS, Express.js, Learn With Jalal – kind of
        Educational Courses site Time period: 25/10/2022 – 27/10/2022 •
        Educational premium Course buy the client and show details • Download
        pdf login with social media • Authentication secure Live Site link:
        live-site | client-code | server-code Technology used: React.js,
        Node.js, Firebase HTML, CSS, Bootstrap, Express.js, EDUCATION Bachelor
        of Arts: Bengali Literature-2022 University of Barisal (BU) Barisal,
        Bangladesh. EXTRA-CURRICULAR ACTIVITIES • Time management •
        Communication teamwork and collaboration • Social Worker PROFESSIONAL
        TRAINING • Complete Web Development Course - Programming Hero 2022
      </div>
    </div>
  );
};

export default Resume;
