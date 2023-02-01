import React from "react";

export const Homepage = () => {
  return (
    <>
      <div id="content-block">
        <div className="content-push">
          <div className="parallax-slide">
            <div className="parallax-clip">
              <div
                className="fixed-parallax bg-[#191613] flex justify-center pt-60"
                style={{
                 
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1491778589563-419a091ecd26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
                  backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                    fontFamily: "Bitter",
                }}
              >
                 <div className=" text-white ">
                 <p className="text-2xl  font-extrabold transition-opacity ease-in duration-700 opacity-100 ">
            Welcome To
          </p>
          <p className="text-9xl font-extrabold transition-opacity ease-in duration-700 opacity-100 ">
            Bake My Day
          </p>
          <p className="text-2xl  transition-opacity ease-in duration-700 opacity-100 mt-3 italic text-right font-extrabold">
            By Sonia Sappal
          </p>
          </div>
              </div>
            </div>
          </div>
          <div className="parallax-slide">
            <div className="parallax-clip">
              <div
                className="fixed-parallax"
                style={{
                   backgroundColor:'#191613',
                   fontFamily: "Bitter" 
                }}
              >
               <p className="text-white text-7xl">Our Products</p>
                 
              </div>
            </div>
          </div>
          <div className="parallax-slide">
            <div className="parallax-clip">
              <div
                className="fixed-parallax"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/1920/1080/?image=119)",
                }}
              ></div>
            </div>
          </div>
          <div className="parallax-slide">
            <div className="parallax-clip">
              <div
                className="fixed-parallax  bg-[#191613] px-56 pt-10"
                style={{
                  backgroundImage:
                    "url(https://picsum.photos/1920/1080/?image=507)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen  bg-[#191613] flex justify-center pt-60 font-[`Pacifico`]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1491778589563-419a091ecd26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontFamily: "Bitter",
        }}
      >
        <div className=" text-white ">
          <p className="text-2xl  font-extrabold transition-opacity ease-in duration-700 opacity-100 ">
            Welcome To
          </p>
          <p className="text-9xl font-extrabold transition-opacity ease-in duration-700 opacity-100 ">
            Bake My Day
          </p>
          <p className="text-2xl  transition-opacity ease-in duration-700 opacity-100 mt-3 italic text-right font-extrabold">
            By Sonia Sappal
          </p>
        </div>
      </div>
      <div
        className=" min-h-screen bg-[#191613] px-56 pt-10"
        style={{ fontFamily: "Bitter" }}
      >
        <p className="text-white text-7xl">Our Products</p>
        <div className="flex">
          <div className="flex-col px-10 mt-20 h-96 w-6/12 overflow-y-auto  scrollbar-hide">
            <div className="w-full pl-0  border-r-2 border-white flex justify-center items-center ">
              <img style={{width:'50%'}}
                src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                className="hover:scale-110 transition delay-200 duration-200 ease-in-out rounded-full"
              />
              <p className="text-white text-center text-2xl  mt-5">Cakes</p>
            </div>
            <div className=" border-r-2 border-white w-full">
              <img
                src="https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="w-80 h-80  hover:scale-110 transition delay-200 duration-200 ease-in-out rounded-full"
              />
              <p className="text-white text-center text-2xl mt-5">Bento</p>
            </div>
            <div className=" border-r-1 border-white w-full">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                className="w-80 h-80  hover:scale-110 transition delay-200 duration-200 ease-in-out"
              />
              <p className="text-white text-center text-2xl mt-5">Cookie</p>
            </div>
          </div>
          <div className="w-6/12 bg-yellow-100">aaa</div>
        </div>
      </div>
    </>
  );
};
