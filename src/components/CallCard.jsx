// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Star, IndianRupee, Clock, User } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { IoIosChatbubbles } from "react-icons/io";
// import { IoCall } from "react-icons/io5";

// export default function CallCard({
//     call_price,
//     chat_price,
//     experience,
//     expertise = [],
//     id,
//     is_online,
//     languages = [],
//     name,
//     profile_image,
//     rating = 0,
//     rating_count = 0,
//     total_call_duration_sec = 0,
//     total_chat_duration_sec = 0,
//     username
// }) {
//     const totalOrders = total_call_duration_sec + total_chat_duration_sec;
//     const displayRating = Math.min(Math.max(Math.round(rating), 0), 5);

//     return (
//         <Card className="w-full max-w-md mx-auto hover:shadow-lg rounded-br-4xl rounded-bl-0! rounded-tl-4xl rounded-tr-0!

//         transition-shadow duration-200">
//             <CardContent className="p-4">
//                 <div className="flex space-x-1">
//                     {/* Profile Section */}
//                     <div className="flex flex-col items-center shrink-0">
//                         <div className="relative mb-2">
//                             <Link to={`/astro-details/${id}`}>
//                                 {profile_image ? (
//                                     <img
//                                         src={profile_image}
//                                         alt={name}
//                                         className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
//                                     />
//                                 ) : (
//                                     <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
//                                         <User className="w-8 h-8 text-black" />
//                                     </div>
//                                 )}
//                             </Link>
//                             {is_online && (
//                                 <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
//                             )}
//                         </div>

//                         {/* Rating Stars */}
//                         <div className="flex gap-0.5 mb-1">
//                             {[...Array(5)].map((_, i) => (
//                                 <Star
//                                     key={i}
//                                     className={`w-3.5 h-3.5 ${i < displayRating
//                                         ? 'fill-yellow-400 text-yellow-400'
//                                         : 'fill-gray-200 text-gray-200'
//                                         }`}
//                                 />
//                             ))}
//                         </div>

//                         {/* Rating Count */}
//                         {rating_count > 0 && (
//                             <div className="text-xs text-gray-500 mb-1">
//                                 ({rating_count} reviews)
//                             </div>
//                         )}

//                         {/* Orders */}
//                         <div className="text-xs text-gray-600 font-medium">
//                             {totalOrders} orders
//                         </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="flex-1 min-w-0">
//                         {/* Name and Status */}
//                         <div className="flex items-start justify-between mb-2">
//                             <div className="flex flex-col ">
//                                 <Link to={`/astro-details/${id}`} className="hover:underline">
//                                     <h4 className="font-semibold text-black text-lg  truncate">
//                                         {name}
//                                     </h4>
//                                 </Link>
//                                 <p className="text-xs text-gray-500">@{username}</p>
//                             </div>
//                             {is_online && (
//                                 <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
//                                     Online
//                                 </span>
//                             )}
//                         </div>

//                         {/* Expertise */}
//                         {expertise.length > 0 && (
//                             <p className="text-sm!   mb-1 line-clamp-1  ">
//                                 {expertise.join('\n •  ')}
//                             </p>
//                         )}

//                         {/* Languages */}
//                         {languages.length > 0 && (
//                             <p className="text-xs text-gray-600 mb-1 ">
//                                 {languages.join(', ')}
//                             </p>
//                         )}

//                         {/* Experience */}
//                         <div className="flex items-center gap-1 text-xs! text-gray-600 mb-3">
//                             <Clock className="w-4 h-4" />
//                             <span className="text-xs! ">Experience: {experience} {experience === 1 ? 'year' : 'years'}</span>
//                         </div>

//                         {/* Pricing and Actions */}
//                         <div className="flex items-end justify-between gap-1">
//                             {/* Prices */}
//                             <div className="flex flex-col ">
//                                 <div className="flex  items-center gap-1 ">
//                                     <div className="flex items-center text-green-600 font-semibold">
//                                         <IndianRupee className="w-4 h-4" />
//                                         <span>{call_price}</span>
//                                         <span className="text-xs">/min</span>
//                                     </div>
//                                     <span className="text-xs text-gray-500">Call</span>
//                                 </div>
//                                 <div className="flex  items-center gap-1 ">
//                                     <div className="flex items-center text-blue-600 font-semibold">
//                                         <IndianRupee className="w-4 h-4" />
//                                         <span>{chat_price}</span>
//                                         <span className="text-xs">/min</span>
//                                     </div>
//                                     <span className="text-xs text-gray-500">Chat</span>
//                                 </div>
//                             </div>

//                             {/* Action Buttons */}
//                             <div className="flex gap-2">
//                                 <Button
//                                     size="sm"
//                                     disabled={!is_online}
//                                     className="bg-green-600 hover:bg-green-700 text-white rounded-full h-9 w-9 p-0 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     <IoCall className="w-4 h-4" />
//                                 </Button>
//                                 <Button
//                                     size="sm"
//                                     disabled={!is_online}
//                                     className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full h-9 w-9 p-0 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     <IoIosChatbubbles className="w-4 h-4" />
//                                 </Button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// }

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Clock,
  User,
  Users,
  Phone,
  MessageCircle,
  Languages,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IoIosChatbubbles } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export default function CallCard({
  call_price,
  chat_price,
  experience,
  expertise = [],
  id,
  is_online,
  languages = [],
  name,
  profile_image,
  rating = 0,
  rating_count = 0,
  total_call_duration_sec = 0,
  total_chat_duration_sec = 0,
  username,
}) {
  const totalOrders = total_call_duration_sec + total_chat_duration_sec;
  const displayRating = rating.toFixed(1);

  // Format price
  const formatPrice = (price) => {
    if (price === 0) return "Free";
    return `₹${price}/min`;
  };

  // capitalize the first letter of language
  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  //in experties the deta comes from the backend is including underscores so this function remove the underscores and also capitalize the first letter
  const formatExpertise = (exp) => {
    return exp
      .replace(/_/g, "-") // replace underscore with hyphen
      .split(/[\s-]+/) // split by space or hyphen
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <Card className="w-full max-w-md mx-auto h-full hover:shadow-xl transition-shadow duration-300 rounded-br-4xl rounded-bl-0! rounded-tl-4xl rounded-tr-0! bg-white border-0">
      <CardContent className="p-5">
        <div className="flex gap-4">
          {/* Left Column - Profile & Stats */}
          <div className="flex flex-col items-center space-y-2 shrink-0 w-24">
            {/* Profile Image with Online/offline Indicator */}
            <div className="relative">
              <Link to={`/astro-details/${id}`}>
                {profile_image ? (
                  <img
                    src={profile_image}
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                )}
              </Link>

              

              <div className="flex items-center gap-1.5 mt-1 mb-1 ml-2">
        <div className={`w-2.5 h-2.5 rounded-full ${is_online ? 'bg-green-500' : 'bg-red-500'}`} />
        <span className={`text-xs font-medium ${is_online ? 'text-green-600' : 'text-red-600'}`}>
            {is_online ? 'Online' : 'Offline'}
        </span>
    </div>


            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm font-medium">
              <Star
                className={`w-4 h-4 ${rating > 0 ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
              />
              <span>{displayRating}</span>
              <span className="text-xs text-gray-500">({rating_count})</span>
            </div>

            {/* Total Orders */}
            {/* <div className="flex items-center gap-1 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>{totalOrders}</span>
            </div> */}
          </div>

          {/* Right Column - Details */}
          <div className="flex-1 space-y-3">
            {/* Name & Username */}
            <div>
              <Link to={`/astro-details/${id}`} className="hover:underline">
                <h4 className="font-semibold text-lg text-gray-800 leading-tight">
                  <span className="line-clamp-1"> {name}</span>
                 
                </h4>
              </Link>
              <p className="text-xs text-gray-500">@{username}</p>
            </div>

            {/* Languages */}
            {languages.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Languages className="w-4 h-4 text-gray-500" />
                <span className="line-clamp-1" >
                  {languages.map((lang) => capitalize(lang)).join(", ")}
                </span>
              </div>
            )}

            {/* Experience */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>
                {experience} {experience === 1 ? "Year" : "Years"}
              </span>
            </div>

            {/* Expertise */}
            {expertise.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4 text-gray-500" />
                <span className="line-clamp-1">
                  {expertise.map((exp) => formatExpertise(exp)).join(", ")}
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Pricing - Two Rows Like Screenshot */}
        <div className="bg-gray-50 p-3 rounded-lg W-[50%] space-y-2 mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Call</span>
            </div>
            <span className="text-sm font-semibold text-green-600">
              {formatPrice(call_price)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Chat</span>
            </div>
            <span className="text-sm font-semibold text-blue-600">
              {formatPrice(chat_price)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 justify-between">
          <Button
            size="sm"
            disabled={!is_online}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-full h-9 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoCall className="w-4 h-4 mr-1" />
            Call
          </Button>
          <Button
            size="sm"
            disabled={!is_online}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full h-9 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoIosChatbubbles className="w-4 h-4 mr-1" />
            Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
