import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 0 3px 2px rgba(255, 255, 255, 0.3), 0 1px 10px;
`;

const boxVars = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "#1dd1a1" }
}

function App() {
  return (
    <Wrapper>
      <Box drag variants={boxVars} whileHover="hover" whileTap="click" whileDrag="drag"/>
    </Wrapper>
  );
}

export default App;
