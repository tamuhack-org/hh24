import { useEffect, useRef } from 'react';

const SkyBackground = () => {

  const NO_MOUSE_SCREEN_WIDTH_CUTOFF = 1200;
  const NO_LERP_SCREEN_WIDTH_CUTOFF = 1200;
  const MOUSE_OFFSET_INTENSITY = 25;
  const SCROLL_LERP_SPEED = 0.01;
  const SCROLL_EXTENT = 0.0006;
  const BACKGROUND_CHANGE_INTERVAL = 200;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    // Load image
    const backgroundImage1 = document.createElement("img");
    backgroundImage1.src = "/landing-bg-warble1.jpg";
    const backgroundImage2 = document.createElement("img");
    backgroundImage2.src = "/landing-bg-warble2.jpg";
    const backgroundImage3 = document.createElement("img");
    backgroundImage3.src = "/landing-bg-warble3.jpg";
    const backgroundImage4 = document.createElement("img");
    backgroundImage4.src = "/landing-bg-warble4.jpg";
    const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4];
    const backgroundImageWidth = 1000;
    const backgroundImageHeight = 1500;
    const backgroundImageX = 0;
    const backgroundImageY = 0;

    // Background image change interval
    let backgroundImageIndex = 0;
    setInterval(() => {
      backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
    }, BACKGROUND_CHANGE_INTERVAL);


    // Get canvas and its context
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // Handle resizing
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    window.dispatchEvent(new Event("resize"));
    
    // Mouse position stuff
    let mousePosX = 0;
    let mousePosY = 0;
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;
    window.addEventListener("mousemove", (event) => {
        mousePosX = event.clientX;
        mousePosY = event.clientY;
    });

    // Scroll position stuff
    let scrollPosY = 0;
    let scrollOffsetY = 0;
    window.addEventListener("scroll", (event) => {
        scrollPosY = window.scrollY;
    });

    let previousTime = Date.now();
    function draw()
    {
      // Calculate deltaTime
      const currentTime = Date.now();
      const deltaTime = currentTime - previousTime;
      previousTime = currentTime;

      // Lerp mouseoffset to mousepos over time, using deltaTime
      // https://youtu.be/yGhfUcPjXuE?t=1014
      const blend = 1 - (0.5 ** (deltaTime * 0.008));
      mouseOffsetX = mouseOffsetX + (mousePosX - mouseOffsetX) * blend;
      mouseOffsetY = mouseOffsetY + (mousePosY - mouseOffsetY) * blend;
      if (window.innerWidth < NO_MOUSE_SCREEN_WIDTH_CUTOFF)
      {
        mouseOffsetX = 0;
        mouseOffsetY = 0;
      }

      // Lerp scrollOffset to scrollPos over time, using deltaTime
      const blend2 = 1 - (0.5 ** (deltaTime * SCROLL_LERP_SPEED));
      scrollOffsetY = scrollOffsetY + (scrollPosY - scrollOffsetY) * blend2;
      
      // Draw background image
      ctx.resetTransform();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let bgTrueX = backgroundImageX;
      let bgTrueY = backgroundImageY;
      bgTrueX += mouseOffsetX / window.innerWidth * MOUSE_OFFSET_INTENSITY - (MOUSE_OFFSET_INTENSITY / 2);
      bgTrueY += mouseOffsetY / window.innerHeight * MOUSE_OFFSET_INTENSITY;
      bgTrueY -= scrollOffsetY * SCROLL_EXTENT * Math.min(2000, window.innerWidth);

      const imageWidth = canvas.width + 100;
      if (window.innerWidth > NO_LERP_SCREEN_WIDTH_CUTOFF)
      {
        ctx.drawImage(backgroundImages[backgroundImageIndex], bgTrueX - 50, bgTrueY - (window.innerWidth * 0.2), imageWidth, imageWidth * backgroundImageHeight / backgroundImageWidth);
      }
      
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

    

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-50"></canvas>
  );
};

export default SkyBackground;
