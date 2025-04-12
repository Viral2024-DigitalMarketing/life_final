
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SectionHeader from '../shared/SectionHeader';

// Define the blog post type
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string; 
  author: string;
  date: string;
  image: string;
  featured?: boolean; // Make this optional so it can be used in filtering
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding Knee Replacement Surgery: What to Expect',
    excerpt: 'Learn about the latest advances in knee replacement procedures and what to expect before, during, and after surgery.',
    category: 'Orthopedics',
    author: 'Dr. James Wilson',
    date: 'April 2, 2025',
    image: '/src/assets/blog/blog-1.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'The Importance of Regular Health Check-ups',
    excerpt: 'Discover why preventive care is crucial for maintaining good health and detecting potential issues early.',
    category: 'General Health',
    author: 'Dr. Sarah Johnson',
    date: 'March 28, 2025',
    image: '/src/assets/blog/blog-2.jpg'
  },
  {
    id: 3,
    title: 'Managing Chronic Pain: New Approaches',
    excerpt: 'Explore the latest strategies and treatments for effectively managing chronic pain conditions.',
    category: 'Pain Management',
    author: 'Dr. Michael Chen',
    date: 'March 25, 2025',
    image: '/src/assets/blog/blog-3.jpg',
    featured: true
  },
  {
    id: 4,
    title: 'Advancements in Minimally Invasive Surgeries',
    excerpt: 'Learn how minimally invasive surgical techniques are transforming patient care with faster recovery times.',
    category: 'Surgery',
    author: 'Dr. Emily Rodriguez',
    date: 'March 20, 2025',
    image: '/src/assets/blog/blog-4.jpg'
  },
  {
    id: 5,
    title: 'Heart Health: Tips for Cardiovascular Wellness',
    excerpt: 'Essential advice for maintaining a healthy heart and reducing the risk of cardiovascular disease.',
    category: 'Cardiology',
    author: 'Dr. Robert Thompson',
    date: 'March 15, 2025',
    image: '/src/assets/blog/blog-5.jpg'
  },
  {
    id: 6,
    title: 'Understanding Allergies and Immunotherapy',
    excerpt: 'A comprehensive guide to allergy causes, symptoms, and the latest treatments including immunotherapy.',
    category: 'Immunology',
    author: 'Dr. Lisa Park',
    date: 'March 10, 2025',
    image: '/src/assets/blog/blog-6.jpg',
    featured: true
  },
  {
    id: 7,
    title: 'Sleep Disorders: Causes and Treatments',
    excerpt: 'Explore common sleep disorders, their impact on health, and effective treatment options.',
    category: 'Sleep Medicine',
    author: 'Dr. David Brown',
    date: 'March 5, 2025',
    image: '/src/assets/blog/blog-7.jpg'
  },
  {
    id: 8,
    title: 'Nutrition for Optimal Recovery After Surgery',
    excerpt: 'Learn how proper nutrition can enhance healing and recovery following surgical procedures.',
    category: 'Nutrition',
    author: 'Dr. Amanda Miller',
    date: 'March 1, 2025',
    image: '/src/assets/blog/blog-8.jpg'
  },
  {
    id: 9,
    title: 'Mental Health Awareness: Breaking the Stigma',
    excerpt: 'Understanding the importance of mental health care and working to eliminate stigma around seeking help.',
    category: 'Mental Health',
    author: 'Dr. Jonathan Lewis',
    date: 'February 25, 2025',
    image: '/src/assets/blog/blog-9.jpg'
  }
];

// Categories for filtering
const categories = ['All', 'Orthopedics', 'General Health', 'Pain Management', 'Surgery', 'Cardiology', 'Immunology', 'Sleep Medicine', 'Nutrition', 'Mental Health'];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured === true);
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader 
          title="Health Insights & Medical Articles" 
          description="Stay informed with the latest health news, medical advancements, and expert advice from our healthcare professionals."
          centered={true}
          className="mb-16"
        />
        
        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-abhaya text-gray-800 mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <div key={post.id} className="card-shadow rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-hospital-blue text-white text-xs font-semibold py-1 px-2 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-abhaya text-gray-800 mb-2">{post.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-hospital-blue font-medium">{post.author}</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Filter and Search */}
        <div className="mb-12 flex flex-col md:flex-row justify-between gap-6">
          <div className="relative w-full md:w-1/3">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="overflow-x-auto">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="flex flex-nowrap space-x-2 bg-transparent h-auto pb-2 overflow-x-auto">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="whitespace-nowrap data-[state=active]:bg-hospital-blue data-[state=active]:text-white rounded-full"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div key={post.id} className="card-shadow rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-hospital-blue text-white text-xs font-semibold py-1 px-2 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-abhaya text-gray-800 mb-2">{post.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-hospital-blue font-medium">{post.author}</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No articles found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or browse all categories</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-hospital-blue hover:bg-hospital-blue/90"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
