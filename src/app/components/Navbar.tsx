import Link from "next/link"
import Image from "next/image";

const Navbar = () =>{
  return (
  <nav>
    <ul className="flex gap-x-4 text-black justify-center">
    
    {/* <nav className="flex justify-center bg-gray-100 p-4"> */}
    <ul className="flex space-x-8">
  
      <li>
      <Link href="/Features">Features</Link>
    </li>
    <li>
      <Link href="/Pricing">Pricing</Link>
    </li>
    <li>
      <Link href="/Testimonials">Testimonials</Link>
    </li>
    <li>
      <Link href="/Resources">Resources</Link>
    </li>
    <li className="font-bold text-black">
    <div className="flex justify-center items-center space-x-4">
  <Image width={20} height={20} src="/Mask group.png" alt="Circle" />
  <Image width={60} height={60} src="/image 37.png" alt="Circle" />
</div>
    </li>
    <li>
      <Link href="/Company">Company</Link>
    </li>
    
    <li>
      <Link href="/Contact">Contact</Link>
    </li>
    <li>
    <Link href="/Login"> <button className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button></Link>
      </li>
  
    </ul>
   
    </ ul>
 
    </nav>

  )
  }

export default Navbar;
