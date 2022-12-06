import React from "react";

export default function SignUp3() {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_pprxh53t.json"
          background="transparent"
          speed="1"
          // style="width: 300px; height: 300px;"
          loop
          controls
          autoplay
        ></lottie-player>
      </div>
      <div>
        <label  for="email">Hello</label>
        <input type="email" name="email" id="email" placeholder="email" width={50} height={20} />
      </div>
    </div>
  );
}
