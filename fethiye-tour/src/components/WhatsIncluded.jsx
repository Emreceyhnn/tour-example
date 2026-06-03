import { Box, Typography, Container, Grid } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SailingIcon from "@mui/icons-material/Sailing";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const items = [
  { icon: <RestaurantIcon sx={{ fontSize: 28 }} />, key: "breakfast" },
  { icon: <LunchDiningIcon sx={{ fontSize: 28 }} />, key: "lunch" },
  { icon: <SailingIcon sx={{ fontSize: 28 }} />, key: "snorkeling" },
  {
    icon: <DirectionsBoatFilledIcon sx={{ fontSize: 28 }} />,
    key: "crew",
  },
  { icon: <WbTwilightIcon sx={{ fontSize: 28 }} />, key: "sunset" },
];

function FadeInBox({ children, delay = 0 }) {
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
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}

export default function WhatsIncluded() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: "80px" },
        backgroundColor: "#f6f3ee",
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: "1280px" }}>
        <FadeInBox>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "32px", md: "48px" },
                lineHeight: { xs: "40px", md: "56px" },
                color: "#1c1c19",
                mb: 2,
              }}
            >
              {t('included.title')}
            </Typography>
            <Typography
              sx={{
                color: "#3e484c",
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: "32px",
                maxWidth: "640px",
                mx: "auto",
              }}
            >
              {t('included.subtitle')}
            </Typography>
          </Box>
        </FadeInBox>

        <FadeInBox delay={200}>
          <Grid container spacing={4} justifyContent="center">
            {items.map((item, index) => (
              <Grid item xs={6} md={2.4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      backgroundColor: "#0b7a8f",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: "0 8px 24px rgba(11, 122, 143, 0.3)",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "#1c1c19",
                    }}
                  >
                    {t(`included.${item.key}`)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </FadeInBox>
      </Container>
    </Box>
  );
}
