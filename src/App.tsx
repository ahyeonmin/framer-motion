import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  box-shadow: 0 3px 2px rgba(255, 255, 255, 0.3), 0 1px 10px;
`;

const boxVars = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {  }
}

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVars}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
