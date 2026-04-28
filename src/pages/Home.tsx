import { ArrowRight, Play, Mic, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { heroData, siteData, seoData, homeExtras } from "../data/siteData";
import SEO from "../components/SEO";
import Img from "../components/Img";

export default function Home() {
  return (
    <>
      <SEO
        title={seoData.home.title}
        description={seoData.home.description}
        ogImage={seoData.home.ogImage}
      />
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-brand-50 via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex items-center gap-16 lg:gap-20">
            <div className="flex-1 max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-4"
            >
              {heroData.greeting}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
            >
              {heroData.name}
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-500 mt-2">
                {heroData.subtitle}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8"
            >
              {heroData.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`mailto:${siteData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg font-medium text-sm hover:bg-brand-700 transition-colors"
              >
                {heroData.ctaPrimary}
                <ArrowRight size={16} />
              </a>
              <a
                href="/podcast"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                <Play size={16} />
                {heroData.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Avatar placeholder — desktop only */}
          <div className="hidden lg:block shrink-0">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Img
                alt="Alex Chen portrait"
                aspectRatio="1/1"
                gradient="linear-gradient(135deg, #e8ddd0 0%, #d4c0aa 50%, #bc9e80 100%)"
                className="w-full h-full"
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Talks Given" },
              { value: "10K+", label: "Community Members" },
              { value: "100+", label: "Podcast Episodes" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-brand-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talk */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-2">
              Featured Talk
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Latest speaking engagement
            </h2>
          </motion.div>

          <motion.a
            href="/talks"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group block border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                  {homeExtras.featuredTalk.title}
                </h3>
                <p className="text-sm text-brand-600 font-medium mt-2">
                  {homeExtras.featuredTalk.event}
                </p>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                  <Calendar size="14" />
                  {homeExtras.featuredTalk.date} · {homeExtras.featuredTalk.location}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {homeExtras.featuredTalk.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:text-brand-700 transition-colors shrink-0">
                View all talks <ArrowRight size="14" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-16 sm:py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-2">
              Latest Episode
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              The Motherhood Shift
            </h2>
          </motion.div>

          <motion.a
            href="/podcast"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group block border border-gray-200 rounded-xl p-6 sm:p-8 bg-white hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span>{homeExtras.featuredEpisode.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{homeExtras.featuredEpisode.duration}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                  {homeExtras.featuredEpisode.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {homeExtras.featuredEpisode.summary}
                </p>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center group-hover:bg-brand-700 transition-colors">
                <Play size="16" />
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Mic size="28" className="mx-auto text-brand-400 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-3">
              {homeExtras.newsletter.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {homeExtras.newsletter.description}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={homeExtras.newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors whitespace-nowrap"
              >
                {homeExtras.newsletter.buttonText}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
