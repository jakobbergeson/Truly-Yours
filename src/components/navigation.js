/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useRef } from "react";
import FloatAnimation from "./floatAnimation";
import { gsap } from "gsap";
import { Link } from "gatsby";


const Navigation = ({
    children,
    to,
    themeStyle,
    customStyle,
    direction = null,
    delay = 0,
    fadeInOut = null,
    floatInOut = null,
    customDelay,
    open,
    angleInitial,
    ...props
}) => {

    let compRef = useRef(null);

    const distance = 100;

    let fadeDirection;

    switch (direction) {
        case "left":
            fadeDirection = { x: -distance };
            break;
        case "right":
            fadeDirection = { x: distance };
            break;
        case "up":
            fadeDirection = { y: distance };
            break;
        case "down":
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


        floatInOut && FloatAnimation(compRef.current, delay, angleInitial);

        fadeInOut &&
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
                fadeInOut={fadeInOut}
                open={open}
                {...props}
            >
                {children}
            </Link>
        </>

    );
};


export default Navigation;