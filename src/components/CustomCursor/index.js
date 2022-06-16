import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import FONTS from "../../utils/fonts";

const StyledCursorText = styled.span`
  ${FONTS.BARLOW};
  color: #bbbab2;
  font-family: 'Barlow', sans-serif;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: .1em;
  opacity: 0.5;
  overflow: hidden;
  position: fixed;
  text-align: center;
  text-transform: uppercase;
  transform: translate3d(0,0,0);
  z-index: 1000;
  left: -10px;
`;

const CustomCursor = () => {
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth + 40;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight + 55;
      mainCursor.current.style.transform = `translate3d(${mouseX -
        mainCursor.current.clientWidth + 40}px, ${mouseY -
        mainCursor.current.clientHeight + 55}px, 0)`;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <>
      <div ref={mainCursor} />
      <StyledCursorText ref={secondaryCursor} >
        Loading
      </StyledCursorText>
    </>
  );
};

export default CustomCursor;