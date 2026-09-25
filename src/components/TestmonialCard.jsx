import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"

const TestmonialCard = ({ id, name, avatar, rating, service, expertise, message }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const numericRating = Number(rating);
    const starCount = Number.isFinite(numericRating)
        ? Math.max(0, Math.min(5, Math.round(numericRating)))
        : 0;

    const isLong = (message?.length || 0) > 80;

    return (
        <Card key={id} className="w-full rounded-tl-4xl rounded-br-4xl rounded-bl-none rounded-tr-none border shadow-sm">
            <CardContent className="p-5 space-y-4">

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: starCount }, (_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                    ))}
                </div>

                {/* Testimonial Text with Read More */}
                <div>
                    <p className={`text-sm text-gray-900 leading-relaxed whitespace-pre-wrap ${!isExpanded ? "line-clamp-2" : ""}`}>
                        {message}
                    </p>
                    {isLong && (
                        <button
                            type="button"
                            onClick={() => setIsExpanded((prev) => !prev)}
                            className="mt-1 text-xs font-semibold text-amber-600 hover:text-amber-700 hover:underline cursor-pointer transition-colors"
                        >
                            {isExpanded ? "Read less" : "Read more"}
                        </button>
                    )}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-2">
                    {
                        avatar ?
                            <img
                                src={avatar}
                                alt="User"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            :
                            <User className="w-12 h-12 rounded-full object-cover bg-muted p-2" />
                    }
                    <div>
                        <h4 className="text-md! font-semibold">{name}</h4>
                        <span className="text-sm text-muted-foreground">
                            {service}{expertise ? ` - ${expertise}` : ''}
                        </span>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

export default TestmonialCard
