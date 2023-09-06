import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import AboutUs from "./AboutUs/AboutUs";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>School of Music | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;