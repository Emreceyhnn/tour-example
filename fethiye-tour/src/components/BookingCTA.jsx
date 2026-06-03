import { Box, Typography, Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function FadeInBox({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </Box>
  );
}

export default function BookingCTA() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="booking"
      sx={{
        position: "relative",
        py: { xs: 10, md: 12 },
        px: { xs: 2, md: "80px" },
        backgroundColor: "#0B4A5C",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Noise overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      <FadeInBox>
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            maxWidth: "750px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: "32px", md: "48px" },
              lineHeight: { xs: "40px", md: "56px" },
              color: "#fff",
              mb: 3,
            }}
          >
            {t('booking.title')}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: "32px",
              color: "rgba(255, 255, 255, 0.9)",
              mb: 5,
            }}
          >
            {t('booking.subtitle')}
          </Typography>

          <Button
            variant="contained"
            href="https://wa.me/1234567890"
            target="_blank"
            startIcon={<ChatIcon sx={{ fontSize: 24 }} />}
            sx={{
              backgroundColor: "#fcf9f4",
              color: "#0B4A5C",
              fontWeight: 700,
              fontSize: "18px",
              px: 4,
              py: 2,
              borderRadius: "999px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              animation: "pulseWhatsapp 2s infinite",
              "@keyframes pulseWhatsapp": {
                "0%": { boxShadow: "0 0 0 0 rgba(11, 122, 143, 0.7)" },
                "70%": { boxShadow: "0 0 0 15px rgba(11, 122, 143, 0)" },
                "100%": { boxShadow: "0 0 0 0 rgba(11, 122, 143, 0)" },
              },
              "&:hover": {
                backgroundColor: "#f6f3ee",
                transform: "scale(1.05)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
              },
              transition: "transform 0.3s ease",
            }}
          >
            {t('booking.button')}
          </Button>
        </Box>
      </FadeInBox>

      {/* Wave divider */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "80px" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.34,196.38,109.11C238.41,102.55,281.33,80.78,321.39,56.44Z"
            fill="#e5e2dd"
          />
        </svg>
      </Box>
    </Box>
  );
}
