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
          position: relative;
          padding: 0 20px;
        }

        .video-slider-container {
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          position: relative;
          background: #ffffff;
        }

        .video-slides {
          width: 350%;
          display: flex;
          height: 100%;
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .video-slide {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-video {
          width: 110%;
          height: 109%;
          object-fit: cover;
          display: block;
          border-radius: 30px;
          margin: 20px;
          padding:20px;
        }

        .slider-bottom-overlay {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          background: transparent;
          padding: 0;
          z-index: 30;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          pointer-events: none;
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
          gap: 10px;
          pointer-events: auto;
        }

        .control-btn {
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 50%;
          background: rgba(60, 60, 60, 0.6);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
          border: 1.5px solid rgba(255, 255, 255, 0.15);
        }

        .control-btn:hover {
          background: rgba(60, 60, 60, 0.8);
          transform: scale(1.08);
        }

        .control-btn:active {
          transform: scale(0.95);
        }

        .slide-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.45);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.15);
        }

        .dot.active {
          background: rgba(255, 255, 255, 0.95);
          transform: scale(1.2);
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
            border-radius: 18px;
          }

          .video-slide {
            padding: 12px;
          }

          .slider-video {
            border-radius: 14px;
          }

          .control-btn {
            width: 40px;
            height: 40px;
          }

          .slider-bottom-overlay {
            bottom: 10px;
          }

          .slider-controls {
            gap: 8px;
          }

          .slider-caption p {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .video-slider-container {
            height: 300px;
            border-radius: 16px;
          }

          .video-slide {
            padding: 10px;
          }

          .slider-video {
            border-radius: 12px;
          }

          .control-btn {
            width: 36px;
            height: 36px;
          }

          .slider-bottom-overlay {
            bottom: 8px;
          }

          .slider-controls {
            gap: 6px;
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

