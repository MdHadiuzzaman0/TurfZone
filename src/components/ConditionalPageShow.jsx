'use client';
import { usePathname } from 'next/navigation';
import ProjectFlow from './ProjectFlow';
import WhyChooseUs from './WhyChooseUs';

export default function ConditionalSections() {
  const pathname = usePathname();
  
  if (pathname !== '/') return null;
  
  return (
    <>
      <ProjectFlow/>
      <WhyChooseUs />
    </>
  );
}