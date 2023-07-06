import React from "react";

import Image from "next/image";

const cointoss = () => {
  return (
    <div className="flex align-center flex-1 flex-col">
      <Image
        src="./cat.gif"
        alt="Shufflex logo"
        className="object-contain mx-auto"
        width={300}
        height={300}
        unoptimized={true}
      />
      <h1 className="text-center text-3xl text-gold">
        Page Under Construction
      </h1>
    </div>
  );
};

export default cointoss;
