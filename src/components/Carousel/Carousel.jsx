import "./Carousel.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const CarouselItem = ({ children, width }) => {
    return (
        <div className="homepage-carousel-item" style={{ width: width }}>
            { children }
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if(newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    // Auto-cycling the Carousel items
    useEffect(() => {
        const interval = setInterval(() => {
            if(!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if(interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        <div className="carousel" 
            {...handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)} >
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                { React.Children.map(children, child => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            <div className="carousel-indicators">
                <button className="carousel-control-prev">
                    <span className="carousel-control-box" onClick={() => updateIndex(activeIndex - 1)}>
                        <svg className="carousel-prev-icon" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"></path>
                        </svg>
                    </span>
                </button>

                <ol className="carousel-bottom-indicators">
                    {React.Children.map(children, (child, index) => {
                        return (
                            <li className={`${index === activeIndex ? "active": ""}`}></li>
                        );
                    })}
                </ol>

                <button className="carousel-control-next">
                    <span className="carousel-control-box" onClick={() => updateIndex(activeIndex + 1)}>
                        <svg className="carousel-next-icon" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export { CarouselItem, Carousel };
