import { Helmet } from "react-helmet-async";

const SITE_URL = "https://pratik-aggarwal-website.vercel.app";
const SITE_NAME = "Pratik Aggarwal";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const AUTHOR = "Pratik Aggarwal";
const BASE_KEYWORDS =
  "disability inclusion, invisible disabilities, disability sensitization, accessible development, fibromyalgia, chronic illness, inclusive policy, Pratik Aggarwal, ASTHA, Blooming in Pain";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string;
}

export function PageMeta({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
}: PageMetaProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;
  const allKeywords = keywords ? `${keywords}, ${BASE_KEYWORDS}` : BASE_KEYWORDS;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={AUTHOR} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
