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
  background-color: #fafafa;
  border-radius: 25px;
  box-shadow: 0 3px 2px gray, 0 1px 10px;
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360,
    transition: { type: "spring", delay: 0.5
  }}
}

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}

export default App;
