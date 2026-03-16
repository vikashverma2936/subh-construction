import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/subh_construction';

const projects = [
  {
    title: 'Luxury Villa Construction',
    category: 'Residential',
    location: 'Gomti Nagar, Lucknow',
    imageUrl: '/images/projects/villa-1.png',
    images: ['/images/projects/villa-1.png', '/images/projects/villa-2.png'],
    description: 'A premium 5000 sq ft luxury villa with modern amenities and high-end finishes.',
  },
  {
    title: 'Corporate Business Center',
    category: 'Commercial',
    location: 'Hazratganj, Lucknow',
    imageUrl: '/images/projects/office-1.png',
    images: ['/images/projects/office-1.png', '/images/projects/office-2.png'],
    description: 'State-of-the-art office complex designed for elite business operations.',
  },
  {
    title: 'Modern Apartment Complex',
    category: 'Residential',
    location: 'Indira Nagar, Lucknow',
    imageUrl: '/images/projects/apartment-1.png',
    images: ['/images/projects/apartment-1.png', '/images/projects/villa-2.png'],
    description: 'Contemporary multi-story residential building featuring sustainable design.',
  },
  {
    title: 'Industrial Warehouse',
    category: 'Industrial',
    location: 'Amousi, Lucknow',
    imageUrl: '/images/projects/warehouse-1.png',
    images: ['/images/projects/warehouse-1.png', '/images/projects/warehouse-2.png'],
    description: 'Large-scale industrial storage facility with optimized logistics layout.',
  },
  {
    title: 'RCC Main Road Project',
    category: 'Industrial',
    location: 'Deva Road, Lucknow',
    imageUrl: '/images/projects/road-1.png',
    images: ['/images/projects/road-1.png', '/images/projects/road-2.png'],
    description: 'Heavy-duty RCC road construction for industrial corridor connectivity.',
  },
  {
    title: 'Premium Penthouse',
    category: 'Residential',
    location: 'Jankipuram, Lucknow',
    imageUrl: '/images/projects/penthouse-1.png',
    images: ['/images/projects/penthouse-1.png', '/images/projects/villa-1.png'],
    description: 'Exclusive 4BHK penthouse with private terrace garden and smart automation.',
  },
  {
    title: 'Aliganj Retail Plaza',
    category: 'Commercial',
    location: 'Aliganj, Lucknow',
    imageUrl: '/images/projects/plaza-1.png',
    images: ['/images/projects/plaza-1.png', '/images/projects/office-1.png'],
    description: 'Modern neighborhood shopping complex featuring glass facades and ample parking.',
  },
  {
    title: 'Contemporary Office Space',
    category: 'Commercial',
    location: 'Gomti Nagar Extension, Lucknow',
    imageUrl: '/images/projects/office-int-1.png',
    images: ['/images/projects/office-int-1.png', '/images/projects/office-2.png'],
    description: 'High-tech office interior construction for a leading software firm.',
  },
  {
    title: 'Budget Home Extension',
    category: 'Residential',
    location: 'Ashiyana, Lucknow',
    imageUrl: '/images/projects/extension-1.png',
    images: ['/images/projects/extension-1.png', '/images/projects/villa-2.png'],
    description: 'Cost-effective additional floor construction with premium structural stability.',
  },
  {
    title: 'RCC Industrial Pavement',
    category: 'Industrial',
    location: 'Nadarganj Industrial Area, Lucknow',
    imageUrl: '/images/projects/road-2.png',
    images: ['/images/projects/road-2.png', '/images/projects/warehouse-2.png'],
    description: 'Specialized high-strength RCC flooring for heavy machinery factory.',
  },
];

const Project = mongoose.models.Project || mongoose.model('Project', new mongoose.Schema({
  title: String,
  category: String,
  location: String,
  imageUrl: String,
  images: [String],
  description: String
}, { timestamps: true }));

async function seed() {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(MONGODB_URI);
    
    console.log('Clearing existing projects...');
    await Project.deleteMany({});
    
    console.log('Seeding projects...');
    await Project.insertMany(projects);
    
    console.log('Database seeded successfully! 🌱');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();
