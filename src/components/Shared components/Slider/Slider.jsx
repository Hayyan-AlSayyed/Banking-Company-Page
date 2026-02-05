
import { useEffect, useRef, useState } from 'react';
import './Slider.css';
const Slider = ({ children, totalItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [cardGap, setCardGap] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const cardRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width <= 500) {
                setVisibleCards(1);
            } else if (width <= 992) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };
        if (containerRef.current && containerRef.current.children.length > 0) {
            const firstCard = containerRef.current.children[0];
            setCardWidth(firstCard.offsetWidth);

            const containerStyle = window.getComputedStyle(containerRef.current);
            const gapValue = parseInt(containerStyle.gap) || 0;
            setCardGap(gapValue);
        }
        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, [children]);
    const nextSlide = () => {
        if (currentIndex < totalItems - visibleCards) {
            setCurrentIndex(prev => prev + 1);
        }
    };
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };
    return (
        <>
            <div className="ma-container-slider">
                <div className="ma-fcontrols">
                    <button onClick={prevSlide} disabled={currentIndex === 0} className='ma-leftbtn border'>
                        <img src="/Images/HomePage/Left Arrow.png" alt="prevArrow" />
                    </button>
                </div>
                <div className="ma-slider-wrapper-parent">
                    <div className="ma-slider-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
                        <div className="fade-left">

                        </div>
                        <div className="fade-right">

                        </div>
                        <div
                            className="slider-container"
                            ref={containerRef}
                            style={{
                                display: 'flex',
                                transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
                                transition: 'transform 0.5s ease-in-out'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
                <div className='ma-scontrols'>
                    <button onClick={nextSlide} disabled={currentIndex >= totalItems - visibleCards} className='ma-rightbtn border'>
                        <img src="/Images/HomePage/Right Arrow.png" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Slider;
