import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function App() {
    return ( 
        <div className='bg-tonelight1'>
            {/* NAVBAR */}
            


            <nav className='flex items-center justify-around'>
                <div className='flex items-center gap-2 text-xl m-2'>
                    <img src="/logo2 (2).png" alt="Description of image" className='w-12 '/>
                    <h1 className='font-bold kanit-medium'>The One Math Academy</h1>
                </div>
                <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-25 hidden sm:block'>
                    <h5 className='kanit-medium'>คอร์สคณิตศาสตร์สำหรับเตรียมสอบคณิต A-Level 1</h5>
                    <h5 className='kanit-medium'>สอนโดย อิงฟ้า อัญทิชา</h5>
                </div>
                <a href='#' className='kanit-medium text-white bg-tonedark2 pt-2 pb-2 pr-4 pl-4 rounded-lg text-xl hidden sm:block'>สมัครเรียน</a>
            </nav>
            
            {/* MASK IMAGE */}
            {/* <img src="/Mask.png" alt="Description of image" className="fixed top-0 left-1/2 sm:w-full md:w-5/6 transform -translate-x-1/2 object-contain z-[-1] mt-12 md:m-0" /> */}


            {/* LABEL SECTION */}
            <div className="h-full flex flex-col justify-center items-center sm:m-10 relative bg-cover bg-center" style={{ backgroundImage: "url('/Mask.png')" }}>
                <h1 className='font-bold text-2xl sm:text-base md:text-7xl text-center kanit-bold mb-4 md:mb-10 mt-20'>ช่วยให้น้องสอบติดมหาลัยชื่อดัง</h1>
                <h1 className='font-bold text-2xl sm:text-base md:text-7xl text-center kanit-bold mb-4 md:mb-10'>ด้วยการสอน ตะลุยโจทย์ ที่ครอบคลุม</h1>
                {/* <h1 className='font-bold text-2xl sm:text-base md:text-7xl text-center kanit-bold mb-4 md:mb-20'>อนิเมชันคณิตศาสตร์</h1> */}
                <h1 className='font-semibold text-2xl sm:text-base md:text-7xl text-center kanit-semibold pt-5'>คอร์สคณิตศาสตร์ A-Level 1</h1>
                <a href='#' className='kanit-medium text-white bg-tonedark1 pt-2 mt-10 pb-2 pr-4 pl-4 rounded-lg text-lg md:text-2xl'>สมัครเรียนวันนี้เลย</a>
            </div>
            {/* คอร์สนี้ได้อะไรบ้าง */}
            <div>
                <h1 className='text-center m-5 mt-10 text-3xl kanit-semibold'>คอร์สนี้ได้อะไรบ้าง ?</h1>
                <div className='relative bg-cover bg-center' style={{ backgroundImage: "url('/bg-22.png')" }}>
                    {/* CARD */}
                    <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4'>
                        <div className='flex items-center gap-2'>
                            <img src="/Frame (1).png" alt="Description1" className='w-7'/>
                            <h2 className='kanit-semibold'>ปรับพื้นฐานก่อนเรียน</h2>
                        </div>
                        <p className='kanit-regular'>เนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาดเนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาด</p>
                    </div>
                    <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4'>
                        <div className='flex items-center gap-2'>
                            <img src="/Frame (2).png" alt="Description1" className='w-7'/>
                            <h2 className='kanit-semibold'>เรียนเนื้อหาม.ปลายครบ 15 บท</h2>
                        </div>
                        <p className='kanit-regular'>เนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาดเนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาด</p>
                    </div>
                    <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4'>
                        <div className='flex items-center gap-2'>
                            <img src="/Frame (3).png" alt="Description1" className='w-7'/>
                            <h2 className='kanit-semibold'>ตะลุยโจทย์ข้อสอบเก่า A-Level</h2>
                        </div>
                        <p className='kanit-regular'>เนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาดเนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาด</p>
                    </div>
                    <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4'>
                        <div className='flex items-center gap-2'>
                            <img src="/Frame (1).png" alt="Description1" className='w-7'/>
                            <h2 className='kanit-semibold'>การบ้านท้ายบท ครบ 15 บท</h2>
                        </div>
                        <p className='kanit-regular'>เนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาดเนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาด</p>
                    </div>
                    <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4'>
                        <div className='flex items-center gap-2'>
                            <img src="/Frame.png" alt="Description1" className='w-7'/>
                            <h2 className='kanit-semibold'>ปรึกษาได้ตลอดการเรียน</h2>
                        </div>
                        <p className='kanit-regular'>เนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาดเนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาด</p>
                    </div>
                    <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4'>
                        <div className='flex items-center gap-2'>
                            <img src="/Frame (5).png" alt="Description1" className='w-7'/>
                            <h2 className='kanit-semibold'>Math Animation</h2>
                        </div>
                        <p className='kanit-regular'>เนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาดเนื้อหาจะถูกซ่อนในหน้าจอขนาดเล็กและจะแสดงในหน้าจอขนาด</p>
                    </div>
                </div>



                <style jsx>{`
        /* เพิ่มแอนิเมชันสำหรับพื้นหลัง */
        @keyframes rotateBackground {
            0% {
                background-position: center top;
            }
            100% {
                background-position: 100% 100%;
            }
        }

        .bg-cover {
            animation: rotateBackground 30s infinite linear;
        }
    `}</style>

            </div>
            {/* ผู้สอน */}
            <div>
                <h1 className='text-center m-5 mt-10 text-3xl kanit-semibold'>ผู้สอน อิงฟ้า อัญทิชา</h1>
                <img src="/Profile_image 1.png" alt="Description of image" className='w-10/12 m-auto border-spacing-2 border-green-100'/>
                <div className='justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4'>
                    <div className='flex items-center gap-2'>
                        <h1 className='kanit-semibold text-xl'>ประสบการณ์สอน</h1>
                    </div>
                    <p className='kanit-regularw-full flex justify-items-center items-center '>สอนนักศึกษามหาลัยวิทยาลัยมหิดล คณะคณิตศาสตร์ประกันภัย</p>
                    <p className='kanit-regular'>สอนนักเรียนมัธยมศึกษา ม.ปลาย</p>
                    <br></br>
                    <div className='flex items-center gap-2'>
                        <h1 className='kanit-semibold text-xl'>ประวัติผู้สอน</h1>
                    </div>
                    <p className='kanit-regular'>รางวัลเหรียญทองฟิสิกส์สัปประยุทธ์</p>
                    <p className='kanit-regular'>สอบติดคณะบัญชีธรรมศาสตร์ และ คณะไอที ลาดกระบัง</p>
                    <p className='kanit-regular'>รางวัลรองชนะเลิศอันดับ 1 แข่งขันด้วยโปรเจคการทดสอบประสิทธิภาพ ของระบบซื้อขายพันธบัตร ของธนาคารกสิกรไทย</p>
                    <p className='kanit-regular'>ปัจจุบันทำงานในตำแหน่งวิศกรรมการทดสอบประสิทธิภาพของระบบซอฟแวร์</p>
                    
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <a href='#' className='kanit-medium text-white bg-tonedark1 pt-2 m-2 pb-2 pr-4 pl-4 rounded-lg text-lg md:text-2xl'>สมัครเรียนวันนี้เลย</a>
                </div>
            </div>
            {/* ขอบคุณความคิดเห็นจากน้องๆและพี่ๆ */}
            <div>
            <h2 className='text-center m-5 mt-10 text-3xl kanit-semibold'>
ความคิดเห็นการสอน</h2>
            {/* <img src="/image 3.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/> */}
            {/* <img src="/image 3.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/> */}
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
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="/IMG_2745.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/IMG_3129.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/image 3.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/image 5.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/image 6.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/image 7.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/image 8.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/image 9.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
                <SwiperSlide><img src="/image 10.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/></SwiperSlide>
            </Swiper>
            </div>

        </div>
    );
}

export default App;