import React from 'react'
import { Container } from '../../globalStyles'
import { MdWork } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { IconContext } from 'react-icons/lib';
import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';

import {
  HeroSec,
  HeroRow,
  HeroColumn,
  TextWrapper,
  Heading,
  SubHeading,
  BtnLink,
  Button,
  ImgWrapper,
  Img,
  Text,
  Span
} from './HeroElements';

const Hero = (props) => {
  const {
		id,
    heading,
    subHeading, 
    text,
    reverse,
    button1,
    button2,
    img
	} = props;
  const fadeLeft = {
    hidden: { opacity: 0, x: -100},
    visible: {opacity: 1, x: 0}
  };

  return (
    <>
    <HeroSec id={id}>
      <Container>
        <HeroRow reverse={reverse}>
          <HeroColumn>
            <TextWrapper>
            <Heading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
             {heading}
            </Heading>
              <SubHeading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                {subHeading}
              </SubHeading>
              <Text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >{text}<Span></Span><Typewriter
              options={{
              strings: ['Graduate Student', 'Cybersecurity Student', 'Computer Science Graduate', 'Web Developer'],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: "|",
                        }}/></Text>
              
                <BtnLink
                    href="https://drive.google.com/file/d/12oFcGkvyTOmO4tnotnTi-GO6eMmAcWmw/view?usp=sharing"
                    target="_blank">
                    <Button
                      variants={fadeLeft}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 1 }}
                    >{button1} 
                    <IconContext.Provider
                    value={{
                      size: "20px",
                      style: { verticalAlign: "middle", margin:"0px" },
                    }}>
                    {" "}
                    <MdWork/>
                  </IconContext.Provider>
                  </Button>
                </BtnLink>

                <BtnLink
                    href="https://github.com/wilmat9322"
                    target="_blank"
                >
                    <Button
                      variants={fadeLeft}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 1 }}
                    >{button2} 
                    <IconContext.Provider
                    value={{
                      size: "20px",
                      style: { verticalAlign: "middle", margin:"0px" },
                    }}
                  >
                    {" "}
                    <VscGithub/>
                  </IconContext.Provider>
                  </Button>
                </BtnLink>
            </TextWrapper>
          </HeroColumn>
          <HeroColumn>
            <ImgWrapper>
              <Img src={img} alt="William Matos" whileTap={{ scale: 0.9}} draggable="false"/>
            </ImgWrapper>
          </HeroColumn>
        </HeroRow>
      </Container>
    </HeroSec>
    </>
  )
}

export default Hero