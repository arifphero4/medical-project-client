import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center my-8 p-8"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
          voluptatibus cumque! Provident repellat repellendus amet repudiandae
          impedit natus perspiciatis rerum non aspernatur nobis ullam optio
          illo, maxime sapiente voluptas voluptates, facilis quae dolores vel
          recusandae eum. Maiores possimus aut laboriosam.
        </p>
        <PrimaryButton> Get Started </PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
