import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
}

const BASE_TITLE = "Alex Chen";

export default function SEO({ title, description, ogImage, ogType = "website" }: SEOProps) {
  const fullTitle = `${title} | ${BASE_TITLE}`;

  useEffect(() => {
    document.title = fullTitle;

    const setOrCreateMeta = (attr: string, attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setOrCreateMeta("name", "description", description);
    setOrCreateMeta("property", "og:title", fullTitle);
    setOrCreateMeta("property", "og:description", description);
    setOrCreateMeta("property", "og:type", ogType);
    if (ogImage) {
      setOrCreateMeta("property", "og:image", ogImage);
    }

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + window.location.pathname);
  }, [fullTitle, description, ogImage, ogType]);

  return null;
}
