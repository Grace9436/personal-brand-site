import { motion } from "framer-motion";
import { Headphones, ExternalLink } from "lucide-react";
import { podcastData, seoData } from "../data/siteData";
import SEO from "../components/SEO";
import Img from "../components/Img";

export default function Podcast() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SEO
        title={seoData.podcast.title}
        description={seoData.podcast.description}
      />
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-3">
            Podcast
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {podcastData.title}
          </h1>
          <p className="text-lg text-gray-600">{podcastData.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="shrink-0 w-40 sm:w-48 lg:w-56"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Img
              alt="The Motherhood Shift podcast cover"
              aspectRatio="1/1"
              gradient="linear-gradient(135deg, #544334 0%, #6e5841 50%, #8b6f52 100%)"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Platform links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        {podcastData.platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-all"
          >
            <Headphones size="16" />
            {p.name}
            <ExternalLink size="14" className="text-gray-400" />
          </a>
        ))}
      </motion.div>

      {/* Episodes */}
      <div className="space-y-5">
        {podcastData.episodes.map((ep, i) => (
          <motion.div
            key={ep.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="group border border-gray-200 rounded-xl p-6 hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <span>{ep.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{ep.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                  {ep.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{ep.summary}</p>
              </div>
              <a
                href={ep.audioUrl}
                className="shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-colors"
                aria-label="Play episode"
              >
                <Headphones size="16" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
