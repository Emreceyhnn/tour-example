import { Box, Typography, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlH10vTHwAhUwKLi6yr_srs_c-K4eo3e1_M6ZMLjn-fVoi33YhNboWbFji-kKOm-6yXD5G4eK0K0L-k8P6kNa7XyIrbPufNU6Q9Exk3ZvAsUpHctaFSuUpEIs0en93APFW1OIqlyQ4Ghd50QlRESSpiO12ozmS7RBY0NrSdrjFyfKEPD8duXnjEOhSDAts-lU6V-307nA9cA1Eoyj9Bm_Vin_QHkwCUDxMtRV3CVG6jSIM1H852uK1dwCsjtgozkAr_cnROwt-Wgk",
    alt: "Boat on clear water",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLLQpJtD_SGm8opxIJcvQphuNwN86_hR4rJ3rd0oZ38X8uZDGMXSfm4bgZIf-gEJl7gz8z7iuCZ8Oj4XcCIfCKYsK6kZWixru4EcI7iLSHBtVG0fEOByvz8xTVD0Q56WjHGiEw_TGEnZvFawjBPoJ7drLOtdohLE47eG7iLwtL3Q5SzQVT8lnntVjYhOwmpPQw5PbuSEUi6XIVZJMAF9I_emaes-RKzQ1uZZOVdZnylPp27RFQ5L7X07fe89Y4N-g1fPL_uueeUg",
    alt: "Mediterranean food",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKMh9c0gOR4y-Stj1f9pVsgRipDSjrG1LMoeoDDC8nF5qGXXwYnUSOhSId_sGUNmLiVSrp0vTOqm4ag573T_NSmpO1W2UQNfAYovvWeRiI0RrrYJvlyuUTphote593fcAw4qe__GPLU5g0uCL6aON7suWxSUvGpivvDcBv9FMFO6LasMBzkOniZ9pyLSJuRV2JzGQAnakM5PKOqxTdt0Q5bqUpoLBaZ1LwzOOteguQ6lE7scVqGP8bRmsmawS7fsruBdZ18k7ntGM",
    alt: "Sunset over the bay",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3pWVsnWfXoJVW9Yo6ql10Q9Hq4MWKxSy5M8P3EMidxlMeaKGcoq47J0NP5lb5EIEgu52L-r816hQoUje1pQtt_8e-OVrDDcrk-cqnVeeH4G1X_F7c9s3uMw9yK-ydMqB2YchRC4tOZP8bLNSdy1YixXndOcDGGcI8zf1-t6g4ROPS-90ghy3tN7hcRQtPk9OlpzBH5aflfxUJ4aSEcl_XCInX-iU45O_06j8yvy2-Ul6h7fIIhyn4Dy9WoMH8YADi3OpaWCId3o0",
    alt: "Coastal cliffs",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHo2dIDTRMh3iSgUffeFwOZmIIe1OqabfJ2DwtKhHt8M0N50cVbaoZLJcKrUggrYncYOjbHrD7i5V6fMiHDl4HYP52sOFFV9x_os1ft_bM3tHGuSS6NnSo1p8OBiNq7ltRM7v2tL2p4dPnibUMCn5yUoTYzmRNJVu5rV7ApIB7xXFTwvVnivdPbs1tDa0UX_KleLhFS5emIYuwR5Wj6eP7JOhp1rF3ZBc6v3TS9Qa6Z8F90itlQtJgCGqjLFImeW9CNFbsGGGIdKU",
    alt: "Fresh fruits on deck",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ076e_j-iS2fymxwSEOIRHJZh6VMFSVqI0C4x1jxcEYIde7rZ16FK1bOFxYtDAbRRWEt2DRK2RNqeqMGP1JvjvfF0kxLDHhpCA-G8rGTiXbQi7WjYuoDP7H1YrdlP_VXyPBMf4ND7BWae024UPEiY1bYZAt7ZUb3pMGKezwMSSnCeGRvH4crWZ8eVygd9TXKDVk9A8hWKiubdqbtwIihrdQH6W7uKi2xv5gDA42AK5tW8F8UaHcCqId7XmIn3jJKuy6IjqTgkUio",
    alt: "Turquoise cove",
  },
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

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: "80px" },
        backgroundColor: "#fcf9f4",
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: "1440px" }}>
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
              {t('gallery.title')}
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
              {t('gallery.subtitle')}
            </Typography>
          </Box>
        </FadeInBox>

        <FadeInBox delay={200}>
          <Box
            sx={{
              columnCount: { xs: 1, md: 2, lg: 3 },
              columnGap: "16px",
              "& > *": {
                breakInside: "avoid",
                mb: 2,
              },
            }}
          >
            {galleryImages.map((img, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "inline-block",
                  width: "100%",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    opacity: 0.92,
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: "100%",
                    display: "block",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            ))}
          </Box>
        </FadeInBox>
      </Container>
    </Box>
  );
}
