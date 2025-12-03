import React, { useRef, useEffect, useState } from "react";

const VideoSlider = ({ caption }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  
  const videos = [
    { id: 1, src: "/videos/video1.mp4" },
    { id: 2, src: "/videos/video2.mp4" },
    { id: 3, src: "/videos/video3.mp4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Handle video playback
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.muted = true;
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentSlide]);

  // Handle slider positioning
  useEffect(() => {
    if (containerRef.current) {
      const translateValue = -currentSlide * (100 / videos.length);
      containerRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentSlide, videos.length]);

  // Handle video end event for auto-swipe
  const handleVideoEnd = () => {
    nextSlide();
  };

  return (
    <div className="video-slider-wrapper">
      <div className="video-slider-container">
        <div 
          ref={containerRef}
          className="video-slides"
          style={{ width: `${videos.length * 100}%` }}
        >
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="video-slide"
              style={{ width: `${100 / videos.length}%` }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                className="slider-video"
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
            </div>
          ))}
        </div>
        
        {/* Bottom overlay with caption and controls */}
        <div className="slider-bottom-overlay">
          {/* Caption text */}
          {caption && (
            <div className="slider-caption">
              <p>{caption}</p>
            </div>
          )}

          {/* Controls */}
          <div className="slider-controls">
            <button onClick={prevSlide} className="control-btn prev-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="slide-dots">
              {videos.map((_, index) => (
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
      </div>

      <style jsx>{`
        .video-slider-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 0 20px;
        }

        .video-slider-container {
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          position: relative;
          background: #000;
        }

        .video-slides {
          height: 100%;
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .video-slide {
          height: 100%;
          flex-shrink: 0;
          position: relative;
        }

        .slider-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .slider-bottom-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%);
          padding: 60px 40px 25px 40px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .slider-caption {
          width: 100%;
        }

        .slider-caption p {
          color: rgba(255, 255, 255, 0.95);
          font-size: 16px;
          line-height: 1.7;
          margin: 0;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          font-weight: 400;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .slider-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
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
        }

        .dot {
          width: 14px;
          height: 14px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .dot.active {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.3);
        }

        @media (max-width: 1024px) {
          .video-slider-wrapper {
            max-width: 1000px;
          }
          
          .video-slider-container {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .video-slider-wrapper {
            max-width: 100%;
            padding: 0 15px;
          }

          .video-slider-container {
            height: 400px;
          }

          .control-btn {
            width: 45px;
            height: 45px;
          }

          .slider-bottom-overlay {
            padding: 50px 25px 20px 25px;
            gap: 15px;
          }

          .slider-controls {
            gap: 20px;
          }

          .slider-caption p {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .video-slider-container {
            height: 300px;
          }

          .control-btn {
            width: 40px;
            height: 40px;
          }

          .slider-bottom-overlay {
            padding: 40px 15px 15px 15px;
            gap: 12px;
          }

          .slider-controls {
            gap: 15px;
          }

          .slider-caption p {
            font-size: 13px;
            line-height: 1.5;
          }

          .dot {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoSlider;