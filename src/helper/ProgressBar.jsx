"use client";
import React, { useEffect, useRef, useState } from "react";

const ProgressBar = ({ percent = "0%" }) => {
  const wrapperRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  const parsed = parseInt(percent, 10);
  const target = Number.isNaN(parsed) ? 0 : Math.max(0, Math.min(parsed, 100));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let current = 0;
    setCurrentValue(0);

    const interval = setInterval(() => {
      if (current <= target) {
        setCurrentValue(current);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => {
      clearInterval(interval);
    };
  }, [inView, target]);

  return (
    <>
      <div className='cause-progress__intro'>
        <p>
          <span>Donation</span>
          <span className='percent-value'>{currentValue}%</span>
        </p>
      </div>
      <div className='cause-progress__bar' ref={wrapperRef}>
        <div className='progress-bar'>
          <div className='progress-bar-percent' style={{ width: `${currentValue}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
