import { Box, Typography, Container, Grid, Button } from "@mui/material";
import SailingIcon from "@mui/icons-material/Sailing";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LandscapeIcon from "@mui/icons-material/Landscape";
import EcoIcon from "@mui/icons-material/Public";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function AboutUsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />

      <Box component="main" sx={{ pt: { xs: 10, md: 0 } }}>
        {/* Hero Section */}
        <Box
          component="section"
          sx={{
            position: "relative",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            mt: { xs: 0, md: "-80px" }, // Offset navbar height on desktop
          }}
        >
          <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 10,
              }}
            />
            <Box
              component="img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIVCgn0DCf7I3PN12u4e4kPI2uO2pUgmpvh1U8mI3RMOlU-1fthHXAL5tGk2i8A7-UNjJgIxSypgYks8uUPY7rzIrnHDEUg5OkUEdr5bK9ODq0n2s3OOH7q4-O0ufKHIMzjm_KoTbletrXwFB6-52Ms6wWUtrq5PTcEAyJHUiicn0DEYAnpHL65vuVJIHIX_kzJ3G7w7ISo2rdriSYgMRgCu_ZrllwpA6mNcejuQ2NxpZfn-E3xXsBblxVF8YTGeRKiYayaZ66EUU"
              alt="Luxury Gulet at Sea"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              zIndex: 20,
              textAlign: "center",
              color: "#ffffff",
              px: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "48px", md: "64px" },
                mb: 3,
                textShadow: "0 4px 30px rgba(0,0,0,0.8)",
                animation: "fadeInUp 1s ease-out",
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              {t('about.hero.title')}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "20px",
                lineHeight: "32px",
                maxWidth: "672px",
                mx: "auto",
                opacity: 0.9,
              }}
            >
              {t('about.hero.subtitle')}
            </Typography>
          </Box>
        </Box>

        {/* The Heritage Section */}
        <Box
          component="section"
          sx={{
            py: { xs: 8, md: 12 },
            px: { xs: 2, md: "80px" },
            maxWidth: "1280px",
            mx: "auto",
          }}
        >
          <Grid container spacing={{ xs: 8, md: 10 }} alignItems="center">
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "-40px",
                    left: "-40px",
                    width: "256px",
                    height: "256px",
                    backgroundColor: "#f4e0bb",
                    opacity: 0.3,
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    zIndex: -1,
                  }}
                />
                <Box
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    background: "rgba(250, 247, 242, 0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    p: 2,
                  }}
                >
                  <Box
                    component="img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlQxNiR78l6CIk4KK0Gg7VZVw8PRjYiETh5rhLrtLi9pZpTuJ54tHHHrEMPS75bF4uEpmSvlpTmVumLfX59XCG4KQE3e7zKer30UI0jKAqzbVgWSuZ8BQ1wtJuAGX5uPKlJ-QWS7sNRHXG9eMdpLe1U_h7hof6d8T0spZQaiaJbxuUIIkqXn-no5tOpdLk0v9ELsoEnWv63G0q7HVdMMCiZyt-rJmY8CvK2BcCn48I7GOnm1x1AI_oF-3m8ysu77E7nYQsJjqYZCE"
                    alt="Turkish Gulet Craftsmanship"
                    sx={{
                      borderRadius: "8px",
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: { xs: "32px", md: "48px" },
                    color: "#006071",
                    lineHeight: 1.2,
                  }}
                >
                  {t('about.heritage.title')}
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "#3e484c", lineHeight: "32px" }}>
                  {t('about.heritage.p1')}
                </Typography>
                <Typography sx={{ color: "#3e484c", lineHeight: "24px" }}>
                  {t('about.heritage.p2')}
                </Typography>
                <Box sx={{ display: "flex", gap: 4, pt: 2 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "32px",
                        fontWeight: 600,
                        color: "#006071",
                        display: "block",
                      }}
                    >
                      {t('about.heritage.stat1_value')}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#6b5d3f",
                        textTransform: "uppercase",
                      }}
                    >
                      {t('about.heritage.stat1_label')}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "32px",
                        fontWeight: 600,
                        color: "#006071",
                        display: "block",
                      }}
                    >
                      {t('about.heritage.stat2_value')}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#6b5d3f",
                        textTransform: "uppercase",
                      }}
                    >
                      {t('about.heritage.stat2_label')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Our Philosophy Section */}
        <Box
          component="section"
          sx={{
            backgroundColor: "#f6f3ee",
            py: { xs: 8, md: 12 },
            position: "relative",
          }}
        >
          {/* Top Wave */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "96px",
              backgroundColor: "#fcf9f4",
              transform: "rotate(180deg)",
              maskImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
              WebkitMaskImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            }}
          />
          <Container maxWidth="xl" sx={{ maxWidth: "1280px", px: { xs: 2, md: "80px" } }}>
            <Box sx={{ textAlign: "center", mb: 8, pt: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: { xs: "32px", md: "48px" },
                  color: "#006071",
                  mb: 2,
                }}
              >
                {t('about.philosophy.title')}
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#3e484c" }}>
                {t('about.philosophy.subtitle')}
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    background: "rgba(250, 247, 242, 0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                    p: 5,
                    textAlign: "center",
                    borderRadius: "12px",
                    borderTop: "4px solid #006071",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                >
                  <SailingIcon sx={{ fontSize: 48, color: "#006071", mb: 3 }} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      fontSize: "32px",
                      color: "#1c1c19",
                      mb: 2,
                    }}
                  >
                    {t('about.philosophy.cards.slow.title')}
                  </Typography>
                  <Typography sx={{ color: "#3e484c" }}>
                    {t('about.philosophy.cards.slow.desc')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    background: "rgba(250, 247, 242, 0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                    p: 5,
                    textAlign: "center",
                    borderRadius: "12px",
                    borderTop: "4px solid #6b5d3f",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                >
                  <RestaurantIcon sx={{ fontSize: 48, color: "#6b5d3f", mb: 3 }} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      fontSize: "32px",
                      color: "#1c1c19",
                      mb: 2,
                    }}
                  >
                    {t('about.philosophy.cards.flavors.title')}
                  </Typography>
                  <Typography sx={{ color: "#3e484c" }}>
                    {t('about.philosophy.cards.flavors.desc')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    background: "rgba(250, 247, 242, 0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                    p: 5,
                    textAlign: "center",
                    borderRadius: "12px",
                    borderTop: "4px solid #0b7a8f",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                >
                  <LandscapeIcon sx={{ fontSize: 48, color: "#0b7a8f", mb: 3 }} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      fontSize: "32px",
                      color: "#1c1c19",
                      mb: 2,
                    }}
                  >
                    {t('about.philosophy.cards.hidden.title')}
                  </Typography>
                  <Typography sx={{ color: "#3e484c" }}>
                    {t('about.philosophy.cards.hidden.desc')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* Bottom Wave */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "96px",
              backgroundColor: "#fcf9f4",
              maskImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
              WebkitMaskImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
            }}
          />
        </Box>

        {/* Meet the Captain & Crew */}
        <Box
          component="section"
          sx={{
            py: { xs: 8, md: 12 },
            px: { xs: 2, md: "80px" },
            maxWidth: "1280px",
            mx: "auto",
          }}
        >
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center" sx={{ mb: 10 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: { xs: "32px", md: "48px" },
                  color: "#006071",
                  mb: 4,
                  lineHeight: 1.2,
                }}
              >
                {t('about.crew.title')}
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#3e484c", lineHeight: "32px", mb: 3 }}>
                {t('about.crew.p1')}
              </Typography>
              <Typography sx={{ color: "#3e484c", lineHeight: "24px" }}>
                {t('about.crew.p2')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box
                      component="img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1Zv7LTeG3O5bFBZPn-UQb8YBJoJcf-OSP-0-nXHJi3ILOnz6cNYqj0ZRIHBzGrfUSDXvY5jrss9oxM9ms4eRFBx0kAP-dOb9Wa-1phN-H1lslf9I1VXaL8bV4YSMPmVALQYAo6JOuZrKUUHG7raa1T7bmZfjfu-0xpN7EbjtgI7quZG2KNh7W2PubPEtm79_GPLNlsPLe1ApGS5hGIDll4kl_2P0o2lltuZSxR-eT-vgOazGnPTA0CmEn8TuIFc7hPA8mRQBIvtQ"
                      alt="Captain Mehmet"
                      sx={{
                        width: "100%",
                        height: "288px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 600,
                          fontSize: "32px",
                          color: "#006071",
                        }}
                      >
                        {t('about.crew.c1.name')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#6b5d3f",
                          textTransform: "uppercase",
                        }}
                      >
                        {t('about.crew.c1.role')}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 6 }}>
                    <Box
                      component="img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1m2mPkmXjt8qScjGs2ZnLpc_Fvjz5smM7bFrJzM2sFxmhQ3NYxyh5HWM7ggWbVRQ5EmOYxPlL3yKgqxU8yUkC1ktLosehjT_Aji0PBo4FkqTdoW3hLh_DZ74EA-Y-557eG15emn1OAwjmA1F1HjRosWANPK4XUdEyd8tCIrM7kfnjUYtGRPcIL6YC8_oKe8r-uvu6VzVSRqrQzdSXnXpUuAuncX7dvhEiBN0iw6gUxNA8X9LbC-d1X5wjeDi-KPdUItmPzbiMmug"
                      alt="Chef Ayşe"
                      sx={{
                        width: "100%",
                        height: "288px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 600,
                          fontSize: "32px",
                          color: "#006071",
                        }}
                      >
                        {t('about.crew.c2.name')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#6b5d3f",
                          textTransform: "uppercase",
                        }}
                      >
                        {t('about.crew.c2.role')}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Our Fleet */}
        <Box
          component="section"
          sx={{
            py: { xs: 8, md: 12 },
            backgroundColor: "rgba(229, 226, 221, 0.5)",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1280px", px: { xs: 2, md: "80px" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "flex-end" },
                mb: 8,
                gap: 3,
              }}
            >
              <Box sx={{ maxWidth: "600px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: { xs: "32px", md: "48px" },
                    color: "#006071",
                    mb: 2,
                  }}
                >
                  {t('about.fleet.title')}
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "#3e484c" }}>
                  {t('about.fleet.subtitle')}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  borderColor: "#006071",
                  color: "#006071",
                  borderRadius: "999px",
                  px: 4,
                  py: 1.5,
                  "&:hover": { backgroundColor: "#006071", color: "#ffffff" },
                }}
              >
                {t('about.fleet.button')}
              </Button>
            </Box>
            <Grid container spacing={3}>
              {/* Gulet 1 */}
              <Grid item xs={12} md={6}>
                <Box sx={{ cursor: "pointer", "&:hover img": { transform: "scale(1.1)" } }}>
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px",
                      aspectRatio: "4/3",
                      mb: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCia0rlLsuw6OF_TeAgbOBuefvSBjHqBSWQ4VmNaOpysWkTF1nKmC97zoIFWVT6-TJdDB2vMmZKWhcIAQ6LGtzAL8pPBHdcQPQ2mTxvFMx7kVxpuqp9j09GpnoEhrqMTc81oFNraCco8pYmV2haoyVsKAtAHc7Hm0__7UFEv93RbxsrcJMG-WFfun6tbOyoegm6ACqOrdpZgLNWw3_iTq7nKoRYyiK3iEsjs9Eqa85ohNP-DrzSoLAovsHZ8Qym8_h4Iera8gIH7TI"
                      alt="Ege Yıldızı Gulet"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 24,
                        left: 24,
                        backgroundColor: "#006071",
                        color: "#ffffff",
                        px: 2,
                        py: 0.5,
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t('about.fleet.f1.badge')}
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 600,
                          fontSize: "32px",
                          color: "#006071",
                        }}
                      >
                        {t('about.fleet.f1.name')}
                      </Typography>
                      <Typography sx={{ color: "#3e484c" }}>{t('about.fleet.f1.desc')}</Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#6b5d3f", display: "block" }}>
                        {t('about.fleet.f1.spec1')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#3e484c",
                          textTransform: "uppercase",
                        }}
                      >
                        {t('about.fleet.f1.spec2')}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              {/* Gulet 2 */}
              <Grid item xs={12} md={6}>
                <Box sx={{ cursor: "pointer", "&:hover img": { transform: "scale(1.1)" } }}>
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px",
                      aspectRatio: "4/3",
                      mb: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMkQtCG8k13WWEmLMIfYIul4slxwXy2nmS6eC6P8NZWxClfsjE-CVBI_Dxl9t5AMULN9F0cP3g_g3wPq3ctd0I4s6COeGHa_9ColNGtalz-LI_arRUXev3Xt_m1lxBYte1lNN1_bSxBfst7Z-alhLID6UOGXZkYjHc7bYZq7nvVs1Wmljgn773GS86eG859xH-Mm42Gs2w_O_JkD0WuYYWv-OxT-h9rk0bEp53X9cOqb9KCo4pMkz4ldE3Dqk8GLRrC2Fuk5OUS6M"
                      alt="Mavi Düş Gulet"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 24,
                        left: 24,
                        backgroundColor: "#6b5d3f",
                        color: "#ffffff",
                        px: 2,
                        py: 0.5,
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t('about.fleet.f2.badge')}
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 600,
                          fontSize: "32px",
                          color: "#006071",
                        }}
                      >
                        {t('about.fleet.f2.name')}
                      </Typography>
                      <Typography sx={{ color: "#3e484c" }}>{t('about.fleet.f2.desc')}</Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#6b5d3f", display: "block" }}>
                        {t('about.fleet.f2.spec1')}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#3e484c",
                          textTransform: "uppercase",
                        }}
                      >
                        {t('about.fleet.f2.spec2')}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Sustainability Section */}
        <Box
          component="section"
          sx={{
            py: { xs: 8, md: 12 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="xl" sx={{ maxWidth: "1280px", px: { xs: 2, md: "80px" } }}>
            <Box
              sx={{
                background: "rgba(250, 247, 242, 0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "24px",
                p: { xs: 4, md: 8 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 6,
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#006071" }}>
                  <EcoIcon sx={{ fontSize: 32 }} />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t('about.sustainability.tag')}
                  </Typography>
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: { xs: "32px", md: "48px" },
                    color: "#006071",
                  }}
                >
                  {t('about.sustainability.title')}
                </Typography>
                <Typography sx={{ fontSize: "20px", color: "#3e484c", lineHeight: "32px" }}>
                  {t('about.sustainability.desc')}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: "#6b5d3f" }} />
                    <Typography sx={{ color: "#3e484c" }}>
                      {t('about.sustainability.points.0')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: "#6b5d3f" }} />
                    <Typography sx={{ color: "#3e484c" }}>
                      {t('about.sustainability.points.1')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: "#6b5d3f" }} />
                    <Typography sx={{ color: "#3e484c" }}>
                      {t('about.sustainability.points.2')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  height: "320px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover img": { transform: "scale(1.1)" },
                }}
              >
                <Box
                  component="img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDTjicG0ty84ivxPgLxbBCI4_o_YbUvVGj2XFM3pm8xSdKJ25lsrkATYO2SRJQXpPn3aQwC9Xpkq6moNqL2qSru-pwUuBdu-3tlugczevnh_qxw1YWo4XKtXOYuahkVd5a5EAvyMKbgMZcxOGTd4gfLwRsD6wDJ83NoZs4jDB3BfdKLKfi1GjzHCfgkT4HNg3XCN2PLyuvuVNhz-2UWOpHswAO99j_9qA-LCrVHKgzySGhUf9MIv5GKijJO2R2flV2Y4gKBB3LfMM"
                  alt="Mediterranean Underwater Conservation"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 96, 113, 0.2)",
                    mixBlendMode: "overlay",
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
