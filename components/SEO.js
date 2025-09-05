import Head from 'next/head'

export default function SEO({ 
  title = "Jai Mata Di Coals - Premium Coal Supplier in India",
  description = "Leading coal supplier providing high-quality steam coal, coking coal, thermal coal, and anthracite coal for industries across India. Guaranteed quality and timely delivery.",
  keywords = "coal supplier, steam coal, coking coal, thermal coal, anthracite coal, coal trading, industrial coal, power plant coal, steel industry coal, India",
  image = "/images/WhatsApp Image 2025-09-04 at 14.10.26_3f88efa3.jpg",
  url = "https://your-domain.com"
}) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jai Mata Di Coals" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jai Mata Di Coals" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jai Mata Di Coals",
            "description": description,
            "url": url,
            "logo": `${url}/favicon.ico`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/jaimatadicoals",
              "https://www.linkedin.com/company/jaimatadicoals"
            ]
          })
        }}
      />
    </Head>
  )
}