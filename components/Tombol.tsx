import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

const Tombol = ({ children, onClick, className, position }: { children: ReactNode; onClick: () => void; className: string; position: string }) => {
  return (
    <Button onClick={onClick} variant="tombol" className={`${position} group border-[#FFE699] border-4 flex items-center justify-center `}>
      <div>
        <div className={`bg-[#F94F5D]  rounded-full md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] text-white flex justify-center items-center font-bold text-lg ${className}`}>{children}</div>
      </div>
    </Button>
  );
};

export default Tombol;
