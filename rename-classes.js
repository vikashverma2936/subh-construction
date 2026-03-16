// rename-classes.js - FIXED VERSION
// Renames subh-ui-N classes to semantic names across all TSX/CSS files
// Uses word-boundary-safe replacement (sorts by length descending to avoid partial matches)
// Run with: node rename-classes.js

const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, 'src');

const classMap = {
  // ── Global
  'subh-ui-1':   'scroll-to-top-btn',
  'subh-ui-22':  'container',
  'subh-ui-37':  'section-badge',
  'subh-ui-38':  'whatsapp-btn',
  'subh-ui-39':  'theme-root',

  // ── Footer
  'subh-ui-2':  'footer',
  'subh-ui-3':  'footer-inner',
  'subh-ui-4':  'footer-grid',
  'subh-ui-5':  'footer-brand',
  'subh-ui-6':  'footer-brand-name',
  'subh-ui-7':  'footer-brand-suffix',
  'subh-ui-8':  'footer-desc',
  'subh-ui-9':  'footer-socials',
  'subh-ui-10': 'footer-social-btn',
  'subh-ui-11': 'footer-col-heading',
  'subh-ui-12': 'footer-link',
  'subh-ui-13': 'footer-contact-row',
  'subh-ui-14': 'footer-contact-icon',
  'subh-ui-15': 'footer-contact-text',
  'subh-ui-16': 'footer-email-link',
  'subh-ui-17': 'footer-bottom-border',
  'subh-ui-18': 'footer-bottom-inner',
  'subh-ui-19': 'footer-bottom-row',
  'subh-ui-20': 'footer-bottom-links',
  'subh-ui-21': 'footer-bottom-link',

  // ── Navbar
  'subh-ui-23': 'navbar-inner',
  'subh-ui-24': 'navbar-brand-name',
  'subh-ui-25': 'navbar-brand-suffix',
  'subh-ui-26': 'navbar-links',
  'subh-ui-27': 'navbar-link',
  'subh-ui-28': 'navbar-actions',
  'subh-ui-29': 'navbar-theme-toggle',
  'subh-ui-30': 'navbar-cta-btn',
  'subh-ui-31': 'navbar-mobile-actions',
  'subh-ui-32': 'navbar-mobile-hamburger',
  'subh-ui-33': 'navbar-mobile-menu',
  'subh-ui-34': 'navbar-mobile-links',
  'subh-ui-35': 'navbar-mobile-link',
  'subh-ui-36': 'navbar-mobile-cta-btn',

  // ── About Page — Hero
  'subh-ui-40': 'about-hero',
  'subh-ui-41': 'about-hero-bg-img',
  'subh-ui-42': 'about-hero-overlay',
  'subh-ui-43': 'about-hero-content',
  'subh-ui-44': 'about-hero-badge',
  'subh-ui-45': 'about-hero-heading',
  'subh-ui-46': 'about-hero-subtext',

  // ── About Page — Stats
  'subh-ui-47': 'about-stats-section',
  'subh-ui-48': 'about-stats-grid',
  'subh-ui-49': 'about-stat-card',
  'subh-ui-50': 'about-stat-icon',
  'subh-ui-51': 'about-stat-value',
  'subh-ui-52': 'about-stat-label',

  // ── About Page — Story / Home Introduction
  'subh-ui-53': 'intro-section',
  'subh-ui-54': 'intro-grid',
  'subh-ui-55': 'intro-body-text',
  'subh-ui-56': 'intro-body-text-last',
  'subh-ui-57': 'intro-image',

  // ── About Page — Mission & Vision
  'subh-ui-58': 'mission-section',
  'subh-ui-59': 'mission-grid',
  'subh-ui-60': 'mission-card',
  'subh-ui-61': 'mission-icon-box',
  'subh-ui-62': 'mission-card-heading',
  'subh-ui-63': 'mission-card-text',

  // ── About Page — Team
  'subh-ui-64': 'team-section',
  'subh-ui-65': 'team-grid',
  'subh-ui-66': 'team-member',
  'subh-ui-67': 'team-member-photo-wrap',
  'subh-ui-68': 'team-member-photo',
  'subh-ui-69': 'team-member-overlay',
  'subh-ui-70': 'team-member-name',
  'subh-ui-71': 'team-member-role',

  // ── About Page — Achievements
  'subh-ui-72': 'achievements-grid',
  'subh-ui-73': 'achievement-item',
  'subh-ui-74': 'achievement-icon',
  'subh-ui-75': 'achievement-text',

  // ── About Page — CTA
  'subh-ui-76': 'about-cta-section',
  'subh-ui-77': 'about-cta-inner',
  'subh-ui-78': 'about-cta-heading',
  'subh-ui-79': 'about-cta-text',
  'subh-ui-80': 'about-cta-btn',

  // ── Blog Page
  'subh-ui-81': 'blog-hero',
  'subh-ui-82': 'blog-hero-inner',
  'subh-ui-83': 'blog-hero-heading',
  'subh-ui-84': 'blog-hero-subtext',
  'subh-ui-85': 'blog-featured-section',
  'subh-ui-86': 'blog-featured-card',
  'subh-ui-87': 'blog-featured-img-wrap',
  'subh-ui-88': 'blog-featured-img',
  'subh-ui-89': 'blog-featured-body',
  'subh-ui-90': 'blog-featured-tag',
  'subh-ui-91': 'blog-featured-title',
  'subh-ui-92': 'blog-featured-excerpt',
  'subh-ui-93': 'blog-featured-meta',
  'subh-ui-94': 'blog-featured-meta-item',
  'subh-ui-95': 'blog-card',
  'subh-ui-96': 'blog-card-img-wrap',
  'subh-ui-97': 'blog-card-title',
  'subh-ui-98': 'blog-card-excerpt',
  'subh-ui-99': 'blog-not-found',

  // ── Blog 404
  'subh-ui-100': 'blog-not-found-heading',
  'subh-ui-101': 'blog-not-found-link',

  // ── Contact Page
  'subh-ui-102': 'contact-page',
  'subh-ui-103': 'contact-hero-img-wrap',
  'subh-ui-104': 'contact-hero-overlay',
  'subh-ui-105': 'contact-form-wrap',
  'subh-ui-106': 'contact-back-link',
  'subh-ui-107': 'contact-form-heading',
  'subh-ui-108': 'contact-form-meta',
  'subh-ui-109': 'contact-form-meta-item',
  'subh-ui-110': 'contact-cta-box',
  'subh-ui-111': 'contact-cta-heading',
  'subh-ui-112': 'contact-cta-text',
  'subh-ui-113': 'contact-cta-btn',
  'subh-ui-114': 'contact-hero-subtext',
  'subh-ui-115': 'contact-info-section',
  'subh-ui-116': 'contact-info-grid',
  'subh-ui-117': 'contact-info-card',
  'subh-ui-118': 'contact-info-icon-box',
  'subh-ui-119': 'contact-info-label',
  'subh-ui-120': 'contact-info-value-link',
  'subh-ui-121': 'contact-info-value',
  'subh-ui-122': 'contact-content-grid',
  'subh-ui-123': 'contact-form-title',
  'subh-ui-124': 'contact-form-subtitle',
  'subh-ui-125': 'contact-fields-grid',
  'subh-ui-126': 'contact-input',
  'subh-ui-127': 'contact-select-text',
  'subh-ui-128': 'contact-select-icon',
  'subh-ui-129': 'contact-select-chevron',
  'subh-ui-130': 'contact-textarea',
  'subh-ui-131': 'contact-submit-btn',
  'subh-ui-132': 'contact-submit-spinner',
  'subh-ui-133': 'contact-success-msg',
  'subh-ui-134': 'contact-error-msg',
  'subh-ui-135': 'contact-whatsapp-row',
  'subh-ui-136': 'contact-whatsapp-icon',
  'subh-ui-137': 'contact-whatsapp-heading',
  'subh-ui-138': 'contact-whatsapp-link',
  'subh-ui-139': 'contact-map',

  // ── Home — Hero
  'subh-ui-140': 'hero-section',
  'subh-ui-141': 'hero-overlay',
  'subh-ui-142': 'hero-content',
  'subh-ui-143': 'hero-heading',
  'subh-ui-144': 'hero-subtext',
  'subh-ui-145': 'hero-cta-group',
  'subh-ui-146': 'hero-primary-btn',
  'subh-ui-147': 'hero-secondary-btn',

  // ── Home — Introduction
  'subh-ui-148': 'intro-badge',
  'subh-ui-149': 'intro-heading',
  'subh-ui-150': 'intro-desc',
  'subh-ui-151': 'intro-features-grid',
  'subh-ui-152': 'intro-feature-item',
  'subh-ui-153': 'intro-learn-more',
  'subh-ui-154': 'intro-img-wrap',
  'subh-ui-155': 'intro-img',
  'subh-ui-156': 'intro-exp-badge',
  'subh-ui-157': 'intro-exp-number',
  'subh-ui-158': 'intro-exp-label',

  // ── Home — Services
  'subh-ui-159': 'services-grid',
  'subh-ui-160': 'service-card',
  'subh-ui-161': 'service-icon-box',
  'subh-ui-162': 'service-title',
  'subh-ui-163': 'service-desc',
  'subh-ui-164': 'service-link',

  // ── Home — Projects
  'subh-ui-165': 'projects-section',
  'subh-ui-166': 'projects-grid',
  'subh-ui-167': 'project-card',
  'subh-ui-168': 'project-card-img-wrap',
  'subh-ui-169': 'project-badge-wrap',
  'subh-ui-170': 'project-badge',
  'subh-ui-171': 'project-card-title',
  'subh-ui-172': 'project-card-location',
  'subh-ui-173': 'projects-view-all-wrap',
  'subh-ui-174': 'projects-view-all-btn',

  // ── Home — Stats
  'subh-ui-175': 'stats-section',
  'subh-ui-176': 'stats-grid',
  'subh-ui-177': 'stat-number',
  'subh-ui-178': 'stat-label',

  // ── Home — Why Choose Us
  'subh-ui-179': 'why-section',
  'subh-ui-180': 'why-card',
  'subh-ui-181': 'why-icon-box',
  'subh-ui-182': 'why-card-title',

  // ── Pricing
  'subh-ui-183': 'pricing-popular-tag',
  'subh-ui-184': 'pricing-plan-name',
  'subh-ui-185': 'pricing-price-wrap',
  'subh-ui-186': 'pricing-plan-desc',
  'subh-ui-187': 'pricing-features',
  'subh-ui-188': 'pricing-feature-item',

  // ── Reviews
  'subh-ui-189': 'reviews-grid',
  'subh-ui-190': 'review-card',
  'subh-ui-191': 'review-stars',
  'subh-ui-192': 'review-star-icon',
  'subh-ui-193': 'review-quote',
  'subh-ui-194': 'review-author-name',
  'subh-ui-195': 'review-author-role',

  // ── FAQ
  'subh-ui-196': 'faq-container',
  'subh-ui-197': 'faq-item',
  'subh-ui-198': 'faq-toggle-btn',
  'subh-ui-199': 'faq-question',
  'subh-ui-200': 'faq-chevron',
  'subh-ui-201': 'faq-answer',

  // ── Services Page
  'subh-ui-202': 'svc-quote-heading',
  'subh-ui-203': 'svc-quote-grid',
  'subh-ui-204': 'svc-quote-label',
  'subh-ui-205': 'svc-quote-input',
  'subh-ui-206': 'svc-quote-select',
  'subh-ui-207': 'svc-quote-submit',
  'subh-ui-208': 'svc-sidebar',
  'subh-ui-209': 'svc-sidebar-heading',
  'subh-ui-210': 'svc-contact-row',
  'subh-ui-211': 'svc-contact-icon-box',
  'subh-ui-212': 'svc-contact-label',
  'subh-ui-213': 'svc-contact-value',
  'subh-ui-214': 'svc-hours-icon-box',
  'subh-ui-215': 'svc-social-icon-box',
  'subh-ui-216': 'svc-map',

  // ── Projects Gallery Page
  'subh-ui-217': 'gallery-badge-wrap',
  'subh-ui-218': 'gallery-badge',
  'subh-ui-219': 'gallery-budget',
  'subh-ui-220': 'gallery-features',
  'subh-ui-221': 'gallery-enquiry-box',
  'subh-ui-222': 'gallery-enquiry-text',
  'subh-ui-223': 'gallery-hero-bg',
  'subh-ui-224': 'gallery-hero-overlay',
  'subh-ui-225': 'gallery-filter-bar',
  'subh-ui-226': 'gallery-grid',
  'subh-ui-227': 'gallery-loading-wrap',
  'subh-ui-228': 'gallery-spinner',
  'subh-ui-229': 'gallery-empty',
  'subh-ui-230': 'gallery-card',
  'subh-ui-231': 'gallery-card-overlay',
  'subh-ui-232': 'gallery-card-title',
  'subh-ui-233': 'gallery-card-desc',
  'subh-ui-234': 'gallery-card-meta',
  'subh-ui-235': 'gallery-detail-content',
  'subh-ui-236': 'gallery-detail-heading',
  'subh-ui-237': 'gallery-detail-feature',
  'subh-ui-238': 'gallery-back-btn',
  'subh-ui-239': 'gallery-detail-img-wrap',
  'subh-ui-240': 'gallery-detail-img-overlay',
};

// Sort keys longest first to avoid partial matches
// (e.g. "subh-ui-100" must be replaced before "subh-ui-1")
const sortedEntries = Object.entries(classMap).sort(
  (a, b) => b[0].length - a[0].length
);

function getAllFiles(dir, exts) {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !['node_modules', '.next', '.git'].includes(item.name)) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else if (item.isFile() && exts.some(e => item.name.endsWith(e))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = [
  ...getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']),
  path.join(__dirname, 'src', 'app', 'globals.css'),
];

let totalFiles = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  for (const [oldName, newName] of sortedEntries) {
    // Escape for regex, use word boundary (\b won't work with hyphens, so use negative lookbehind/ahead for digit)
    const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match the class only when NOT followed by a digit (prevents subh-ui-1 matching subh-ui-10)
    const regex = new RegExp(escaped + '(?!\\d)', 'g');
    content = content.replace(regex, newName);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✓ ${path.relative(process.cwd(), file)}`);
    totalFiles++;
  }
}
console.log(`\n✅ Done! Updated ${totalFiles} file(s).`);
