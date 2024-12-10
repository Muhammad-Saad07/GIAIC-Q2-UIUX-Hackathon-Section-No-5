import Link from "next/link"
import Image from "next/image"
export default function Checkout() {
    return (
        <div className="w-full bg-white ">
        <div className="w-full h-[1400px]">
          <div>
            <Image src='/contact_1.png' alt="Photo" width={1440} height={100}/>
          </div>
          <div>
          <Image src='/contact_2.png' alt="photo" width={1440} height={100}/>
          </div>
          <div>
          <Image src='/section1_shop4.png' alt="photo" width={1440} height={100}/>
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
        
      </div>
    )
  }