import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

const blogContent: Record<string, { title: string; date: string; readTime: string; img: string; content: string; metaDesc: string }> = {
  'construction-cost-in-india': {
    title: 'Construction Cost in India 2025: Complete Guide',
    date: 'March 5, 2025',
    readTime: '8 min read',
    img: '/images/hero.png',
    metaDesc: 'Complete guide to construction costs in India for 2025 including per sq ft rates, material costs, and city-wise comparisons.',
    content: `
      <h2>Understanding Construction Costs in India</h2>
      <p>Building a home in India involves multiple cost factors including land acquisition, labor, materials, permits, and finishing. In 2025, the average construction cost ranges from ₹1,500 to ₹4,000 per square foot depending on location, materials, and finishing quality.</p>

      <h2>City-Wise Construction Cost Breakdown</h2>
      <p><strong>Tier 1 Cities (Delhi, Mumbai, Bangalore):</strong> ₹2,000 - ₹4,500 per sq ft<br/>
      <strong>Tier 2 Cities (Lucknow, Jaipur, Pune):</strong> ₹1,600 - ₹3,500 per sq ft<br/>
      <strong>Tier 3 Cities:</strong> ₹1,200 - ₹2,500 per sq ft</p>

      <h2>Major Cost Components</h2>
      <p>1. <strong>Materials (55-65%):</strong> Cement, steel, bricks, sand, aggregate, tiles, and fittings<br/>
      2. <strong>Labor (25-35%):</strong> Masons, carpenters, plumbers, electricians, and general workers<br/>
      3. <strong>Design & Planning (5-8%):</strong> Architect fees, structural engineer, and plan approval<br/>
      4. <strong>Miscellaneous (5-10%):</strong> Permits, utilities, insurance, and unforeseen costs</p>

      <h2>Tips to Optimize Construction Budget</h2>
      <p>• Plan thoroughly before construction begins<br/>
      • Choose a reputable construction company like SUBH Construction<br/>
      • Buy materials in bulk during off-season for savings<br/>
      • Use locally available materials where possible<br/>
      • Avoid frequent design changes during construction</p>

      <h2>Get a Free Cost Estimate</h2>
      <p>Contact SUBH Construction for a free, detailed cost estimate based on your specific requirements. Our transparent pricing ensures no hidden costs or surprises.</p>
    `,
  },
  'house-construction-guide': {
    title: 'Step-by-Step House Construction Guide for First-Time Builders',
    date: 'February 20, 2025',
    readTime: '12 min read',
    img: '/images/residential.png',
    metaDesc: 'Complete step-by-step guide for first-time home builders in India covering land selection, approvals, construction phases, and tips.',
    content: `
      <h2>Phase 1: Planning & Preparation</h2>
      <p>Before laying the first brick, thorough planning is essential. This includes selecting the right plot, getting soil testing done, hiring an architect, and obtaining all necessary approvals from local municipalities.</p>

      <h2>Phase 2: Design & Approvals</h2>
      <p>Work with a qualified architect to create detailed floor plans, elevation designs, and structural drawings. Submit these for approval to the local development authority. This process typically takes 2-4 weeks.</p>

      <h2>Phase 3: Foundation</h2>
      <p>The foundation is the most critical phase. Based on soil testing results, your structural engineer will recommend the right foundation type — whether it's isolated footings, raft foundation, or pile foundation.</p>

      <h2>Phase 4: Structure</h2>
      <p>This includes constructing columns, beams, slabs, and walls. Use quality cement (Ultratech, ACC, Ambuja) and TMT steel bars (Tata Tiscon, SAIL). The RCC frame structure is most common for modern homes in India.</p>

      <h2>Phase 5: Finishing</h2>
      <p>Interior and exterior finishing includes plastering, electrical wiring, plumbing, flooring, painting, and fixture installation. This is where your home's personality comes to life.</p>

      <h2>Phase 6: Handover</h2>
      <p>Final inspection, quality checking, utility connections (water, electricity, gas), and completion certificate from the architect. Your dream home is now ready!</p>
    `,
  },
  'building-materials-guide': {
    title: 'Best Building Materials for Indian Homes: A Complete Guide',
    date: 'February 10, 2025',
    readTime: '10 min read',
    img: '/images/engineers.png',
    metaDesc: 'Compare top cement brands, TMT steel, bricks vs AAC blocks, tiles, and essential building materials for Indian construction.',
    content: `
      <h2>Cement: The Foundation of Every Structure</h2>
      <p><strong>Top Brands:</strong> Ultratech, ACC, Ambuja, Birla, Shree<br/>
      <strong>Types:</strong> OPC 53 Grade for structural work, PPC for general use<br/>
      <strong>Current Price Range:</strong> ₹350-450 per 50kg bag</p>

      <h2>Steel (TMT Bars)</h2>
      <p><strong>Top Brands:</strong> Tata Tiscon, SAIL, JSW, Jindal Panther<br/>
      <strong>Grades:</strong> Fe 500D is recommended for residential construction<br/>
      <strong>Usage:</strong> 4-5 kg of steel per sq ft of construction</p>

      <h2>Bricks vs AAC Blocks</h2>
      <p>Traditional red clay bricks are being replaced by AAC (Autoclaved Aerated Concrete) blocks in modern construction. AAC blocks offer better thermal insulation, are lighter, and faster to lay, though they cost more per unit.</p>

      <h2>Tiles & Flooring</h2>
      <p><strong>Budget:</strong> Ceramic tiles (₹25-40/sq ft)<br/>
      <strong>Mid-Range:</strong> Vitrified tiles (₹50-90/sq ft)<br/>
      <strong>Premium:</strong> Italian marble, granite (₹150-500/sq ft)</p>

      <h2>Choosing the Right Materials</h2>
      <p>At SUBH Construction, we source materials from trusted suppliers and provide complete transparency on material specifications and costs. Our procurement team ensures you get the best quality at competitive prices.</p>
    `,
  },
  'home-design-trends': {
    title: 'Top 10 Home Design Trends in India for 2025',
    date: 'January 28, 2025',
    readTime: '7 min read',
    img: '/images/commercial.png',
    metaDesc: 'Discover the latest home design trends in India for 2025 including sustainable architecture, smart homes, and modern interior design.',
    content: `
      <h2>1. Sustainable & Green Architecture</h2>
      <p>Eco-friendly homes with solar panels, rainwater harvesting, and energy-efficient design are becoming the norm rather than the exception in Indian construction.</p>

      <h2>2. Smart Home Integration</h2>
      <p>Home automation systems for lighting, security, climate control, and entertainment are now built into new homes from the ground up.</p>

      <h2>3. Open Floor Plans</h2>
      <p>Combined living, dining, and kitchen areas create a sense of spaciousness and improve family interaction. This trend from Western design is now hugely popular in Indian homes.</p>

      <h2>4. Biophilic Design</h2>
      <p>Incorporating natural elements — indoor gardens, water features, natural materials, and large windows — to connect residents with nature.</p>

      <h2>5. Minimalist Aesthetics</h2>
      <p>Clean lines, neutral color palettes, and clutter-free spaces with smart storage solutions define the modern Indian home.</p>

      <h2>6-10. More Trends</h2>
      <p>Other notable trends include multi-functional spaces, home offices, rooftop gardens, luxury bathrooms, and modular kitchens with smart appliances.</p>
    `,
  },
  'how-to-build-house-india': {
    title: 'How to Build a House in India: Legal, Financial & Practical Guide',
    date: 'January 15, 2025',
    readTime: '15 min read',
    img: '/images/infrastructure.png',
    metaDesc: 'Complete guide on building a house in India covering legal requirements, financing options, permits, and practical construction advice.',
    content: `
      <h2>Legal Requirements</h2>
      <p>Building a house in India requires several approvals: land use certificate, building plan approval, NOC from fire department, environmental clearance (for larger projects), and completion certificate.</p>

      <h2>Financial Planning</h2>
      <p><strong>Home Construction Loan:</strong> Banks like SBI, HDFC, and ICICI offer construction loans at 8.5-10% interest rates. Loan amounts typically cover 75-80% of estimated construction cost.</p>

      <h2>Choosing the Right Builder</h2>
      <p>Key factors: years of experience, portfolio of completed projects, client testimonials, transparent pricing, warranty coverage, and project management capabilities.</p>

      <h2>Construction Timeline</h2>
      <p>A typical 2,000 sq ft residential home takes 8-12 months for construction. Factor in 2-3 months for planning and approvals before construction begins.</p>

      <h2>Common Mistakes to Avoid</h2>
      <p>• Not getting a soil test before construction<br/>
      • Choosing a builder based solely on lowest bid<br/>
      • Making frequent design changes during construction<br/>
      • Skipping quality inspections at critical stages<br/>
      • Not having a written contract with detailed specifications</p>

      <h2>Why Choose SUBH Construction?</h2>
      <p>With 250+ completed projects, 15+ years of experience, and a team of 120+ skilled professionals, SUBH Construction offers end-to-end construction solutions with transparent pricing and guaranteed quality.</p>
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogContent[slug];
  if (!blog) return { title: 'Blog Post Not Found' };
  return {
    title: blog.title,
    description: blog.metaDesc,
  };
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = blogContent[slug];

  if (!blog) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-brand-yellow hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-brand-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[400px]">
        <Image src={blog.img} alt={blog.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-24">
        <Link href="/blog" className="inline-flex items-center gap-2 text-brand-yellow text-sm font-semibold mb-6 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-10 pb-10 border-b border-white/10">
          <span className="flex items-center gap-1"><User size={14} /> SUBH Construction Team</span>
          <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
        </div>
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-brand-yellow prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-a:text-brand-yellow"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 text-center">
          <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-3">Ready to Start Your Construction Project?</h3>
          <p className="text-gray-400 mb-6">Get a free consultation and detailed cost estimate from our expert team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3 rounded-full font-semibold hover:bg-brand-yellow-dark transition-all">
            Contact Us Today <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  );
}
