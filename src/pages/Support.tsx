import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Gift } from "lucide-react";
import { useContent } from "../contexts/LanguageContext";
import SEO from "../components/SEO";

export default function Support() {
  const { supportData, seoData } = useContent();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SEO
        title={seoData.support.title}
        description={seoData.support.description}
      />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12"
      >
        <p className="text-sm font-semibold text-brand-600 tracking-widest uppercase mb-3">
          Support for Mothers
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          {supportData.title}
        </h1>
        <p className="text-lg text-gray-600">{supportData.subtitle}</p>
      </motion.div>

      {/* Programs */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {supportData.programs.map((program, i) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="border border-gray-200 rounded-xl p-6 hover:border-brand-200 hover:shadow-sm transition-all flex flex-col"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {program.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 flex-1">
              {program.description}
            </p>
            <ul className="space-y-2">
              {program.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <CheckCircle
                    size="14"
                    className="text-brand-500 mt-0.5 shrink-0"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Grant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-8 sm:p-10"
      >
        <div className="flex items-start gap-4 flex-col sm:flex-row">
          <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
            <Gift size="22" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {supportData.grantInfo.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {supportData.grantInfo.description}
            </p>
            <div className="flex flex-wrap gap-6 text-sm mb-6">
              <div>
                <span className="text-gray-500">Amount:</span>{" "}
                <span className="font-semibold text-gray-900">
                  {supportData.grantInfo.amount}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Recipients:</span>{" "}
                <span className="font-semibold text-gray-900">
                  {supportData.grantInfo.recipients}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Deadline:</span>{" "}
                <span className="font-semibold text-gray-900">
                  {supportData.grantInfo.deadline}
                </span>
              </div>
            </div>
            <a
              href={supportData.grantInfo.applyUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
            >
              Apply Now <ArrowRight size="16" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
