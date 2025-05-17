import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function App() {
  return (
    <div className="bg-tonelight1">
      {/* NAVBAR */}

      <nav className="flex items-center justify-around">
        <div className="flex items-center gap-2 text-xl m-2">
          <img
            src="/logo2 (2).png"
            alt="Description of image"
            className="w-12 "
          />
          <h1 className="font-bold kanit-medium">The One Math Academy</h1>
        </div>
        {/* <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-25 hidden sm:block">
          <h5 className="kanit-medium">
            คอร์สคณิตศาสตร์สำหรับเตรียมสอบคณิต A-Level 1
          </h5>
          <h5 className="kanit-medium">สอนโดย อิงฟ้า อัญทิชา</h5>
        </div>
        <a
          href="#"
          className="kanit-medium text-white bg-tonedark2 pt-2 pb-2 pr-4 pl-4 rounded-lg text-xl hidden sm:block"
        >
          สมัครเรียน
        </a> */}
      </nav>

      {/* MASK IMAGE */}
      {/* <img src="/Mask.png" alt="Description of image" className="fixed top-0 left-1/2 sm:w-full md:w-5/6 transform -translate-x-1/2 object-contain z-[-1] mt-12 md:m-0" /> */}

      {/* LABEL SECTION */}
      <div
        className="h-full flex flex-col justify-center items-center relative bg-cover bg-center"
        style={{ backgroundImage: "url('/Mask.png')" }}
      >
        <h1 className="font-bold text-3xl md:text-6xl  text-center kanit-bold mt-20">
          ไม่เก่งเลข
        </h1>
        <h1 className="font-bold text-3xl md:text-6xl text-center kanit-bold">
          =
        </h1>
        {/* <h1 className='font-bold text-2xl sm:text-base md:text-7xl text-center kanit-bold mb-4 md:mb-20'>อนิเมชันคณิตศาสตร์</h1> */}
        <h1 className="font-semibold text-3xl md:text-6xl text-center kanit-semibold">
          หมดสิทธิ์สอบติดมหาลัย?
        </h1>
        <div className="text-center my-10">
          <p>ความจริงที่น่าตกใจ</p>
          <p>เด็ก ม.ปลาย “ส่วนใหญ่” สอบไม่ติด เพราะ “คะแนนคณิต”</p>
          <p>แต่น้องไม่จำเป็นต้องเป็นหนึ่งในนั้น</p>
        </div>
        <p className="font-semibold text-2xl md:text-2xl text-center kanit-semibold underline">
          คอร์สคณิตศาสตร์ประยุกต์ 1
        </p>
        <div className="bg-tonelight1 w-full flex justify-center p-4">
          <a
            href="https://forms.gle/gfzxk6texJNjzvBj7"
            target="_blank"
            className="kanit-medium text-white bg-tonedark1 pt-2 pb-2 pr-4 pl-4 rounded-lg text-lg md:text-2xl"
          >
            สมัครเรียนวันนี้เลย
          </a>
        </div>
      </div>
      <div className="text-center mt-10 mx-a">
        <p>ถ้าไม่เก่งคณิต → ต้องเริ่มจากพื้นฐาน</p>
        <div className="my-4">
          <div className="flex justify-center items-center gap-2 ">
            {/* <div className="bg-black h-1 w-1 rounded-full"></div> */}
            <p>อย่ากระโดดตะลุยโจทย์ทันที</p>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            {/* <div className="bg-black h-1 w-1 rounded-full"></div> */}
            <p>เรียนใหม่ตั้งแต่พีชคณิตถึงตรีโกณ</p>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            {/* <div className="bg-black h-1 w-1 rounded-full"></div> */}
            <p>ทบทวนทุกสูตรสำคัญที่ออกสอบบ่อย</p>
          </div>
        </div>
        <p>พื้นฐานแน่น = ต่อยอดได้ไกล</p>
      </div>
      {/* คอร์สนี้ได้อะไรบ้าง */}
      <div>
        <h1 className="text-center m-5 mt-10 text-3xl kanit-semibold">
          คอร์สนี้ได้อะไรบ้าง ?
        </h1>
        <div
          className="relative bg-cover bg-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          style={{ backgroundImage: "url('/bg-22.png')" }}
        >
          {/* CARD */}
          <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
            <div className="flex items-center gap-2">
              <img src="/Frame (1).png" alt="Description1" className="w-7" />
              <h2 className="kanit-semibold">ปรับพื้นฐานก่อนเรียน</h2>
            </div>
            <p className="kanit-regular">
              ถ้าน้องพื้นฐานน้อยกลัวเรียนไม่รู้เรื่อง ไม่ต้องกังวล พี่ปูพื้นฐานใหม่ให้หมด ตาม 13 บทที่จำเป็นที่ต้องรู้ก่อนเริ่มเรียน</p>
            <img src="image 25.png" />
          </div>
          
          <div className="justify-items-center flex flex-col justify-between bg-white p-4 rounded-3xl bg-opacity-60 m-4">
            <div>
              <div className="flex items-center justify-center gap-2">
                <img src="/Frame (5).png" alt="Description1" className="w-7" />
                <h2 className="kanit-semibold">เรียนได้จนกว่าจะสอบติด</h2>
              </div>
              <p className="kanit-regular">
                ไม่มีอายุคอร์ส พี่จะส่งฟอร์มให้ยืนยันตัวตนทุกๆ 6 เดือน เช่นถ้าตอนนี้อยู่ม.4 ก็สามารถอยู่ในคอร์สได้จบจนม.6 เลยย
              </p>
            </div>
            <img src="image 21.png" />
          </div>
          <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
            <div className="flex items-center gap-2">
              <img src="/Frame (5).png" alt="Description1" className="w-7" />
              <h2 className="kanit-semibold">เอกสารการสอน(PDF)</h2>
            </div>
            <p className="kanit-regular">
              ได้รับครบทั้งพื้นฐาน เนื้อหาคณิตศาสตร์ ม.ปลาย
              ซึ่งจะมีการบ้านให้ฝึกทำ และตะลุยโจทย์ คณิตศาสตร์ประยุกต์ 1
            </p>
            <img src="image 22.png" />
          </div>
          <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
            <div className="flex items-center gap-2">
              <img src="/Frame (3).png" alt="Description1" className="w-7" />
              <h2 className="kanit-semibold">ตะลุยโจทย์ข้อสอบเก่า A-Level 1</h2>
            </div>
            <p className="kanit-regular">
              สอนเทคนิคการแก้โจทย์รูปแบบที่เหมาะสมสำหรับโจทย์แต่ละข้อ เพื่อให้น้องทำโจทย์ได้แม่นยำและรวดเร็วที่สุด</p>
          </div>
          <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
            <div className="flex items-center gap-2">
              <img src="/Frame (2).png" alt="Description1" className="w-7" />
              <h2 className="kanit-semibold">เรียนเนื้อหาม.ปลายครบ 15 บท</h2>
            </div>
            <p className="kanit-regular">
              เรียนตั้งแต่เนื้อหา ไปจนถึง ตะลุยโจทย์ เรียนที่โรงเรียนไม่เข้าใจ ไม่ต้องกังวล พี่สอนใหม่หมด
            </p>
          </div>
          <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
            <div className="flex items-center gap-2">
              <img src="/Frame (1).png" alt="Description1" className="w-7" />
              <h2 className="kanit-semibold">การบ้านท้ายบท ครบ 15 บท</h2>
            </div>
            <p className="kanit-regular">
              ในแต่ละน้องจะได้ฝึกทำโจทย์ระดับความยากคณิตศาสตร์ประยุกต์ 1 และยังมีโจทย์ปีเก่าๆที่พี่คัดมาแล้วว่า "ควรฝึก"</p>
          </div>
          <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
            <div className="flex items-center gap-2">
              <img src="/Frame.png" alt="Description1" className="w-7" />
              <h2 className="kanit-semibold">ปรึกษาได้ตลอดการเรียน</h2>
            </div>
            <p className="kanit-regular">
              ทำโจทย์ไม่เป็น เริ่มต้นไม่ถูก กังวลเรื่องการวางแผนเข้ามหาลัย ปรึกษาพี่ได้โดยตรง พี่จะทำให้น้องไปต่อได้เอง "อยู่ข้างๆจนกว่าจะสอบติด"</p>
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
      <div className="flex flex-col justify-center items-center">
          <a
            href="https://forms.gle/gfzxk6texJNjzvBj7"
            target="_blank"
            className="kanit-medium text-white bg-tonedark1 pt-2 m-2 pb-2 pr-4 pl-4 rounded-lg text-lg md:text-2xl"
          >
            สมัครเรียนวันนี้เลย
          </a>
        </div>
      {/* ผู้สอน */}
      <div>
        <h1 className="text-center m-5 mt-10 text-3xl kanit-semibold">
          ผู้สอน อิงฟ้า อัญทิชา
        </h1>
        <img
          src="/Profile_image 1.png"
          alt="Description of image"
          className="w-10/12 max-w-[400px] m-auto border-spacing-2 border-green-100 mb-4"
        />
        <div className="bg-white p-4 rounded-3xl bg-opacity-60 text-left">
          <div className="text-center">
            <h1 className="kanit-semibold text-xl">ประสบการณ์สอน</h1>
          </div>
          <div className="mx-auto md:w-max">
            <div className="flex items-center gap-2">
              <div className="bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                    สอนนักศึกษาคณะคณิตศาสตร์ประกันภัย 
                </p>
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                    มหาลัยวิทยาลัยมหิดล 
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  สอนนักเรียนมัธยมศึกษา ม.ปลาย
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div>
            <h1 className="kanit-semibold text-xl text-center">
              ประวัติผู้สอน
            </h1>
            <div className="mx-auto md:w-max">
              
              <div className="flex items-center gap-2">
                <div className="bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  จบการศึกษา คณะเทคโนโลยีสารสนเทศ
                </p>
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  แขนงวิศกรรมซอฟแวร์ ลาดกระบัง (เกียรตินิยม) 
                </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  รางวัลเหรียญทองฟิสิกส์สัปประยุทธ์
                </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  สอบติดคณะบัญชีธรรมศาสตร์
                </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  รางวัลรองชนะเลิศอันดับ 1 แข่งขันด้วยโปรเจคการทดสอบประสิทธิภาพ
                  ของระบบซื้อขายพันธบัตร ของธนาคารกสิกรไทย
                </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  ปัจจุบันทำงานในตำแหน่ง
                </p>
                <p className="kanit-regularw-full flex justify-items-center items-center ">
                  Performance Test Engineer
                </p>
                </div>
              </div>
        
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://forms.gle/gfzxk6texJNjzvBj7"
            target="_blank"
            className="kanit-medium text-white bg-tonedark1 pt-2 m-2 pb-2 pr-4 pl-4 rounded-lg text-lg md:text-2xl"
          >
            สมัครเรียนวันนี้เลย
          </a>
        </div>
      </div>
      {/* ขอบคุณความคิดเห็นจากน้องๆและพี่ๆ */}
      {/* <div> */}
      {/* <h2 className="text-center m-5 mt-10 text-3xl kanit-semibold">
          ความคิดเห็นการสอน
        </h2> */}
      {/* <img src="/image 3.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/> */}
      {/* <img src="/image 3.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/> */}
      {/* <Swiper
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
          <SwiperSlide>
            <img
              src="/IMG_2745.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/IMG_3129.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image 3.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image 5.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image 6.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image 7.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image 8.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image 9.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/image 10.png"
              alt="Description of image"
              className="w-10/12 rounded-lg m-auto"
            />
          </SwiperSlide>
        </Swiper> */}
      {/* </div> */}

      {/* สมัครคอร์สเรียน */}
      <div className="px-2">
        <h1 className="text-center m-5 mt-10 text-3xl kanit-semibold">
          สมัครคอร์สเรียน
        </h1>
        <div className="bg-white w-full max-w-[550px] p-4 mx-auto rounded-md">
          <p className="font-semibold text-xl">
            ถ้าน้องจริงจัง อยากเป็นคนหนึ่งที่ต้นทุนความรู้น้อย
            แต่สอบติดมหาลัยดัง
          </p>
          <p className="my-4">
            ให้พี่ช่วยน้อง เพราะพี่เริ่มจากเป็นเด็กโรงเรียนในสามจังหวัดชายแดนใต้
            จนสอบติดมหาลัยชื่อดังที่ได้ขึ้นชื่อว่าเข้ายาก พี่เข้าใจน้องที่สุด
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaRegCircleCheck />
              <p>เรียนได้จนกว่าจะสอบติด</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCircleCheck />
              <p>ปรึกษาได้ตลอดเวลาเรียน</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCircleCheck />
              <p>ตะลุยโจทย์คณิตศาสตร์ A-Level 1</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCircleCheck />
              <p>การบ้านท้ายบท</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCircleCheck />
              <p>เรียนเนื้อหาครบทุกบทม.ปลาย</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCircleCheck />
              <p>ปรับพื้นฐานก่อนเรียน ด้วย 13 บทสำคัญ</p>
            </div>
          </div>

          <div className="md:flex justify-between gap-4 mt-4">
            <p className="text-3xl kanit-semibold bg-tonelight1 p-4 rounded-md self-center text-center">
              ฿1590
            </p>
            <div className="font-semibold text-xl mt-4 md:mt-0">
              <p
              
              
              >นี่คือโอกาสที่น้อง ๆ จะได้คะแนนคณิตสูง</p>
              <div className="kanit-medium text-white bg-tonedark2 pt-2 m-2 pb-2 pr-4 pl-4 rounded-lg text-lg md:text-2xl text-center">
                <a href="https://forms.gle/gfzxk6texJNjzvBj7" target="_blank">
                  สมัครเรียนวันนี้เลย !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="px-4 md:px-20 h-[600px] flex items-center justify-center">
        <div className="my-10 rounded-md bg-white p-4 w-full">
          <p className="font-semibold text-xl">The One Math Academy</p>
          <div className="md:flex md:justify-between items-center">
          <div className="flex gap-4 items-center text-[#8987A1]">
            <CiHeart />
            <p>INGFAH ANTHICHA</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                <FaLinkedin  className="text-2xl hover:text-blue-500 transition-colors duration-300" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
