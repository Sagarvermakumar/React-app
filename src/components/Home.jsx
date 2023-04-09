import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home" >
        <main>
          <h1>Hmright</h1>
          <p>Soluction to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" srcset="" />

        <div>
          <p>
            We are you on in only soluction to the tech problems you face every
            day . we are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            atque nulla quae recusandae ipsum accusantium possimus, eos tempore
            harum dolorum voluptates obcaecati quod reprehenderit dicta
            perferendis commodi, quia officiis! Sequi, magnam, tempora ea, quos
            illum dolorum sit quisquam explicabo porro molestiae ullam! Fuga,
            placeat! Voluptatum pariatur in repudiandae voluptas tenetur.
          </p>
        </div>
      </div>

      <div className="home4" id="brands" >
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.1",
              }}
            >
              <AiFillInstagram />
              <p>Google</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
