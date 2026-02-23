

const BannerSlider = () => {
  const items = ["Free Kundli", "Kundli Matching", "Compatibility", "Horoscopes", "Chat with Astrologer", "Chat with Astrologer"];

  return (
    <div className="overflow-x-hidden w-full py-4 
bg-gradient-to-r from-yellow-200/90 via-orange-400/80 to-amber-300/90 
backdrop-blur-md">
      <div className="flex w-max scrollleft">
        {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-6  py-3  flex  items-center justify-center gap-7 text-[#ffffffd7] rounded-lg text-lg whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 22"
              className={`fill-current size-5 text-primary `}
            >
              <path d="M17.78 11.302c-1.648-.392-4.2-1.1-5.606-2.389C10.496 7.37 9.629 2.813 9.18.234a.289.289 0 0 0-.568.007c-.4 2.646-1.267 7.425-3.181 9.052a12.531 12.531 0 0 1-5.2 2.052.28.28 0 0 0 0 .55c1.663.385 4.268 1.151 5.79 2.675 1.435 1.44 2.172 4.984 2.553 7.194a.289.289 0 0 0 .568-.007c.348-2.2 1.043-5.743 2.456-7.187 1.581-1.613 4.437-2.368 6.182-2.719a.281.281 0 0 0 0-.549Z" />
            </svg>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
