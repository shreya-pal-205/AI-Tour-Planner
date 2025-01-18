import React from "react";
import HotelListCards from "./HotelListCards";

function HotelListSection({hotel}) {
  return (
    <div>

      <div>
        {hotel?.tripData?.hotels?.map((item, i) => (
            <HotelListCards item={item} />
        ))}
      </div>
    </div>
  );
}

export default HotelListSection;
