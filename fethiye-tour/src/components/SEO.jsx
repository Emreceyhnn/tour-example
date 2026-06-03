import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function SEO({ titleKey, descKey, canonical, image = '/logo.svg' }) {
  const { t } = useTranslation();
  // Provide fallbacks in case keys are not found or not passed
  const title = titleKey ? `${t(titleKey)} | Mavi Rota` : "Mavi Rota - Koy Koy Fethiye | Luxury Gulet Tours";
  const description = descKey ? t(descKey) : "Discover hidden bays and endless blue with luxury gulet tours along the Mediterranean coast.";
  
  const siteUrl = "https://mavirota.com";
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageUrl = `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {canonical && <link rel="canonical" href={url} />}
    </Helmet>
  );
}
