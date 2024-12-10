import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
    return (
        <div className='px-10 w-full h-41px bg-white'>
            <nav className=' flex gap-[20%] '>
                <div className='flex items-center gap-0'><Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    className="h-12 w-auto" />
                    <span className='text-black font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat'>
                        Furniro
                    </span>
                </div>

                <div className=" flex justify-between grow ">
                    <div className="flex space-x-[50px] items-center">
                        <Link className="text-[#000000] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:underline " href="/">Home</Link>
                        <Link className="text-[#000000] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:underline" href="/shop">Shop</Link>
                        <Link className="text-[#000000] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:underline" href="/blog">Blog</Link>
                        <Link className="text-[#000000] text-[14px] leading-[24px] tracking-[0.2px] font-bold hover:underline" href="/contact">Contact</Link>
                    </div>
                    <div className=" flex space-x-[40px]">
                        <button><Image
                            src='/alert_icon.png'
                            alt='icon'
                            width={20}
                            height={18} />
                        </button>
                        <button ><Image
                            src='/heart_icon.png'
                            alt='icon'
                            width={16}
                            height={18} /></button>
                        <button><Image
                            src='/search_icon.png'
                            alt='icon'
                            width={16}
                            height={18} /></button>
                        <Link href="./cart" className='mt-3.5'><button><Image
                            src='/cart_icon.png'
                            alt='icon'
                            width={18}
                            height={18} /></button></Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}