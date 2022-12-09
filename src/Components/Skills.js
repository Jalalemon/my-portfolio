import React from 'react';

const Skills = () => {
    return (
      <div className="grid lg:grid-cols-5 mt-20 md:grid-cols-3 sm:grid-cols-2 gap-3 w-3/4 mx-auto">
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafsg1lRwU6xlVe8MQTQGXm5SCMVoooUpR9g&usqp=CAU"
              alt="Shoes"
              className="bg-base-100 h-24"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">JAVASCRIPT</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACBCAMAAAAYG1bYAAAAz1BMVEX///9h2vsAn+P8/Pz5+fkAnOL39/dU2PsAmOH09PR8wOzq9Pxa2fvx8fHu7u5R1/vp6enl5eXs+v7f4OLR8/7Y9f7z/P/Q0tX4/f+coKeE4fwAk+Cr6v3o+f7W6vii6PzC7/2V5fxv3fumqrCAhY6/4faI4vy57f3J8f0ppeXMztG/wsaeoqixtLmNkpqi0/K6vcE/red9xO203PRZtumVzvBvu+vH4vba7vpTtOmq2PNNoNGAwu2Pye55gotueIIajsg5SFkrPVBfanaMna04/HwGAAAO30lEQVR4nO1dCXuqOhoGUcGKuCNardtxr1prtdqp986ZO///N02+JEACQdGeOfdW8j5nQbbavHz7l6AoEhISEhISEhISEhISEhISEhISEhISEhISd4FsubFYLofD5XLRKGf/7m+TQFiLYbO5XFTLhbSiaLlydbFsNp8X1t/9vRKExvNqWRUdqL40nxu/+9skEtXnZkOLPqw1mk0hQxK/DovV4gwF3kkvv+GrJBbLVczHvLpa/n+/SXKxWJXjn1y6RR40BtdfnQRUf1yp7q+8QBPhup94/2jeoGJemjFPxCOeDkEywaP8o3DLZbk44uBRwA84pUXy4OFleOuVy0si5FEgPkqJuPXH3xNWX4jEGqtzRykH50ZZkzwAtB9fyksUfqQj70w4uPgFJA9KOnoU40GLsinAQTbWzRPPQ/bH1+8hpuGiLuJOziaZhvQvIAHRkAvtwoJwzbCGnKgE4ZeQgG4THD8QhCsrEskVh9Uvqt1oATZZi2BPut12zRFeZ0+7/X67Qy9KKA3NKxJH52FxDitLQreom6ap6+N66KJaS4djZrFPd2STqJUWiwsn2O8fp9f9/uF1PcpfOHXOJPdYEsa6qqKBRv/oA56H+kA36TG9RfclkIbC2YDLGe1Tmc3D7mM72u5ej6nMcX2WieeSu8WS0NNVc9Bt91U04uiZ9/WS0y+iPbranbQHpqpP6O7k0XDOMh/2xuaDG3V7hHZtY9yOixLQw06e83oLeDBrdH/NBA6olhqjbfeCpNEgLi1jPG0ya1uwf7TJfEReVCLJKCDBs/k1XdXdGyENpKrFLt5uF5EaGlCrrDhIGFx6tFyiWCg8Rx2pHDORz/xhk3mPOjYEncS7qF3THPsnTHRqAlqw0fMP9E2z624ni4ZIo7B+XJ+77j3zdu6WiAUmhBuY7GArFWQCzEEH/1th9vd0c+B9SGeTQ0Mjyj/azC65Q6/GQXxgPsckMKkjpGp4xwhcJvgz5vZ2dN8wKEouOTREiEI+83r52tHjKOqmrFFAQGahwp/SRo6parb5nbauFv1PSCfFzj99bzTmwt15I9r6MjhEnIYEjNVHMLp6wMo7KiC4s6gWmV2J0UliUcgbEQ95EJUIX2mlsPoIs8CnLhywCSEaAiwkRSdVhW0stnEuHuAQwdeiwSWmnJAsQITWh0iO2wsssGylk+EniZsnZrv4dzg8ho24pmkBGUMsdNjPKD7T20pbd2M5igo6j7suEcKgCVl4jXRBRdhmwrdNa4EgROV9JDT8OmTuuuj/LrO/jtwm7rpECMNClEt9N667ydtDYEfASwW0uHihVnRlAMlEceofmOoBFZUIYRDaZiMyKI5AMGxAXmouMHJsUAy2WkWD7TjIBAxU1odtm2afvzB7/8IQ1BsYu6v0EWA74+8KLAROmZj04bfrPcid4ky2ibPZiJF2r06YGJvmhL9QA2G49gt9L8wFeTxHYG0vYcb5SVo6pJCwwq9Muy1V13U88hxM2DvoTiuqn81zcf8qSWSbd/vr7/POCQMShUJw3CpQwtFNlwCdhUuFCZu8K6UkQSWJWDCuFwVFST3522CbAx0x07HpPfN4Y1qrdyoV26506vXagB6i57SmXHyXLty5SkoLulJHm1vutGYECBQSl73omnSAB/1J3Wkjr4hP7EEKr6vUe/0Bpcrssjmnwp2rpIagLfUtVv4oCJtxbsE2+2bBhoKminnA2VIUlwXdIIgeilgRqe6ZxbGvmAp3rpJeBH2phqi0dhkbz7vVOLPQLWKD0K8rtIzWMtncNcUAe65gwotKHYkO8OBRlbtzL0ngpz7NwvviYOflwVmzUIeEnT7owfYYhwJQ+ZyGrq4Xcdm/S93Z6QD3a1BvKXvnhkFgnHcxqgoi+OwxLPSgqKzSQZ/iFJHXBKB0+oiiPrUQfSwhfvWzhkvTpPiQ/qaG4eMhFj7/9eltn6hf8hYzox2E4xkGMAuEhQmQ4JVxoLI/7XlZPayqPMWDommzXWfT37g0jcNt7XsahsNjJh5S/qZxItemImqYF5FyHVyPBUgWqYw3hJ73luqa5q4bJejkM1TeWirbIQBF6WJP+bYsPBkpgEH+A2RSZ4APZj7JtZnbjDNjnoEF7KgGS2l1PPCkzIAMgYsiUf/Yl+UCZ6gDYdmwvjMLo9ExRZ52YzvDTz76tMEykMJyAH9Sxmyb8Vmww1nqmNjTuhB2kYCFXrCkAJ6QSnN6Yz+LQe3EBHPEnW+bpC5tfcvyM2FhM4LB/tydPrepz9lpu599GqcHZb/ZIiZOa2O3Nk7bWepj/W74LOQpC9Yf107s+XTjDBS0YRbGbBYVo6e7oqCwqSRa7ocwIZDJm5g4z21lL0/Gwmj8GXfG728AZiFzPDxtPo/vD+/rz/X7xp7lN++P+cyTkT/mM0Z+s0Y4PjyN3j4JC3tLKVWV6r+VXEPJVv/6+XOlNHJKtaBULaVchmNWFR9rKFoj7R4recdOu6qSbmhaI5dulICFQTgx5wVsDscCIQZZhmCDAK35WPOC1iBfpKSUyvBFClXyRTSlkXW/ZEn5+fM//5x1OYgsHGen9X7zPlu/HT/eN0+Ph9lhZhuHjP15Shn5x/Xo9JbfP42OD5QFNKCYhQLLQsOCka5W4ZjVwMdgpNOhY4gFcmyeS8/LwELLDLa51HRP5whkQQ3LAhIeLAsLS6M/rAw/DLFeaHgsoC9SoMf+gSxsth9II51mD5vNw2l2MnbG6WNn7D6P24dMZp3J7D4QTSekkT4FdqH05x9XTitx7QLWSOAjIUVv8s92C0K4ibfp2gVSXAN1pQbqbMSMaPE10l9nm89/L6h1zuDRTVFbjG0z9U1T7k7612fByYin2lzG0Q00wDpDZsQxAw0WHeIX4e2a7yPRQI1sc2k+RFWxgqI261umMJ6M1NVwPdXULXltwMwNNFwWIHI2B4w0IMU/8Lrxxl5VwXeRBly84LRMEvNlvycLDgoVYiHDbFN3f3NtzdmFQYUIe6oWHjQUmZlmzzsDjXjPN8FjnO026eQdEJwuFzvXUMhHmlhz35MF5HDGQuW/trftPrOnKzqRWBxS7hZEbRbR411IYbSoloGEqYPMspvXnrZ0XR/QJFMXB2h+HqmDW+rJmYXvGTvHhqjIc7ztVh9emQezQKs8Uzx9ivBAEqZI8/g1Hk9ddXSsfPo0p1ofwySrIvWYrDtn4aUU2uVc2Yvk4s1rqcQsuKlte0wmrU1s90EfhDwhhbhMCq0v2BM82VBv0XqbZn3TnGpcVAX92jcaBr84hDPbfvmoPiC1Nug7AqUPpYRAHIGTHTjCA2dVJ6d7EV/23lkQqaSPq7uRAEy1mrDAOPj1sdv7Mm7XbHCVinx+ycbGwq5PxtRtKraYqLvwXY1zbAjSLs7jLREDM+eTOElcEwYoGa/XBXJ6g47tkB/jOHYH9NHA65PRB21uvkmpcO8sPAt+u/0NXtKBTcViwxC0OB1Q9V47kt8bZjJdYiYUnIPJp+y9G2fxRJ784/X3eWOnIWKVVArkHKDbpdYe4+EX9ObhRqVWuz4IVaWtuzcL4raw/enauxw4x4qopEB7x5Qk5nCbat8VB68xr9/u1bF5HwdTgFrp7s2CmAX7sSLYew4zfuYPVkkW35PPNWNXIF1hVyqdSsVpqWyTWNvkZ5Ug23z3CkncF6asr2zPC54PKik353PMfa4ZG1JMJGXU1jnHtaYHoolSAhRSxASGzVUG+vAYKM7g9S9WJW7oAgrfncPj00HQCcyoKty/hwQYhpdYg37HK0I3Jzy9EEoMqwJnGYKzziFrPYFHn89+2/wcT2QVEqCQ0MMmXMb26YrG7U3YmGuaNqzyblK4FQDy1hAm84JU5M5DDlISRAHZZ+HvuI1Nw0Y03UHTVlqBixlCc/9tcFDD0xU4trIJEQVFKYtXZt5GLXERwEac8HipphELjE4Kr8BQwYFCcPU2VhawPkqEKCD7LP4tI5e4YGGnItpaV0o2h2jwa9chjaTUVEG9n2PBSoaDhGFFLHB+MC5Gb6OopXuWZRIz+H5SsKZMmli9So6Liu7P/S8kSBQU5TlidW3neL5p1dlHaa1cE0/oQcLgmYZWYPJmH6eM8PpIrHmu+bPOc5SEhLAQvUzV1thHt62uHyOb7JGSw7NtGRra3FphMK/BVCt4rTCTDSS6XuycLiXGNBNErlOlKKfHvfB5t3fGW6QXNYccYYCGOrMciUPq0VjzkE3PcHuWIl3GJCSIBWUlCt0InF1mFly4094ejX20J5slsqVR00BpUN0g2WnjhVPdtMUUryHZp5MaTBq0ZcsJ00eAs4tsP72mMm+70VPetvOH0fphZhy35ypBdKltjZgGRAP+DK16rWltggtv7Lq2Nl7uVh+0e72x28iaSyIJSjlyGUmC/Oj0NktljNTs+PpxIZAYuusJ+DTgIBqmFZLigh7wT2u01gwNG9g2FxJJQowlnmODyaVS02CVyrj+OS6C8oGGjJAkTek62zo4TFqp5JKQMBb8J/iLKLMVC58GrJXq3dZg3A6vdQ6o9PqtVheqnUgbJZUEZKHDvUk3gF9xnigl7CmVY76ATEOMWYkl4dfQUAiaebzAMBGHcrQj5p9ugSAkmIRfQYMVjv98GtBDfoEHj4MEk4Bo+KJtqIqCcPxanhzloWxFTwfJIZpcQUicd8Ri+CVPaS6e2qdRccA8ABGCSUIaosDlIOkkIIf15hdIIgojp5S54kB4gPF2M0QkvkZ7CAUeB4kmAV4SHMOGipA9p86oOGAeMBEw7j7wHskBi+ZNWmkeUStyQXhwiSBM+IBdBcKBJIGgcSa3F4HsSrxkOgvyJk/EAyICM8GggCnIyrcLs3i+0josxR0EAbhvFgaJwFS4gI/ZrHzDcxDW6or3nb/EjzO8F51ns4QLPP6YgbR823kY5dUy1kTv9PLKIEMTvXNevnA+CtaweXF8q83nG+JtTYRbvmIyMG+ey7RWh7e5UxRy/GMjPX9uLquhYDddXTaf5198J7fENSg0hs/N5vBlMW805ouXYbP5PJzHzFNL/FpoVrmKULakBpGQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkAjjfxdXGkY2JrGlAAAAAElFTkSuQmCC"
              alt="Shoes"
              className="bg-base-200 h-24"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">REACT JS</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3t_6AbEXCIM79LNer-Fh4xTBuDRgg8A_kQ&usqp=CAU"
              alt="Shoes"
              className="h-24 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">FIREBASE</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3t8pX2GdI8N_4UsFyx-vvzBTzSbYcqqhqQ&usqp=CAU"
              alt="Shoes"
              className="bg-base-200 h-24"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">HTML</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="data:image/png;base64,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"
              alt="Shoes"
              className="h-24 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">CSS</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="data:image/png;base64,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"
              alt="Shoes"
              className="h-24 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">BOOTSTRAP</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUKkMrQTiYjOx1Ryxv-qI4MxMLugIqfdQWg&usqp=CAU"
              alt="Shoes"
              className="h-24 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">MONGODB</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="data:image/png;base64,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"
              alt="Shoes"
              className="h-24 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">TAILWINDCSS</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaA40rMAtfzF92nLrkv6h4TMpp_Ahycr7_A&usqp=CAU"
              alt="Shoes"
              className="h-24 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">NODE JS</h2>
          </div>
        </div>
        <div className="card w-50 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2Y_oHHBYTXFbSr_pP21khuXvVe5aWuT84w&usqp=CAU"
              alt="Shoes"
              className="h-24 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">REACT ROUTER</h2>
          </div>
        </div>
      </div>
    );
};

export default Skills;