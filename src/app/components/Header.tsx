// components/Header.js
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[url('/Aqsaaaa.png')]">
        
      <div className="flex items-center justify-center pt-5">
        <Image 
          src="/round.png" 
          alt="image"
          width={700} 
          height={700}
        />
      
      </div>
      <nav>
      </nav>
    </header>
  );
};

export default Header;
