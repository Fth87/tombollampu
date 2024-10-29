'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import Tombol from '@/components/Tombol';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [tombol1, setTombol1] = useState(false);
  const [tombol2, setTombol2] = useState(false);
  const [tombol3, setTombol3] = useState(false);
  const [tombol4, setTombol4] = useState(false);
  const [tombol5, setTombol5] = useState(false);
  const [tombol6, setTombol6] = useState(false);
  const [tombol7, setTombol7] = useState(false);
  const [tombol8, setTombol8] = useState(false);

  let tombol = [tombol1, tombol2, tombol3, tombol4, tombol5, tombol6, tombol7, tombol8];

  const settombol = () => {
    setTombol1(tombol[0]);
    setTombol2(tombol[1]);
    setTombol3(tombol[2]);
    setTombol4(tombol[3]);
    setTombol5(tombol[4]);
    setTombol6(tombol[5]);
    setTombol7(tombol[6]);
    setTombol8(tombol[7]);
  };

  const kemungkinanMati = [
    [false, false, true, true, true, true, false, true],
    [false, false, true, true, true, true, false, false],
    [false, false, true, true, true, false, false, true],
    [false, false, true, true, true, false, false, false],
    [false, false, true, true, false, true, false, true],
    [false, false, true, true, false, true, false, false],
    [false, false, true, true, false, false, false, true],
    [false, false, true, true, false, false, false, false],
    [false, false, false, false, true, true, false, true],
    [false, false, false, false, true, true, false, false],
    [false, false, false, false, true, false, false, true],
    [false, false, false, false, true, false, false, false],
    [false, false, false, false, false, true, false, true],
    [false, false, false, false, false, true, false, false],
    [false, false, false, false, false, false, false, true],
    [false, false, false, false, false, false, false, false],
  ];

  const tombolMati = (nomer: number) => {
    tombol = kemungkinanMati[nomer];
    settombol();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const merah = (x: boolean, y: boolean) => {
    return x || y;
  };
  const biru = (x: boolean, y: boolean) => {
    return x && y;
  };
  const hijau = (x: boolean, y: boolean) => {
    return x != y;
  };

  const layer11 = merah(tombol1, tombol2);
  const layer12 = hijau(tombol3, tombol4);
  const layer13 = biru(tombol5, tombol6);

  const layer21 = merah(layer11, layer12);

  const layer31 = merah(tombol7, layer21);
  const layer32 = biru(tombol8, layer21);

  const layer41 = merah(layer31, layer32);
  const layer42 = biru(layer32, layer13);

  const lampu = merah(layer41, layer42);

  // console.log(tombol1, tombol2, tombol3, tombol4, tombol5, tombol6, tombol7, tombol8, lampu);

  return (
    <div className={lampu ? 'bg-white' : 'bg-black'}>
      <div className="md:hidden flex justify-center items-center w-screen h-screen">
        <div>
          <h1 className="text-xl text-white mx-5">Khusus buat yang leptop2 aja ya deck:)</h1>
        </div>
      </div>
      <div className=" w-full hidden md:flex sm:w-[700px] lg:w-[900px] mx-auto h-screen  items-center">
        <div className="w-full hidden md:block">
          <h1 className="text-2xl font-bold text-center ">Tekan - Tekan Yang Betul</h1>
          <AspectRatio className="hidden md:block w-[300px] sm:w-[500px]  md:w-[700px] lg:w-[900px] mx-auto relative" ratio={16 / 9}>
            <Tombol onClick={() => setTombol1(!tombol1)} position={'lg:top-[51px] lg:left-[145px] md:top-[35px] md:left-[110px]'} className={` ${tombol1 ? 'bg-[#ffb7bd]' : ''}`}>
              1
            </Tombol>
            <Tombol onClick={() => setTombol2(!tombol2)} position={'lg:top-[123px] lg:left-[145px] md:top-[90px] md:left-[110px]'} className={` ${tombol2 ? 'bg-[#ffb7bd]' : ''}`}>
              2
            </Tombol>
            <Tombol onClick={() => setTombol3(!tombol3)} position={'lg:top-[183px] lg:left-[145px] md:top-[140px] md:left-[110px]'} className={` ${tombol3 ? 'bg-[#ffb7bd]' : ''}`}>
              3
            </Tombol>
            <Tombol onClick={() => setTombol4(!tombol4)} position={'lg:top-[253px] lg:left-[145px] md:top-[195px] md:left-[110px]'} className={` ${tombol4 ? 'bg-[#ffb7bd]' : ''}`}>
              4
            </Tombol>
            <Tombol onClick={() => setTombol5(!tombol5)} position={'lg:top-[325px] lg:left-[145px] md:top-[248px] md:left-[110px]'} className={` ${tombol5 ? 'bg-[#ffb7bd]' : ''}`}>
              5
            </Tombol>
            <Tombol onClick={() => setTombol6(!tombol6)} position={'lg:top-[395px] lg:left-[145px] md:top-[305px] md:left-[110px]'} className={` ${tombol6 ? 'bg-[#ffb7bd]' : ''}`}>
              6
            </Tombol>
            <Tombol onClick={() => setTombol7(!tombol7)} position={'lg:top-[48px] lg:left-[340px] md:top-[35px] md:left-[263px]'} className={` ${tombol7 ? 'bg-[#ffb7bd]' : ''}`}>
              7
            </Tombol>
            <Tombol onClick={() => setTombol8(!tombol8)} position={'lg:top-[287px] lg:left-[340px] md:top-[220px] md:left-[263px]'} className={` ${tombol8 ? 'bg-[#ffb7bd]' : ''}`}>
              8
            </Tombol>

            <Image src={lampu ? '/lampunyala.png' : '/lampumati.png'} alt="lampu Nyala" width={100} height={100} className="absolute lg:w-[100px] md:w-[70px] lg:right-[120px] lg:bottom-[50%] md:right-[100px] md:bottom-[51%]" />

            <Image src={'dasar.svg'} alt="gambar" width={1920} height={1080} className="w-full h-full" />
          </AspectRatio>

          <div className="md:block hidden bg-white border border-slate-700 p-5">
            <h1 className="text-2xl font-bold text-center ">Kemungkinan untuk mematikan lampu</h1>
            <p className="text-center mb-4">Selain kemungkinan gabungan tombol ini maka lampu akan menyala</p>
            <div className="grid grid-cols-8 gap-4">
              {kemungkinanMati.map((_, index) => (
                <Button key={index} className="mx-3" onClick={() => tombolMati(index)} variant="outline">
                  {index === 15 ? 'Reset' : index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
