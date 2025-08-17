import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  Clock,
  TrendingUp,
  Heart,
  Brain,
  Shield
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';

const categories = [
  { name: 'All', count: 24, active: true },
  { name: 'Pediatrics', count: 8, active: false },
  { name: 'Technology', count: 6, active: false },
  { name: 'Practice Management', count: 5, active: false },
  { name: 'Patient Care', count: 5, active: false }
];

const featuredPost = {
  id: 1,
  title: 'The Future of Digital Healthcare: Trends to Watch in 2025',
  excerpt: 'Explore the latest innovations in healthcare technology and how they\'re transforming patient care delivery across the globe.',
  author: 'Dr. Aziza Karimova',
  date: '2025-01-15',
  readTime: '8 min read',
  category: 'Technology',
  image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
  featured: true
};

const blogPosts = [
  {
    id: 2,
    title: 'Best Practices for Pediatric Patient Management',
    excerpt: 'Learn effective strategies for managing young patients and creating a child-friendly medical environment.',
    author: 'Dr. Sherzod Rahimov',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Pediatrics',
    image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Streamlining Clinic Operations with CRM Technology',
    excerpt: 'Discover how modern CRM systems can improve efficiency and patient satisfaction in your medical practice.',
    author: 'Malika Nazarova',
    date: '2025-01-10',
    readTime: '5 min read',
    category: 'Practice Management',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    title: 'Patient Privacy and HIPAA Compliance in Digital Age',
    excerpt: 'Understanding the importance of data security and compliance requirements in modern healthcare.',
    author: 'Dr. Bobur Umarov',
    date: '2025-01-08',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    title: 'Improving Patient Communication and Engagement',
    excerpt: 'Effective strategies for building stronger relationships with patients through better communication.',
    author: 'Dr. Nilufar Tosheva',
    date: '2025-01-05',
    readTime: '4 min read',
    category: 'Patient Care',
    image: 'https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    title: 'Mental Health Awareness in Pediatric Practice',
    excerpt: 'Recognizing and addressing mental health concerns in children and adolescents.',
    author: 'Dr. Sardor Alimov',
    date: '2025-01-03',
    readTime: '9 min read',
    category: 'Pediatrics',
    image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const trendingTopics = [
  { icon: TrendingUp, title: 'Telemedicine Growth', posts: 12 },
  { icon: Heart, title: 'Preventive Care', posts: 8 },
  { icon: Brain, title: 'Mental Health', posts: 6 },
  { icon: Shield, title: 'Data Security', posts: 4 }
];

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Healthcare Insights
              <span className="text-blue-600 block">& Best Practices</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from healthcare 
              professionals and industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card hover className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1 space-y-6">
                  <div>
                    <Badge variant="yellow" className="mb-4">Featured Article</Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="order-1 lg:order-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={postsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card hover className="h-full group cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-200"
                      />
                      
                      <div className="space-y-3">
                        <Badge variant="blue" size="sm">
                          {post.category}
                        </Badge>
                        
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <User className="w-3 h-3 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No articles found matching your search.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Trending Topics */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Trending Topics
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic) => {
                    const Icon = topic.icon;
                    return (
                      <div key={topic.title} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-blue-600" />
                          <span className="text-sm font-medium text-gray-900">
                            {topic.title}
                          </span>
                        </div>
                        <Badge variant="gray" size="sm">
                          {topic.posts}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest healthcare insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                  />
                  <Button size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </Card>

              {/* Recent Posts */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3 group cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};