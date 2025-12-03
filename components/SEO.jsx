import Head from "next/head";

export default function SEO({ title, description }) {
  const siteTitle = title ? `${title} | Camperpixelz` : "Camperpixelz";

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description || "Camperpixelz outdoor camping brand"} />

      {/* Open Graph for Facebook / Instagram */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || "Camperpixelz outdoor camping gear and experiences"} />
      <meta property="og:type" content="website" />

      {/* Twitter preview */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}