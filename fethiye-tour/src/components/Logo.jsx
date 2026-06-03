import { Box } from '@mui/material';

export default function Logo({ size = 48, scrolled = true, ...props }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        transition: 'width 0.3s ease, height 0.3s ease',
      }}
      {...props}
    >
      <circle cx="50" cy="50" r="15" fill="none" stroke={scrolled ? "#0B7A8F" : "#FFFFFF"} strokeWidth="1.5" />
      <path
        d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M75 25 L25 75"
        stroke={scrolled ? "#0B7A8F" : "#FFFFFF"}
        strokeWidth="1"
      />
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke={scrolled ? "#E8D5B0" : "rgba(255,255,255,0.6)"}
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <g fill="#E8654A">
        <circle cx="50" cy="15" r="2" />
        <circle cx="50" cy="85" r="2" />
        <circle cx="15" cy="50" r="2" />
        <circle cx="85" cy="50" r="2" />
      </g>
      <path d="M50 5 L53 12 L47 12 Z" fill={scrolled ? "#0B7A8F" : "#FFFFFF"} />
      <text
        x="50"
        y="55"
        fontFamily="serif"
        fontSize="6"
        textAnchor="middle"
        fill={scrolled ? "#1C2B35" : "#FFFFFF"}
      >
        N
      </text>
    </Box>
  );
}
