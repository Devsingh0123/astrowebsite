import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight, Phone, ShoppingBag } from "lucide-react";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

import outercircle1 from "@/assets/outercircle1.png"
import innerganesh from "@/assets/innerganesh.png"
import bannerVideo from "@/assets/bannerVideo.mp4"

const Banner = () => {
  return (
    <section className="py-0 from-orange-50 via-yellow-100 to-red-100">
    <div className=" w-full h-[380px] mx-auto overflow-hidden  border-8 border-white">
  <video
    src={bannerVideo}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div>
      <div className="container">
        {/* Top Section */}
        <div className="banner-top   ">
          {/* Left Content */}
          <div className="banner-left px-10">
            <h1 className="banner-heading">
              Discover What The <br /> Stars Have Written For You ✨
            </h1>
            <p className="banner-text">
              Learn about astrology, zodiac signs, retrogrades, and more! Your
              world becomes clear once you understand how the universe
              influences it.
            </p>
          </div>

          {/* Right Image */}

          {/* <div className="banner-image">
             <img src={outercircle1} alt="outer" className="outer" /> 
            <div className="banner-inner">
              <img src={innerganesh} alt="inner" />
            </div>


          </div> */}

          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] aspect-square mx-auto">
            {/* Inner static image (placed first so it's behind) */}
            <div className="absolute inset-0 m-13 flex items-center justify-center">
              <img
                src={innerganesh}
                alt="inner"
                className="w-[60%] sm:w-[65%] object-contain"
              />
            </div>
            {/* Outer rotating image (placed after, so it's on top) */}
            <img 
              src={outercircle1}
              alt="outer"
              className="relative w-full h-full object-contain animate-[spin_20s_linear_infinite]"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="banner-cards md:flex-nowrap sm:flex-nowrap">
          {/* Chat Card */}
          <Card className="banner-card sm:[150px] md:w-[300px]">
            <Link to="/talk-to-astrologer">
              <CardHeader className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="banner-card-icon chat">
                    <IoIosChatbubbles className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium">Chat</div>
                    <div className="text-xs text-gray-500">Click here for</div>
                    <div className="text-xs text-gray-500">
                      connect instantly
                    </div>
                  </div>
                </div>
                <MoveRight className="banner-card-arrow hover:text-[#070707cc]" />
              </CardHeader>
            </Link>
          </Card>

          {/* Talk Card */}
          <Card className="banner-card">
            <Link to="/talk-to-astrologer">
              <CardHeader className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="banner-card-icon phone">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium">Talk</div>
                    <div className="text-xs text-gray-500">Click here for</div>
                    <div className="text-xs text-gray-500">call now</div>
                  </div>
                </div>
                <MoveRight className="banner-card-arrow" />
              </CardHeader>
            </Link>
          </Card>

          {/* Store Card */}
          <Card className="banner-card">
            <Link to="https://store.adkrayons.com/product" target="_blank">
              <CardHeader className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="banner-card-icon phone">
                    {" "}
                    {/* you can change icon if needed */}
                    <ShoppingBag className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium">Store</div>
                    <div className="text-xs text-gray-500">Click here for</div>
                    <div className="text-xs text-gray-500">shop products</div>
                  </div>
                </div>
                <MoveRight className="banner-card-arrow" />
              </CardHeader>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Banner;
