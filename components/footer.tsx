import Image from 'next/image';
import FullLogo from '@/public/packpal-full.svg';

export default function Footer() {
  return (
    <Image
      src={FullLogo}
      alt="Pack Pal Logo"
      style={{
        width: 300,
        height: 'auto',
        borderRadius: 10,
      }}
    />
  );
}
