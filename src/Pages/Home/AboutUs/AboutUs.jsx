import CountUp from 'react-countup';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AboutUs = () => {
    return (
        <div>
            <SectionTitle heading="About Us"></SectionTitle>
            <div className="flex flex-wrap justify-center gap-20 text-center items-center">
                <div className="w-36 h-28 rounded bg-red-400 text-white font-bold p-5">
                    <h1><CountUp delay={2} end={500} />k+</h1>
                    <h2>active users</h2>
                </div>
                <div className="w-36 h-28 rounded bg-green-400 text-white font-bold p-5">
                    <h1><CountUp delay={2} end={15} /> min</h1>
                    <h2>Average Class length</h2>
                </div>
                <div className="w-36 h-28 rounded bg-orange-400 text-white font-bold p-5">
                    <h1><CountUp delay={2} end={1000} />+</h1>
                    <h2>Number of songs</h2>
                </div>
                <div className="w-36 h-28 rounded bg-pink-400 text-white font-bold p-5">
                    <h1><CountUp delay={2} end={500} />+</h1>
                    <h2>Number of lessons</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;