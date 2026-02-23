import { GetSingleAstro } from "@/redux/slice/AstroAuth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Astrodetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { singleAstro } = useSelector((state) => state.astroAuth);
    console.log("single astro details", singleAstro)

    // shortcut (avoid singleAstro?.[0] everywhere)
    const astro = singleAstro?.[0];

    useEffect(() => {
        if (id) {
            dispatch(GetSingleAstro(id));
        }
    }, [id, dispatch]);


    useEffect(() => {
        console.log(singleAstro?.[0])
    }, [])


    const bars = [
        { star: 5, width: "w-full", color: "bg-green-500" },
        { star: 4, width: "w-4/5", color: "bg-blue-500" },
        { star: 3, width: "w-3/5", color: "bg-gray-300" },
        { star: 2, width: "w-2/5", color: "bg-gray-200" },
        { star: 1, width: "w-1/5", color: "bg-gray-200" },
    ];

    return (
        <section>
            <div className="container">

                {/* Profile Card */}
                <div className="mx-auto border rounded-xl p-6 bg-white shadow-sm mt-6">
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Image */}
                        <div className="flex flex-col items-center">
                            <div className="w-90 h-70 rounded-2xl overflow-hidden border">
                                <img
                                    src={singleAstro?.profile_image}
                                    alt="profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex-1 self-center">
                            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                                {singleAstro?.name}
                                {singleAstro?.is_online && (
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                )}
                            </h2>

                            {/* Expertise */}
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="font-semibold  mr-1"> Expertise: </span>{" "}
                                {singleAstro?.expertise?.map((e, i) => (
                                    <span key={i} className="mr-2 capitalize">
                                        {e.replace("_", " ")}
                                    </span>
                                ))}
                            </p>

                            {/* Languages */}
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="font-semibold  mr-1"> Languages: </span> {singleAstro?.languages?.join(", ")}
                            </p>

                            {/* Category */}
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="font-semibold  mr-1">  Category: </span> {singleAstro?.category?.join(", ")}
                            </p>

                            {/* Experience */}
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="font-semibold  mr-1"> Exp: </span> {singleAstro?.experience} Years
                            </p>
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="font-semibold  mr-1">  Rating :</span>
                                <span className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-sm ${star <= Math.round(singleAstro?.rating || 0)
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </span>
                            </p>


                            {/* Price */}
                            <p className="mt-2  font-medium text-sm">
                                ₹ {singleAstro?.chat_price}/min (Chat)
                            </p>
                            <p className="mt-2  font-medium text-sm">
                                ₹ {singleAstro?.call_price}/min (Call)
                            </p>

                            <div className="flex gap-4 mt-4">
                                <button className="border border-green-500 text-green-600 px-6 py-2 rounded-full text-sm">
                                    Start Chat
                                </button>

                                <button className="border border-gray-400 text-gray-500 px-6 py-2 rounded-full text-sm">
                                    Start Call
                                    {!singleAstro?.is_online && (
                                        <span className="block text-xs text-red-500">
                                            Currently offline
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">About me</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Professional astrologer helping people with clarity, guidance and
                            spiritual insight through Vedic astrology.
                        </p>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mx-auto mt-8 mb-10">
                    <div className="border rounded-xl p-4 w-full">
                        <h3 className="font-semibold mb-3">Rating & Reviews</h3>

                        <div className="flex gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-bold">{singleAstro?.rating || 0}</p>
                                <span className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-sm ${star <= Math.round(singleAstro?.rating || 0)
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                    {singleAstro?.rating_count} total
                                </p>
                            </div>

                            <div className="flex-1 space-y-2">
                                {bars.map((b) => (
                                    <div key={b.star} className="flex items-center gap-2">
                                        <span className="text-xs w-3">{b.star}</span>
                                        <div className="flex-1 h-2 bg-gray-100 rounded">
                                            <div className={`h-2 rounded ${b.color} ${b.width}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="w-full mt-4 border rounded-lg p-2 text-sm text-gray-600 flex justify-between items-center">
                            Chat with Assistant?
                            <span>›</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Astrodetails;
