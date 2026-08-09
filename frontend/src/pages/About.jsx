import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            eveniet nostrum esse amet voluptatibus laborum facere autem
            molestias saepe accusamus distinctio reiciendis consequatur, omnis
            magnam labore minus sit. Accusamus, dignissimos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
            esse sint qui voluptas quos facere corporis cupiditate expedita
            distinctio ea reiciendis dolorum eos deleniti blanditiis commodi ab
            cumque, earum corrupti?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum
            reprehenderit a cumque provident quidem, fuga eius eaque facilis
            iste sequi modi porro quiscduam, ab fugiat delectus quam
            exercitationem debitis!
          </p>
        </div>
      </div>

      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            perspiciatis harum sapiente dicta cupiditate asperiores, repellendus
            enim natus temporibus quod.
          </p>
        </div>

        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            perspiciatis harum sapiente dicta cupiditate asperiores.
          </p>
        </div>

        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
