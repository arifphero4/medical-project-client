import React from "react";

const BookingService = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl ">
      <div class="card-body  ">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500"> Try another date!</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div class="card-actions justify-center">
          <button class="btn btn-secondary text-white uppercase">
            book appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingService;
