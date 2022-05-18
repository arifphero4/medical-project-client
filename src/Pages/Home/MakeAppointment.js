import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section>
      <div className="flex-1">
        <img src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl">Make an Appointment Today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
          voluptatibus cumque! Provident repellat repellendus amet repudiandae
          impedit natus perspiciatis rerum non aspernatur nobis ullam optio
          illo, maxime sapiente voluptas voluptates, facilis quae dolores vel
          recusandae eum. Maiores possimus aut laboriosam.
        </p>
      </div>
    </section>
  );
};

export default MakeAppointment;
