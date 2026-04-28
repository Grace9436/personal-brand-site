import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useContent } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Img from "../components/Img";

export default function Partnerships() {
  const { partnershipsData, seoData } = useContent();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SEO
        title={seoData.partnerships.title}
        description={seoData.partnerships.description}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12"
      >
        <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-3">
          Partnerships
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Collaborations that drive change
        </h1>
        <p className="text-lg text-gray-600">
          I partner with organizations that share a commitment to supporting
          working mothers and building inclusive workplaces.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partnershipsData.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="group block border border-gray-200 rounded-xl p-6 hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden mb-4 border border-gray-100">
              <Img
                alt={`${p.name} logo`}
                aspectRatio="1/1"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                {p.name}
              </h3>
              <ExternalLink
                size="14"
                className="text-gray-300 group-hover:text-brand-500 transition-colors"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {p.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
