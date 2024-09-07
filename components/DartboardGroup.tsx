import { useEffect, useRef, useState } from "react";
import camera from '../public/assets/prizes/camera.png';
import drone from '../public/assets/prizes/drone.png';
import echo from '../public/assets/prizes/echo.png';
import miniProjector from '../public/assets/prizes/mini-projector.png';
import revPlush from '../public/assets/prizes/rev-plush.png';
import monitor from '../public/assets/prizes/monitor.png';
import Image from "next/image";

interface DartboardGroupProps {
  children: React.ReactNode;
  index: number;
}

const images = [
  camera,
  drone,
  echo,
  miniProjector,
  revPlush,
];

const DartboardGroup = ({ children, index }: DartboardGroupProps) => {
  const coverRef = useRef<HTMLImageElement | null>(null);
  const itemRef = useRef<SVGGElement | null>(null);

  const [coverLeft, setCoverLeft] = useState<number | null>(null);
  const [coverTop, setCoverTop] = useState<number | null>(null);

  useEffect(() => {
    const coverDistance = 16;
    const positionCover = (event: MouseEvent, item: SVGGElement, cover: HTMLImageElement) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      cover.style.left = `${event.clientX}px`;
      cover.style.top = `${event.clientY - rect.top}px`;
    };

    const handleMouseOver = (event: MouseEvent) => {
      if (itemRef.current && coverRef.current) {
        positionCover(event, itemRef.current, coverRef.current);
        document.querySelectorAll('.bookmark-item').forEach((otherItem) => {
          if (otherItem !== itemRef.current) {
            otherItem.classList.add('opacity-50');
          }
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (itemRef.current && coverRef.current) {
        positionCover(event, itemRef.current, coverRef.current);
      }
    };

    const handleMouseOut = () => {
      if (coverRef.current) {
        coverRef.current.style.left = 'auto';
        coverRef.current.style.top = 'auto';
        document.querySelectorAll('.bookmark-item').forEach((otherItem) => {
          otherItem.classList.remove('opacity-50');
        });
      }
    };

    const item = itemRef.current;
    if (item) {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mousemove', handleMouseMove);
      item.addEventListener('mouseout', handleMouseOut);

      return () => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return (
    <g ref={itemRef} className="bookmark-item group relative hidden md:block">
      {children}
      <foreignObject width="1000" height="1000" className="pointer-events-none"
      >
        <Image
          className="cover-image max-w-64 pointer-events-none absolute z-90 hidden max-h-64 group-hover:block"
          src={images[index]}
          alt="Prize"
          ref={coverRef}
        />
      </foreignObject>
    </g>
  )
}

export default DartboardGroup