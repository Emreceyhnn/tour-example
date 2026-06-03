import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";

const HERO_IMAGE = "landing hero.webp";
export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${HERO_IMAGE}')`,
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          px: 3,
          maxWidth: "900px",
          animation: "fadeInUp 1s ease-out",
          "@keyframes fadeInUp": {
            from: {
              opacity: 0,
              transform: "translateY(30px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: "42px", md: "64px" },
            lineHeight: { xs: "50px", md: "72px" },
            letterSpacing: "-0.02em",
            color: "#fff",
            mb: 3,
            textShadow: "0 4px 30px rgba(0,0,0,0.8)",
          }}
        >
          {t('hero.title')}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: "24px", md: "48px" },
            lineHeight: { xs: "32px", md: "56px" },
            color: "#fff",
            mb: 5,
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          {t('hero.subtitle')}
        </Typography>

        {/* Scroll Down Arrow */}
        <Box
          component="a"
          href="#routes"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.4)",
            color: "#fff",
            textDecoration: "none",
            transition: "all 0.3s ease",
            animation: "bounce 2s infinite",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
            },
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
              "40%": { transform: "translateY(-12px)" },
              "60%": { transform: "translateY(-6px)" },
            },
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 28 }} />
        </Box>
      </Box>

      {/* Rounded divider at the bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "64px",
          backgroundColor: "#fcf9f4",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          zIndex: 20,
        }}
      />
    </Box>
  );
}
