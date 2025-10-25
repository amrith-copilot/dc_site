import React, { useRef, useEffect, useState } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  
  const images = [
    { id: 1, src: "/assets/imgs/image1.png" },
    { id: 2, src: "/assets/imgs/image2.png" },
    { id: 3, src: "/assets/imgs/image3.png" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Handle auto-advance timer
  useEffect(() => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up new interval for 3 seconds
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide]);

  // Handle slider positioning (matching original VideoSlider logic)
  useEffect(() => {
    if (containerRef.current) {
      const translateValue = -currentSlide * (100 / images.length);
      containerRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentSlide, images.length]);

  return (
    <div className="video-slider-wrapper">
      <div className="video-slider-container">
        <div 
          ref={containerRef}
          className="video-slides"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="video-slide"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="slider-video"
              />
            </div>
          ))}
        </div>
        
        {/* Overlay Controls */}
        <div className="slider-controls-overlay">
          <button onClick={prevSlide} className="control-btn prev-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="slide-dots">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
          
          <button onClick={nextSlide} className="control-btn next-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .video-slider-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .video-slider-container {
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          position: relative;
          background: #000;
          box-sizing: border-box;
        }

        .video-slides {
          height: 100%;
          display: flex;
          transition: transform 0.5s ease-in-out;
          box-sizing: border-box;
        }

        .video-slide {
          height: 100%;
          flex-shrink: 0;
          position: relative;
          box-sizing: border-box;
        }

        .slider-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          box-sizing: border-box;
        }

        .slider-controls-overlay {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          padding: 18px 30px;
          background-color: transparent;
          border-radius: 50px;
          width: fit-content;
          z-index: 10;
          box-sizing: border-box;
        }

        .control-btn {
          width: 55px;
          height: 55px;
          border: none;
          border-radius: 50%;
          background: transparent;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-sizing: border-box;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .control-btn:active {
          transform: scale(0.95);
        }

        .slide-dots {
          display: flex;
          gap: 12px;
          box-sizing: border-box;
        }

        .dot {
          width: 14px;
          height: 14px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .dot.active {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.3);
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .video-slider-wrapper {
            max-width: 1000px;
            padding: 0 20px;
          }
          
          .video-slider-container {
            height: 500px;
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 768px) {
          .video-slider-wrapper {
            max-width: 100%;
            padding: 0 15px;
            margin: 0 auto;
          }
          
          .video-slider-container {
            height: 400px;
            border-radius: 15px;
          }
          
          .control-btn {
            width: 45px;
            height: 45px;
          }
          
          .slider-controls-overlay {
            gap: 20px;
            background-color: transparent;
            padding: 15px 25px;
            bottom: 15px;
          }

          .slide-dots {
            gap: 10px;
          }

          .dot {
            width: 12px;
            height: 12px;
          }
        }

        /* Small mobile breakpoint */
        @media (max-width: 480px) {
          .video-slider-wrapper {
            padding: 0 10px;
            max-width: 100%;
          }

          .video-slider-container {
            height: 300px;
            border-radius: 12px;
          }
          
          .control-btn {
            width: 40px;
            height: 40px;
          }
          
          .slider-controls-overlay {
            gap: 15px;
            background-color: transparent;
            padding: 12px 20px;
            bottom: 10px;
          }
          
          .dot {
            width: 10px;
            height: 10px;
          }

          .slide-dots {
            gap: 8px;
          }
        }

        /* Extra small screens */
        @media (max-width: 360px) {
          .video-slider-wrapper {
            padding: 0 8px;
          }

          .video-slider-container {
            height: 280px;
            border-radius: 10px;
          }

          .control-btn {
            width: 36px;
            height: 36px;
          }

          .slider-controls-overlay {
            gap: 12px;
            padding: 10px 16px;
            bottom: 8px;
          }

          .dot {
            width: 8px;
            height: 8px;
          }

          .slide-dots {
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;