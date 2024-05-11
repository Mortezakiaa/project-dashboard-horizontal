"use client";

import { TailSpin, TailSpinProps } from "react-loader-spinner";

const SpinLoader = ({ width, height, color }: TailSpinProps) => {
  return (
    <>
      <TailSpin
        visible={true}
        height={height || 30}
        width={width || 30}
        color={color || "#000"}
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </>
  );
};

export default SpinLoader;
