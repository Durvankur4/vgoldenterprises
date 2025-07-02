import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEOHead = ({ 
  title = "V-Gold Enterprises - Premium Gym Solutions & Flooring in India | Professional Gym Equipment Services",
  description = "Leading premium gym solutions provider in India. Professional rubber flooring, interlocking tiles, competition mats & equipment upholstery. 15+ years experience delivering premium gym solutions to 500+ fitness centers nationwide.",
  keywords = "premium gym solutions India, gym flooring India, rubber gym flooring, interlocking gym tiles, gym equipment upholstery, fitness center flooring, gym floor installation, commercial gym flooring, rubber roll flooring, premium gym renovation services, fitness equipment repair, professional gym solutions",
  canonicalUrl = "https://vgoldenterprises.com"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
    
    // Set canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:site_name', content: 'V-Gold Enterprises - Premium Gym Solutions' },
      { property: 'og:locale', content: 'en_IN' }
    ];
    
    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    
    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ];
    
    twitterTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    
    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "V-Gold Enterprises - Premium Gym Solutions",
      "description": "Premium gym solutions including professional flooring and upholstery services",
      "url": canonicalUrl,
      "telephone": "+91-9421015441",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 2, Shiv Classic Building, opp. Narpatgiri Police chowk",
        "addressLocality": "Somwar Peth",
        "addressRegion": "Maharashtra",
        "postalCode": "411011",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5204",
        "longitude": "73.8567"
      },
      "openingHours": "Mo-Sa 10:00-18:00",
      "serviceArea": {
        "@type": "Country",
        "name": "India"
      },
      "services": [
        "Premium Gym Solutions",
        "Gym Flooring Installation",
        "Rubber Flooring",
        "Interlocking Tiles",
        "Equipment Upholstery",
        "Gym Renovation"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
  }, [title, description, keywords, canonicalUrl]);

  return null;
};
export default SEOHead;