import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { mediaData, seoData } from "../data/siteData";
import SEO from "../components/SEO";
import Img from "../components/Img";

export default function Media() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SEO
        title={seoData.media.title}
        description={seoData.media.description}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12"
      >
        <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-3">
          Media
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          As seen in
        </h1>
        <p className="text-lg text-gray-600">
          Coverage and features from leading publications.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaData.map((item, i) => (
          <motion.a
            key={item.headline}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="group block border border-gray-200 rounded-xl p-6 hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-100 shrink-0">
                  <Img
                    alt={`${item.outlet} logo`}
                    aspectRatio="1/1"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {item.outlet}
                </span>
              </div>
              <ExternalLink
                size="14"
                className="text-gray-300 group-hover:text-brand-500 transition-colors"
              />
            </div>

            <div className="relative mb-4">
              <Quote
                size="20"
                className="text-brand-200 absolute -top-1 -left-1"
              />
              <p className="text-sm text-gray-600 leading-relaxed pl-5 italic">
                {item.quote}
              </p>
            </div>

            <p className="text-sm font-medium text-gray-900 group-hover:text-brand-700 transition-colors">
              {item.headline}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
