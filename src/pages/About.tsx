import { motion } from "framer-motion";
import { useContent } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Img from "../components/Img";

export default function About() {
  const { aboutData, seoData } = useContent();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SEO
        title={seoData.about.title}
        description={seoData.about.description}
      />
      {/* Intro + Photo */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-3">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            The story behind the work
          </h1>
          <div className="space-y-4">
            {aboutData.bio.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="shrink-0 lg:w-80"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Img
              alt="Alex Chen portrait"
              aspectRatio="3/4"
              gradient="linear-gradient(135deg, #e8ddd0 0%, #d4c0aa 50%, #a88564 100%)"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
      >
        {aboutData.stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
          >
            <div className="text-3xl font-bold text-brand-600">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Timeline</h2>
        <div className="space-y-0">
          {aboutData.timeline.map((item, i) => (
            <div key={i} className="flex gap-6 pb-8 relative last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-brand-600 ring-4 ring-brand-50 shrink-0 mt-1.5" />
                {i < aboutData.timeline.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 mt-1" />
                )}
              </div>
              <div>
                <span className="text-sm font-bold text-brand-600">
                  {item.year}
                </span>
                <p className="text-gray-600 mt-1">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Areas of Expertise
        </h2>
        <div className="flex flex-wrap gap-3">
          {aboutData.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
