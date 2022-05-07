import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaFan, FaHorseHead } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
const Feature = () => {
  return (
    <div className="container p-3">
      <div class="mb-5">
        <h3 class=" fw-bold border-4 p-2 border-bottom border-warning mb-3">Exclusive Car Feature</h3>
      </div>
      <div class="row align-items-center align-items-xl-start">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="content">
            <div class="icon">
              <GiSteeringWheel />
            </div>
            <h5 className="fw-bold">Transmission Types</h5>
            <p className="text-justify">
              In addition to speeds, you'll also choose between manual and
              automatic transmissions.
            </p>
          </div>
          <div class="content">
            <div class="icon">
              <AiFillCar />
            </div>
            <h5 className="fw-bold">Dimensions</h5>
            <p className="text-justify">
              A vehicle's dimensions are how long, wide, tall, etc. it is.
              You'll also often find information such as wheelbase length, trunk
              and cargo capacity,
            </p>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 d-none d-lg-block">
          <div class="exc-featured-img">
            <img src="https://i.ibb.co/XCnSDjX/exc-featured-img.png" alt="jk" />
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="content">
            <div class="icon ">
              <FaHorseHead />
            </div>
            <h5 className="fw-bold">Horsepower</h5>
            <p className="text-justify">

              Horsepower is a measure of a vehicle's engine's power output.
              Traditionally speaking, one horsepower has the strength of one
              thoroughbred horse.
            </p>
          </div>
          <div class="content">
            <div class="icon">
              <FaFan />
            </div>
            <h5 className="fw-bold">Airbags</h5>
            <p className="text-justify">

              Airbags are quick-inflating cushions meant to protect passengers
              in a collision. Airbags are fairly standard equipment in modern
              vehicles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
