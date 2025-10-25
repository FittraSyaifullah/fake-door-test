import { motion } from 'motion/react';

export function CADWireframe() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
      {/* Main large cube */}
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] text-[#64748B]"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Main cube wireframe */}
        <g strokeWidth="1.5" stroke="currentColor">
          {/* Front face */}
          <line x1="150" y1="150" x2="450" y2="150" />
          <line x1="450" y1="150" x2="450" y2="450" />
          <line x1="450" y1="450" x2="150" y2="450" />
          <line x1="150" y1="450" x2="150" y2="150" />
          
          {/* Back face */}
          <line x1="100" y1="100" x2="400" y2="100" />
          <line x1="400" y1="100" x2="400" y2="400" />
          <line x1="400" y1="400" x2="100" y2="400" />
          <line x1="100" y1="400" x2="100" y2="100" />
          
          {/* Connecting lines */}
          <line x1="150" y1="150" x2="100" y2="100" />
          <line x1="450" y1="150" x2="400" y2="100" />
          <line x1="450" y1="450" x2="400" y2="400" />
          <line x1="150" y1="450" x2="100" y2="400" />
          
          {/* Internal structure */}
          <line x1="150" y1="150" x2="400" y2="400" opacity="0.3" />
          <line x1="450" y1="150" x2="100" y2="400" opacity="0.3" />
          <circle cx="300" cy="300" r="80" opacity="0.4" />
          <circle cx="300" cy="300" r="40" opacity="0.4" />
          
          {/* Dimension lines */}
          <line x1="150" y1="480" x2="450" y2="480" strokeDasharray="4 4" opacity="0.5" />
          <line x1="480" y1="150" x2="480" y2="450" strokeDasharray="4 4" opacity="0.5" />
        </g>
        
        {/* Measurement points */}
        <g fill="currentColor">
          <circle cx="150" cy="150" r="3" />
          <circle cx="450" cy="150" r="3" />
          <circle cx="450" cy="450" r="3" />
          <circle cx="150" cy="450" r="3" />
          <circle cx="100" cy="100" r="3" />
          <circle cx="400" cy="100" r="3" />
          <circle cx="400" cy="400" r="3" />
          <circle cx="100" cy="400" r="3" />
        </g>
      </motion.svg>

      {/* Smaller pyramid shape - top right */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[10%] top-[15%] opacity-[0.03] text-[#64748B]"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <g strokeWidth="1" stroke="currentColor">
          <line x1="100" y1="30" x2="40" y2="170" />
          <line x1="100" y1="30" x2="160" y2="170" />
          <line x1="40" y1="170" x2="160" y2="170" />
          <line x1="40" y1="170" x2="100" y2="120" opacity="0.4" />
          <line x1="160" y1="170" x2="100" y2="120" opacity="0.4" />
        </g>
        <g fill="currentColor">
          <circle cx="100" cy="30" r="2" />
          <circle cx="40" cy="170" r="2" />
          <circle cx="160" cy="170" r="2" />
        </g>
      </motion.svg>

      {/* Smaller hexagon - middle left */}
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[15%] top-[40%] opacity-[0.03] text-[#64748B]"
        animate={{
          rotateY: [0, -360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <g strokeWidth="1" stroke="currentColor">
          <polygon points="75,20 120,45 120,95 75,120 30,95 30,45" opacity="0.6" />
          <polygon points="75,40 105,55 105,85 75,100 45,85 45,55" opacity="0.4" />
          <line x1="75" y1="20" x2="75" y2="40" />
          <line x1="120" y1="45" x2="105" y2="55" />
          <line x1="120" y1="95" x2="105" y2="85" />
          <line x1="75" y1="120" x2="75" y2="100" />
        </g>
      </motion.svg>

      {/* Small gear-like shape - bottom right */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[20%] bottom-[20%] opacity-[0.03] text-[#64748B]"
        animate={{
          rotateZ: [0, -360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <g strokeWidth="1" stroke="currentColor">
          <circle cx="60" cy="60" r="35" opacity="0.5" />
          <circle cx="60" cy="60" r="20" opacity="0.6" />
          <line x1="60" y1="20" x2="60" y2="35" strokeDasharray="2 2" />
          <line x1="60" y1="85" x2="60" y2="100" strokeDasharray="2 2" />
          <line x1="20" y1="60" x2="35" y2="60" strokeDasharray="2 2" />
          <line x1="85" y1="60" x2="100" y2="60" strokeDasharray="2 2" />
        </g>
      </motion.svg>

      {/* Small tetrahedron - top left */}
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[25%] top-[25%] opacity-[0.03] text-[#64748B]"
        animate={{
          rotateX: [0, 360],
          rotateZ: [0, 180],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <g strokeWidth="0.8" stroke="currentColor">
          <line x1="50" y1="20" x2="20" y2="80" />
          <line x1="50" y1="20" x2="80" y2="80" />
          <line x1="20" y1="80" x2="80" y2="80" />
          <line x1="50" y1="20" x2="50" y2="60" opacity="0.4" />
          <circle cx="50" cy="60" r="3" opacity="0.5" />
        </g>
      </motion.svg>
    </div>
  );
}
