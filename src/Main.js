import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { Linear } from "gsap/gsap-core";
import nature from "./images/nature.jpg";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => `#${props.color}`};
  display: flex;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 600px;
  height: 300px;
  background-color: transparent;
  margin: 200px 0 0 170px;

  h1 {
    color: white;
    font-weight: lighter;
  }
`;

const AbsoluteContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightblue;
  z-index: 3;
`;

const ImageContainer = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  justify-content: center;
  margin-right: 400px;
  margin-top: 100px;
`;

const TextContainerScroll = styled.div`
  width: 500px;
  height: 200px;
  color: white;
  margin-left: 700px;
  margin-top: 300px;

  h1 {
    font-size: 50px;
  }
  p {
    font-size: 24px;
  }
`;
const Main = () => {
  const mountRef = useRef(null);
  const container2ref = useRef(null);
  const textRef = useRef(null);
  const mountAnimation = () => {
    const tl = gsap.timeline();
    tl.from(mountRef.current, { backgroundColor: "#0d0d0d" })
      .from(mountRef.current.childNodes[0].childNodes[0], {
        y: 100,
        opacity: 0,
        delay: 0.1,
        // skewY: "5deg",
        ease: Linear.easeNone,
      })
      .from(mountRef.current.childNodes[0].childNodes[0].nextSibling, {
        y: 50,
        opacity: 0,
        // skewY: "5deg",
        ease: Linear.easeNone,
        delay: 0,
      });
  };

  const anim = () => {
    const tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container2ref.current,
          start: "top top",
          pin: container2ref.current,
          markers: true,
          scrub: 1,
          // end: "+=10000",
        },
      })
      .to(container2ref.current.childNodes[0].childNodes[0], { y: 100 })
      .to(container2ref.current.childNodes[0].childNodes[0], {
        x: 500,
        duration: 10,
      });
  };

  const anim2 = () => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 1,
          markers: true,
        },
      })
      .to(textRef.current.childNodes[0], { y: -200, ease: Linear.easeNone });
  };

  const anim3 = () => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 1,
          markers: true,
        },
      })
      .to(textRef.current.childNodes[1], { y: 250, ease: Linear.easeNone });
  };

  useEffect(() => {
    mountAnimation();
    anim();
    anim2();
    anim3();
  }, []);

  return (
    <>
      <Container color='212721' className='hahaClass' ref={mountRef}>
        <TextContainer>
          <h1>Eto ay isang text</h1>
          <h1>pangalawang text</h1>
        </TextContainer>
      </Container>
      <Container ref={container2ref} color='deb887'>
        <AbsoluteContainer>
          <h1>Hello??????</h1>
          <h2>HAHAHH</h2>
        </AbsoluteContainer>
      </Container>
      <Container ref={textRef} color='0d0d0d'>
        <TextContainerScroll>
          <h1>Hello Main Txt</h1>
          <p>Subtext lang to ha hahah grabe yan</p>
        </TextContainerScroll>
        <ImageContainer>
          <img src={nature} alt=''></img>
        </ImageContainer>
      </Container>
      <Container color='0d0d0d'></Container>
    </>
  );
};

export default Main;
