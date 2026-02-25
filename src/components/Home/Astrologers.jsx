
import ComponentHead from "../ComponentHead"
import AstrologerCard from "../AstrologerCard"
import Slider from "./Slider"
import { useSelector } from "react-redux"
import CallCard from "../CallCard"



const Astrologers = () => {

    const { allastrologers, loading } = useSelector((state) => state.astroAuth);
    console.log("all asrto data", allastrologers)
    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }
    return (
       <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100">

            <div className="container">
                <ComponentHead
                    heading="Top Online Astrologers"
                    title="Connect with our expert astrologers for personalized guidance and insights."
                />

                <div className="relative pt-10">
                    <Slider slideCount={3} >
                        {allastrologers
                            .map((astro) => (
                                <CallCard key={astro.id} {...astro} onClick={{}} />
                            ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Astrologers





