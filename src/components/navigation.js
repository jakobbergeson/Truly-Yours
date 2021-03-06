/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'gatsby';
import FloatAnimation from './floatAnimation';
import FadeAnimation from './fadeAnimation';

const Navigation = ({
    children,
    to,
    themeStyle,
    customStyle,
    direction = null,
    delay = 0,
    fadeanim = null,
    floatanim = null,
    customDelay,
    open,
    angleInitial,
    ...props
}) => {

    let compRef = useRef(null);

    const distance = 100;

    let fadeDirection;

    switch (direction) {
        case 'left':
            fadeDirection = { x: -distance };
            break;
        case 'right':
            fadeDirection = { x: distance };
            break;
        case 'up':
            fadeDirection = { y: distance };
            break;
        case 'down':
            fadeDirection = { y: -distance };
            break;
        default:
            fadeDirection = { x: 0 };
    }

    useEffect(() => {
        gsap.from(compRef.current, 1, {
            ...fadeDirection,
            opacity: 0,
            delay
        });


        floatanim && FloatAnimation(compRef.current, delay, angleInitial);

        fadeanim &&
            gsap.timeline({ repeat: -1, defaults: { duration: customDelay, delay: delay + .7 }, smoothChildTiming: true, reverse: true })
                .to(compRef.current, { opacity: 1 })
                .to(compRef.current, { opacity: .01 })
                .to(compRef.current, { opacity: 1 });
    }, []);



    return (
        <>
            <Link
                sx={themeStyle}
                to={to}
                style={customStyle}
                ref={compRef}
                fadeanim={fadeanim}
                floatanim={floatanim}
                open={open}
                {...props}
            >
                <FadeAnimation
                    wrapperElement='div'
                    direction='null'
                    delay={.2}
                >
                    {children}
                </FadeAnimation>
            </Link>
        </>

    );
};


export default Navigation;