import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const Box = styled(motion.div)`
  width: 350px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 3px 2px rgba(255, 255, 255, 0.3), 0 1px 10px;
`;
const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const boxVars = {
  hover: (custom: number) => ({
    scale: 0.9
  })
};

function App() {
  const [id, setId] = useState<null|string>(null);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) =>
          <Box
            onClick={() => setId(n)}
            key={n}
            layoutId={n}
            variants={boxVars}
            custom={n}
            whileHover="hover"
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          />
        )}
      </Grid>
      <AnimatePresence>
        { id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ backgroundColor: "#11D086" }}/>
          </Overlay>
        ) : null }
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
