import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function App() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth > 1024) {
        setBgImage(
          "linear-gradient(to top right, #00ADFE, #9403FD, #FF12DC, #FFB912)"
        );
      } else {
        setBgImage("url('/Mask.png')");
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);
  return (
    <div className="bg-tonelight1">
      {/* NAVBAR */}

      <nav className="flex items-center justify-around">
        <div className="flex items-center gap-2 text-xl m-2">
          <img
            src="/logo2 (2).png"
            alt="Description of image"
            className="w-12 animate-spin-slow"
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
        className="h-full flex flex-col justify-center items-center relative bg-cover bg-center p-12"
        style={{ backgroundImage: bgImage }}
      >
        <h1 className="font-bold text-3xl md:text-6xl  text-center kanit-bold">
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
        <div className=" w-full flex justify-center pt-4">
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
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-22.png')" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-[1200px] mx-auto">
            {/* CARD */}
            <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
              <div className="flex items-center gap-2">
                <img src="/Frame (1).png" alt="Description1" className="w-7" />
                <h2 className="kanit-semibold text-xl">ปรับพื้นฐานก่อนเรียน</h2>
              </div>
              <p className="kanit-regular">
                ถ้าน้องพื้นฐานน้อยกลัวเรียนไม่รู้เรื่อง ไม่ต้องกังวล
                พี่ปูพื้นฐานใหม่ให้หมด ตาม 13
                บทที่จำเป็นที่ต้องรู้ก่อนเริ่มเรียน
              </p>
              <img src="image 25.png" className="mt-4" />
            </div>

            <div className="justify-items-center flex flex-col bg-white p-4 rounded-3xl bg-opacity-60 m-4">
              <div>
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Frame (5).png"
                    alt="Description1"
                    className="w-7"
                  />
                  <h2 className="kanit-semibold text-xl">
                    เรียนได้จนกว่าจะสอบติด
                  </h2>
                </div>
                <p className="kanit-regular">
                  ไม่มีอายุคอร์ส พี่จะส่งฟอร์มให้ยืนยันตัวตนทุกๆ 6 เดือน
                  เช่นถ้าตอนนี้อยู่ม.4 ก็สามารถอยู่ในคอร์สได้จบจนม.6 เลยย
                </p>
              </div>
              <img src="image 21.png" className="m-auto" />
            </div>
            <div className="justify-items-center flex flex-col bg-white p-4 rounded-3xl bg-opacity-60 m-4">
              <div>
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Frame (5).png"
                    alt="Description1"
                    className="w-7"
                  />
                  <h2 className="kanit-semibold text-xl">เอกสารการสอน(PDF)</h2>
                </div>
                <p className="kanit-regular">
                  ได้รับครบทั้งพื้นฐาน เนื้อหาคณิตศาสตร์ ม.ปลาย
                  ซึ่งจะมีการบ้านให้ฝึกทำ และตะลุยโจทย์ คณิตศาสตร์ประยุกต์ 1
                </p>
              </div>
              <img src="image 22.png" className="m-auto" />
            </div>
            <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
              <div className="flex items-center gap-2">
                <img src="/Frame (3).png" alt="Description1" className="w-7" />
                <h2 className="kanit-semibold text-xl">
                  ตะลุยโจทย์ข้อสอบเก่า A-Level 1
                </h2>
              </div>
              <p className="kanit-regular">
                สอนเทคนิคการแก้โจทย์รูปแบบที่เหมาะสมสำหรับโจทย์แต่ละข้อ
                เพื่อให้น้องทำโจทย์ได้แม่นยำและรวดเร็วที่สุด
              </p>
            </div>
            <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
              <div className="flex items-center gap-2">
                <img src="/Frame (2).png" alt="Description1" className="w-7" />
                <h2 className="kanit-semibold text-xl">
                  เรียนเนื้อหาม.ปลายครบ 15 บท
                </h2>
              </div>
              <p className="kanit-regular">
                เรียนตั้งแต่เนื้อหา ไปจนถึง ตะลุยโจทย์ เรียนที่โรงเรียนไม่เข้าใจ
                ไม่ต้องกังวล พี่สอนใหม่หมด
              </p>
            </div>
            <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
              <div className="flex items-center gap-2">
                <img src="/Frame (1).png" alt="Description1" className="w-7" />
                <h2 className="kanit-semibold text-xl">
                  การบ้านท้ายบท ครบ 15 บท
                </h2>
              </div>
              <p className="kanit-regular">
                ในแต่ละน้องจะได้ฝึกทำโจทย์ระดับความยากคณิตศาสตร์ประยุกต์ 1
                และยังมีโจทย์ปีเก่าๆที่พี่คัดมาแล้วว่า "ควรฝึก"
              </p>
            </div>
            <div className="justify-items-center bg-white p-4 rounded-3xl bg-opacity-60 m-4">
              <div className="flex items-center gap-2">
                <img src="/Frame.png" alt="Description1" className="w-7" />
                <h2 className="kanit-semibold text-xl">
                  ปรึกษาได้ตลอดการเรียน
                </h2>
              </div>
              <p className="kanit-regular">
                ทำโจทย์ไม่เป็น เริ่มต้นไม่ถูก กังวลเรื่องการวางแผนเข้ามหาลัย
                ปรึกษาพี่ได้โดยตรง พี่จะทำให้น้องไปต่อได้เอง
                "อยู่ข้างๆจนกว่าจะสอบติด"
              </p>
            </div>
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
        <div className="block lg:flex justify-center mx-auto max-w-[1200px]">
          <img
            src="/Profile_image 1.png"
            alt="Description of image"
            className="max-w-[400px] border-spacing-2 border-green-100 mb-4 lg:mb-0 mx-auto lg:mx-0 lg:mr-4"
          />
          <div className="bg-white p-4 rounded-3xl bg-opacity-60">
            <div className="text-center">
              <h1 className="kanit-semibold text-xl">ประสบการณ์สอน</h1>
            </div>
            <div className="flex justify-center bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
              <ul className="list-disc list-inside text-center space-y-4">
                <li>สอนนักศึกษาคณะคณิตศาสตร์ประกันภัย มหาลัยวิทยาลัยมหิดล</li>
                <li>สอนนักเรียนมัธยมศึกษา ม.ปลาย</li>
              </ul>
            </div>
            <br></br>
            <div>
              <h1 className="kanit-semibold text-xl text-center">
                ประวัติผู้สอน
              </h1>
              <div className="flex justify-center bg-tonelight1 w-full max-w-[550px] p-4 mx-auto rounded-md">
                <div>
                  <ul className="list-disc list-inside text-center space-y-4">
                    <li>
                      จบการศึกษา คณะเทคโนโลยีสารสนเทศ แขนงวิศกรรมซอฟแวร์
                      ลาดกระบัง (เกียรตินิยม)
                    </li>
                    <li>รางวัลเหรียญทองฟิสิกส์สัปประยุทธ์</li>
                    <li>สอบติดคณะบัญชีธรรมศาสตร์</li>
                    <li>
                      รางวัลรองชนะเลิศอันดับ 1
                      แข่งขันด้วยโปรเจคการทดสอบประสิทธิภาพ
                      ของระบบซื้อขายพันธบัตร ของธนาคารกสิกรไทย
                    </li>
                    <li>ปัจจุบันทำงานในตำแหน่ง Performance Test Engineer</li>
                  </ul>
                  <div className="grid grid-cols-4 gap-4 px-4 mx-auto mt-4">
                    <img
                      src="it-kmitl.png"
                      className="w-full h-auto object-cover"
                      alt="Image 1"
                    />
                    <img
                      src="image.png"
                      className="w-full h-auto object-cover"
                      alt="Image 2"
                    />
                    <img
                      src="logo01.png"
                      className="w-full h-auto object-cover"
                      alt="Image 3"
                    />
                    <img
                      src="0.png"
                      className="w-full h-auto object-cover"
                      alt="Image 4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
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
      <h2 className="text-center m-5 mt-10 text-3xl kanit-semibold">
        ความคิดเห็นการสอน
      </h2>
      {/* <img src="/image 3.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/> */}
      {/* <img src="/image 3.png" alt="Description of image" className='w-10/12 rounded-lg m-auto'/> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mx-auto max-w-[1200px]">
        <img
          src="review1.png"
          className="w-full h-auto object-cover"
          alt="Image 4"
        />
        <img
          src="review2.png"
          className="w-full h-auto object-cover my-auto"
          alt="Image 4"
        />
        <img
          src="review3.png"
          className="w-full h-auto object-cover"
          alt="Image 4"
        />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-2 h-2 rounded-full bg-gray-300 inline-block mx-1 transition-all duration-300"></span>`;
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-[1200px] mt-4 !px-4"
        breakpoints={{
          1280: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {[
          "/image 5.png",
          "/image 6.png",
          "/image 7.png",
          "/image 8.png",
          "/image 9.png",
          "/image 10.png",
        ].map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center items-center" />

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
              <p className="text-center">นี่คือโอกาสที่น้อง ๆ จะได้คะแนนคณิตสูง</p>
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-md p-4 w-full mt-10 gap-4">
        {/* ซ้าย (บนมือถือจะอยู่บนสุดตรงกลาง) */}
        <p className="font-semibold text-xl text-center md:text-left md:w-auto md:flex-1">
          The One Math Academy
        </p>

        {/* กลาง */}
        <div className="flex gap-4 items-center text-[#8987A1] justify-center md:justify-center md:w-auto md:flex-1 relative">
          <CiHeart />
          <p>INGFAH ANTHICHA</p>
        </div>

        {/* ขวา */}
        <div className="flex gap-4 justify-center md:justify-end md:flex-1">
          <a
            href="https://www.instagram.com/ingfah.ap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.tiktok.com/@ingfah_anthicha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="text-2xl hover:text-[#25F4EE] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
