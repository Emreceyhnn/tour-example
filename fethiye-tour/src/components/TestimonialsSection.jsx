import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

const testimonialKeys = ['t1', 't2', 't3'];

function FadeInBox({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {children}
    </Box>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonialKeys.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: '80px' },
        backgroundColor: '#fcf9f4',
        overflow: 'hidden',
      }}
    >
      <FadeInBox>
        <Box
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <FormatQuoteIcon
            sx={{
              fontSize: 56,
              color: 'rgba(0, 96, 113, 0.3)',
              mb: 3,
              display: 'block',
              mx: 'auto',
            }}
          />

          {/* Testimonial text with fade transition */}
          <Box sx={{ position: 'relative', minHeight: { xs: '180px', md: '140px' } }}>
            {testimonialKeys.map((key, i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  opacity: active === i ? 1 : 0,
                  transition: 'opacity 0.6s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: { xs: '20px', md: '28px' },
                    lineHeight: { xs: '30px', md: '40px' },
                    color: '#1c1c19',
                    fontStyle: 'italic',
                    mb: 4,
                  }}
                >
                  {t(`testimonials.${key}.text`)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#3e484c',
                  }}
                >
                  {t(`testimonials.${key}.author`)}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
            {testimonialKeys.map((_, i) => (
              <Box
                key={i}
                component="button"
                onClick={() => setActive(i)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: active === i ? '#0B4A5C' : '#e5e2dd',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </FadeInBox>
    </Box>
  );
}
