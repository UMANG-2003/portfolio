import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Canvas = () => {
  return (
    <div className="flex justify-center">
      <DotLottieReact
        src="https://lottie.host/cba44c8d-455c-46e1-b973-6748ffb9d1f1/t4UleNEQbA.lottie"
        loop
        autoplay
        className="block m-0 p-0 w-80 h-80 md:w-96 md:h-80 lg:w-96 lg:max-h-96 mt-3"
      />
    </div>
  );
};

export default Canvas;
