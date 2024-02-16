const DrawSection = ({ menuState, setCircles, circles }) => {
    
    const handleMouseMove = (event) => {
      if (menuState === 'close') {
        const newCircle = {
          cx: event.nativeEvent.layerX,
          cy: event.nativeEvent.layerY,
          r: 200,
        };
        setCircles([...circles, newCircle]);
      }
    };
  
    return (
      <div>
        <svg className="drawsection" onMouseMove={handleMouseMove} height="100%" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="clippath">
            {circles.map((circle, index) => (
              <circle key={index} cx={circle.cx} cy={circle.cy} r={circle.r} />
            ))}
          </clipPath>
        </svg>
      </div>
    );
  };

  export default DrawSection;