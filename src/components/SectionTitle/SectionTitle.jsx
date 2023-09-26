import { Slide } from "react-awesome-reveal";

const SectionTitle = ({ heading }) => {
    return (
        <div className="mt-24 mb-12 md:w-4/12 mx-auto text-center">
            <Slide>
                <h3 className="text-4xl uppercase text-yellow border-y-4 border-[#26547C]">{heading}</h3>
            </Slide>
        </div>
    );
};

export default SectionTitle;