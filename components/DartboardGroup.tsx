import { use, useEffect, useRef, useState } from "react";
import camera from '../public/assets/prizes/camera.png';
import drone from '../public/assets/prizes/drone.png';
import echo from '../public/assets/prizes/echo.png';
import miniProjector from '../public/assets/prizes/mini-projector.png';
import revPlush from '../public/assets/prizes/rev-plush.png';
import monitor from '../public/assets/prizes/monitor.png';

interface DartboardGroupProps {
  children: React.ReactNode;
  slideshowIndex: number;
  mouseOverIndex: number;
  setMouseOverIndex: (index: number) => void;
  index: number;
  coverRef: React.RefObject<SVGGElement>;
}

const images = [
  camera,
  drone,
  echo,
  miniProjector,
  revPlush,
];

const DartboardGroup = ({ children, slideshowIndex, mouseOverIndex, setMouseOverIndex, index, coverRef }: DartboardGroupProps) => {
  const itemRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const handleMouseOver = () => {
      if (itemRef.current && coverRef.current) {
        setMouseOverIndex(index);
        document.querySelectorAll('.dartboard-group').forEach((otherItem) => {
          if (otherItem !== itemRef.current) {
            otherItem.classList.add('opacity-50');
          }
        });
        document.querySelector('#bull')?.classList.add('opacity-50');
      }
    };

    const handleMouseOut = () => {
      if (coverRef.current) {
        setMouseOverIndex(-1);
        document.querySelectorAll('.dartboard-group').forEach((otherItem) => {
          otherItem.classList.remove('opacity-50');
        });
        document.querySelector('#bull')?.classList.remove('opacity-50');
      }
    };

    const item = itemRef.current;
    if (item) {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseout', handleMouseOut);

      return () => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return (
    <g ref={itemRef} className={"dartboard-group group relative hidden md:block " + (mouseOverIndex === -1 ? (slideshowIndex === index ? "opacity-100" : "opacity-50") : "")}>
      {children}
      <g ref={coverRef} />
    </g>
  )
}

export default DartboardGroup