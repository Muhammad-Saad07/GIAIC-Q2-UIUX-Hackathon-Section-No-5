import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black w-full">
      <div className="relative w-full h-screen">
        <div className="absolute   inset-0 ">
          <Image
            src='/section1_home.png'
            alt="Picture"
            width={1300}
            height={500} />
        </div>
        <div className="relative w-[520px] h-[300px] top-[235px] left-[739px] pl-1 opacity-80 rounded-[10px] bg-[#FFF3E3] z-10 ">
          <p className="text-[20px] tracking-3px leading-24px text-[#333333]">
            New Arrival
          </p>
          <p className="leading-[65px] text-[50px] text-[#B88E2F] font-bold">
            Discover Our New Collection
          </p>
          <p className="text-[#333333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro quos consequuntur culpa non.
          </p><br />
          <button className="bg-[#B88E2F] text-white w-36 h-14">
            Buy Now
          </button>
        </div>
      </div><br />
      <div className="relative w-full bg-white pt-8">
        <div className="w-full h-[600px] ">
          <p className="text-black text-[30px] font-bold flex justify-center">
            Brows The Range
          </p>
          <p className="flex justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br />
          <div className="flex gap-4 justify-center pt-4">
            <div>
              <Image
                src='/section2_home1.png'
                alt="photo"
                width={360}
                height={300} />
              <p className="flex justify-center pt-4 font-bold">Dining</p>
            </div>
            <div>
              <Image
                src='/section2_home2.png'
                alt="photo"
                width={360}
                height={300} />
              <p className="flex justify-center pt-4 font-bold">Living</p>
            </div>
            <div>
              <Image
                src='/section2_home3.png'
                alt="photo"
                width={360}
                height={300} />
              <p className="flex justify-center pt-4 font-bold">Bedroom</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-white">
        <div className="w-full h-[1200px]">
          <h1 className="font-bold flex justify-center pt-12 text-[30px] text-[#3A3A3A]">OUR PRODUCTS</h1>
          <div className="grid grid-cols-4 gap-4 pt-8">
            <Image src='/section3_home1.png' alt="photo" width={285} height={300} />
            <Image src='/section3_home2.png' alt="photo" width={285} height={300} />
            <Image src='/section3_home3.png' alt="photo" width={285} height={300} />
            <Image src='/section3_home4.png' alt="photo" width={285} height={300} />
            <Image src='/section3_home5.png' alt="photo" width={285} height={300} />
            <Image src='/section3_home6.png' alt="photo" width={285} height={300} />
            <Image src='/section3_home7.png' alt="photo" width={285} height={300} />
            <Image src='/section3_home8.png' alt="photo" width={285} height={300} />
          </div>
          <div className="flex justify-center pt-6">
            <button className="border-[#B88E2F] border-[2px] bg-transparent text-[#B88E2F] w-48 h-12 font-bold ">Show More</button>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#FCF8F3]">
        <div className="w-full h-[620px]">
          <div className="grid grid-cols-3">
            <div className="pt-[150px] pl-[100px]">
              <h1 className="text-[#3A3A3A] text-[40px] leading-[48px]" >50+ Beautiful rooms
                inspiration</h1>
              <p className="text-[#616161] text-[16px] leading-[24px] pt-[10px]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <button className="text-[#FFFFFF] mt-6 text-[16px] leading-[24px] w-[176px] h-[48px] bg-[#B88E2F] ">Explore More</button>
            </div>
            <div className="pl-[65px] pt-[20px]"><Image src='/section4_home1.png' alt="photo" width={400} height={500} /></div>
            <div className="pl-[65px] pt-[20px]"><Image src='/section4_home2.png' alt="photo" width={330} height={300} /><Image className="h-8 mt-4" src='/section4_home3.png' alt="photo" width={120} height={10} /></div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#FCF8F3]">
        <div className="w-full h-[750px]">
          <div><h1 className="flex justify-center text-[#616161]  text-[20px] leading-[30px]">Share your setup with</h1><h1 className="flex justify-center text-[#3A3A3A] text-[40px] leading-[48px] font-bold">#FuniroFurniture</h1></div>
          <div className="flex px-5 pt-5 absolute   inset-0">
            <Image className="h-[340px]" src='/section5_home1.png' alt="photo" width={100} height={100} />
            <Image className="h-[260px] mx-4 mt-20" src='/section5_home2.png' alt="photo" width={330} height={100} />
            <Image className="h-[340px] mt-40" src='/section5_home3.png' alt="photo" width={280} height={100} />
            <Image className="h-[348px] mx-4 mt-20" src='/section5_home4.png' alt="photo" width={250} height={100} />
            <Image className="h-[430px] " src='/section5_home5.png' alt="photo" width={250} height={100} />
          </div>
          <div className="flex px-5">
            <Image className="mt-[380px] h-[240px] " src='/section5_home6.png' alt="photo" width={140} height={100} />
            <Image className="mt-[320px] h-[220px] ml-4" src='/section5_home7.png' alt="photo" width={260} height={100} />
            <Image className="mt-[400px] h-[230px] ml-80" src='/section5_home8.png' alt="photo" width={160} height={100} />
            <Image className="mt-[400px] h-[180px] ml-4" src='/section5_home9.png' alt="photo" width={280} height={100} />
          </div>
        </div>
      </div>

      <div className=" mb-0.5 border-blue-700"></div>

      <footer className="w-full h-[360px] px-4 pt-10 bg-white ">
        <div className="grid grid-cols-4 gap-8 ">
          <div className="w-48">
            <h2 className="font-bold text-black text-[22px]">Furniro.</h2>
            <p className="text-[#9F9F9F]  text-[10px]">400 University Drive Suite 200 Coral Gables,
              FL 33134 USA</p>
          </div>
          <div className="pl-20">
            <h1 className="text-[#9F9F9F] text-[16px]">Links</h1>
            <div className="pt-8">
              <Link href="/" className="text-[16px] text-black font-bold">Home</Link><br /><br />
              <Link href="/shop" className="text-[16px] text-black font-bold">Shop</Link><br /><br />
              <Link href="/blog" className="text-[16px] text-black font-bold">Blog</Link><br /><br />
              <Link href="/contact" className="text-[16px] text-black font-bold ">Contact</Link></div>
          </div>
          <div><h1 className="text-[#9F9F9F] text-[16px]">Help</h1>
            <div className="pt-8">
              <Link href="/a" className="text-[16px] text-black font-bold ">Payment Options</Link><br /><br />
              <Link href="/a" className="text-[16px] text-black font-bold">Returns</Link><br /><br />
              <Link href="/a" className="text-[16px] text-black font-bold">Privacy Policies</Link><br /><br />
            </div>
          </div>
          <div><h1 className="text-[#9F9F9F] text-[16px]">Newsletter</h1>
            <div className="pt-8 flex gap-2 ">
              <h1 className="text-[#9F9F9F] text-[14px] border-b-2 border-black ">Enter Your Email Address</h1><h1 className="pl-4 text-[14px] font-bold border-b-2 border-black ">SUBSCRIBE</h1>
            </div>
          </div>
        </div>
        <h1 className="pt-[20px] text-black text-[16px] leading-[24px]">2023 furino. All rights reverved</h1> 
      </footer>
    </div>
  )
}