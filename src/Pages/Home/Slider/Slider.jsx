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
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://i.ibb.co/0r5M9Ds/saxophone-546303-1280.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://images.unsplash.com/photo-1556379118-7034d926d258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://i.ibb.co/b7gGyDr/mixer-1284507-1280.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://plus.unsplash.com/premium_photo-1681396936141-44fe469faf03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljYWwlMjBpbnN0cnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://i.ibb.co/cgLMc0F/guitar-2925274-1280.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://i.ibb.co/ky1p549/cello-2830670-1280.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] lg:h-[650px] rounded' src="https://t3.ftcdn.net/jpg/00/32/75/40/360_F_32754012_6NwJc4HliyGYFhx4DswKxmVpKTQuCQV8.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;