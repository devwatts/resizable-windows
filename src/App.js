// App.js or any other component file
import React, { useRef } from 'react';
import './App.css';
import useResizable from './useResizableHook'; // make sure the path is correct

function App() {
  // Create refs for each box and its resizers
  const ref = useRef(null);
  const refLeft = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);

  const ref2 = useRef(null);
  const refLeft2 = useRef(null);
  const refTop2 = useRef(null);
  const refRight2 = useRef(null);
  const refBottom2 = useRef(null);

  const ref3 = useRef(null);
  const refLeft3 = useRef(null);
  const refTop3 = useRef(null);
  const refRight3 = useRef(null);
  const refBottom3 = useRef(null);


  // Use the custom hook to make the element resizable
  useResizable(ref, refLeft, refTop, refRight, refBottom);
  useResizable(ref2, refLeft2, refTop2, refRight2, refBottom2);
  useResizable(ref3, refLeft3, refTop3, refRight3, refBottom3);

  return (
    <div className="container">
      <div className='box'>
        <div ref={ref} className="resizeable">
          <div ref={refLeft} className="resizer resizer-l"></div>
          <div ref={refTop} className="resizer resizer-t"></div>
          <div ref={refRight} className="resizer resizer-r"></div>
          <div ref={refBottom} className="resizer resizer-b"></div>
        </div>
        <div ref={ref2} className="resizeable-2">
          <div ref={refLeft2} className="resizer resizer-l"></div>
          <div ref={refTop2} className="resizer resizer-t"></div>
          <div ref={refRight2} className="resizer resizer-r"></div>
          <div ref={refBottom2} className="resizer resizer-b"></div>
        </div>
        <div ref={ref3} className="resizeable-3">
          <div ref={refLeft3} className="resizer resizer-l"></div>
          <div ref={refTop3} className="resizer resizer-t"></div>
          <div ref={refRight3} className="resizer resizer-r"></div>
          <div ref={refBottom3} className="resizer resizer-b"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
