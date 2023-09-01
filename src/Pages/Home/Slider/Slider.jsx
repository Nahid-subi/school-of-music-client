import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://www.yamaha.com/en/musical_instrument_guide/common/images/violin/play_main.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://images.unsplash.com/photo-1556379118-7034d926d258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://plus.unsplash.com/premium_photo-1681396936141-44fe469faf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljYWwlMjBpbnN0cnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;