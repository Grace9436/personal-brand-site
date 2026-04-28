import { useState } from "react";
import { motion } from "framer-motion";
import { Video, FileText } from "lucide-react";
import { talksData, seoData } from "../data/siteData";
import SEO from "../components/SEO";

const allTags = Array.from(new Set(talksData.flatMap((t) => t.tags)));

export default function Talks() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? talksData.filter((t) => t.tags.includes(activeTag))
    : talksData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SEO
        title={seoData.talks.title}
        description={seoData.talks.description}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12"
      >
        <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-3">
          Talks
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Speaking engagements
        </h1>
        <p className="text-lg text-gray-600">
          From keynote stages to workshop rooms — here's where I've been
          speaking about supporting working mothers.
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-2 min-h-10 rounded-full text-sm font-medium transition-colors ${
            !activeTag
              ? "bg-brand-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTag === tag
                ? "bg-brand-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* List */}
      <div className="space-y-6">
        {filtered.map((talk, i) => (
          <motion.div
            key={talk.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="group border border-gray-200 rounded-xl p-6 hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                  {talk.title}
                </h3>
                <p className="text-sm text-brand-600 font-medium mt-1">
                  {talk.event}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {talk.date} · {talk.location}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {talk.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href={talk.videoUrl}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 transition-colors"
                >
                  <Video size="16" />
                  Video
                </a>
                <a
                  href={talk.slidesUrl}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 transition-colors"
                >
                  <FileText size="16" />
                  Slides
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
