import { Mail, Heart } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 safe-bottom">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {siteData.name}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {siteData.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-brand-600 transition-colors"
              >
                X / Twitter
              </a>
              <a
                href={siteData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-brand-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-brand-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-brand-600 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Contact
            </h4>
            <a
              href={`mailto:${siteData.email}`}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600 transition-colors"
            >
              <Mail size={14} />
              {siteData.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {year} {siteData.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart size={10} className="text-red-400" /> for working
            mothers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
