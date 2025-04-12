
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Sample blog post data
const blogPost = {
  id: 1,
  title: 'The Impact of Regular Exercise on Joint Health',
  content: `
    <p>Regular exercise is crucial for maintaining healthy joints and preventing many common orthopedic conditions. This article explores the relationship between physical activity and joint health, offering practical advice for keeping your joints in optimal condition.</p>
    
    <h2>Why Joint Health Matters</h2>
    
    <p>Our joints are complex structures that provide support and help us move. As we age, joint wear and tear is natural, but certain factors can accelerate this process, leading to pain and reduced mobility. Understanding how to protect your joints is essential for maintaining quality of life as you age.</p>
    
    <p>Joints consist of cartilage, synovial fluid, ligaments, and tendons working together to enable smooth movement. When any component is compromised, it can result in discomfort and functional limitations. Regular exercise helps maintain the health of all these structures.</p>
    
    <h2>Benefits of Exercise for Joint Health</h2>
    
    <p>Contrary to the myth that exercise wears out joints, appropriate physical activity actually strengthens the structures around the joints and helps maintain cartilage health. Here are key benefits:</p>
    
    <ul>
      <li><strong>Strengthens supporting muscles:</strong> Strong muscles around joints reduce the load on the joint itself.</li>
      <li><strong>Maintains cartilage health:</strong> Movement helps circulate synovial fluid, which delivers nutrients to the cartilage.</li>
      <li><strong>Improves flexibility:</strong> Regular activity helps maintain range of motion in joints.</li>
      <li><strong>Controls weight:</strong> Exercise helps manage weight, reducing excess pressure on weight-bearing joints.</li>
      <li><strong>Reduces inflammation:</strong> Regular moderate exercise has anti-inflammatory effects throughout the body.</li>
    </ul>
    
    <h2>Best Exercises for Joint Health</h2>
    
    <p>Not all exercises are created equal when it comes to joint health. Low-impact activities that minimize stress on joints while providing cardiovascular and strength benefits are ideal. Consider these options:</p>
    
    <h3>Swimming and Water Exercises</h3>
    
    <p>Water-based exercises are excellent for joints because water provides resistance while supporting your body weight. This reduces stress on joints while still providing an effective workout. Swimming, water aerobics, and even walking in water are all beneficial options.</p>
    
    <h3>Cycling</h3>
    
    <p>Cycling, whether on a stationary bike or outdoors, is a low-impact activity that strengthens the muscles around the knees and hips without putting excessive stress on these joints. Ensure your bike is properly fitted to avoid creating new problems.</p>
    
    <h3>Walking</h3>
    
    <p>A regular walking program on level surfaces with good supportive footwear provides excellent benefits for joint health. Start with short distances and gradually increase as your fitness improves.</p>
    
    <h3>Strength Training</h3>
    
    <p>Light resistance training helps build the muscles that support and protect your joints. Focus on proper form and appropriate weight to avoid injury. Consider working with a physical therapist or certified trainer initially to learn correct techniques.</p>
    
    <h3>Yoga and Tai Chi</h3>
    
    <p>These mind-body exercises improve flexibility, balance, and strength while being gentle on the joints. Many poses can be modified to accommodate individual limitations.</p>
    
    <h2>Exercise Precautions for Joint Health</h2>
    
    <p>While exercise is beneficial, it's important to approach it wisely to protect your joints:</p>
    
    <ul>
      <li><strong>Warm up properly:</strong> Always spend 5-10 minutes warming up before more vigorous activity.</li>
      <li><strong>Start slowly:</strong> If you're new to exercise, begin with short, low-intensity sessions and gradually increase.</li>
      <li><strong>Listen to your body:</strong> Some muscle soreness is normal, but sharp pain is a warning sign to stop.</li>
      <li><strong>Rest appropriately:</strong> Allow time for recovery between exercise sessions.</li>
      <li><strong>Use proper equipment:</strong> Good footwear and appropriate equipment can reduce joint stress.</li>
    </ul>
    
    <h2>When to Consult a Healthcare Professional</h2>
    
    <p>If you have existing joint issues or other health concerns, it's important to consult with a healthcare provider before starting a new exercise program. They can offer personalized recommendations based on your specific condition.</p>
    
    <p>Additionally, seek medical advice if you experience any of these symptoms during or after exercise:</p>
    
    <ul>
      <li>Joint pain that lasts more than two hours after exercise</li>
      <li>Joint swelling</li>
      <li>Decreased range of motion</li>
      <li>Joint instability</li>
    </ul>
    
    <h2>Conclusion</h2>
    
    <p>Regular, appropriate exercise is one of the best things you can do for your joint health. By choosing low-impact activities, building supporting muscles, and maintaining a healthy weight, you can help keep your joints functioning well for years to come.</p>
    
    <p>Remember that consistency is key – a regular, moderate exercise program provides more benefits than occasional intense workouts, which may actually increase injury risk.</p>
    
    <p>At LIFE Hospital, our orthopedic specialists can help you develop an exercise plan tailored to your specific needs and health status. Contact us to learn more about protecting your joint health for the long term.</p>
  `,
  excerpt: 'Discover how regular physical activity can help maintain healthy joints and prevent common orthopedic issues.',
  category: 'Health Tips',
  author: 'Dr. Michael Patel',
  authorTitle: 'Head of Orthopedics',
  authorBio: 'Dr. Patel is a board-certified orthopedic surgeon specializing in joint health and replacement procedures. With over 15 years of experience, he leads our orthopedic department and has published numerous research papers on joint preservation techniques.',
  authorImage: '/src/assets/team/doctor2.jpg',
  date: 'April 2, 2023',
  image: '/src/assets/blog/exercise.jpg',
  relatedPosts: [
    {
      id: 3,
      title: 'Healthy Eating Habits for Heart Disease Prevention',
      category: 'Nutrition',
      date: 'March 10, 2023',
      image: '/src/assets/blog/healthy-eating.jpg'
    },
    {
      id: 4,
      title: 'Managing Chronic Pain: Modern Approaches',
      category: 'Medical News',
      date: 'February 28, 2023',
      image: '/src/assets/blog/chronic-pain.jpg'
    },
    {
      id: 8,
      title: 'Seasonal Allergies: Prevention and Treatment Options',
      category: 'Health Tips',
      date: 'January 22, 2023',
      image: '/src/assets/blog/allergies.jpg'
    }
  ]
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch the blog post based on the ID
  // For now, we'll use our sample data
  
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-hospital-blue hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-abhaya text-gray-800 mb-6">{blogPost.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar size={16} className="mr-2 text-hospital-blue" />
                {blogPost.date}
              </div>
              <div className="flex items-center text-gray-600">
                <User size={16} className="mr-2 text-hospital-blue" />
                {blogPost.author}
              </div>
              <div className="flex items-center text-gray-600">
                <Tag size={16} className="mr-2 text-hospital-blue" />
                {blogPost.category}
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-auto"
            />
          </div>
          
          {/* Article Content */}
          <div 
            className="prose max-w-none prose-lg prose-blue mb-12"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          ></div>
          
          {/* Social Sharing */}
          <div className="border-t border-b border-gray-200 py-6 my-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-semibold text-gray-700">Share this article:</span>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center mb-12">
            <img 
              src={blogPost.authorImage} 
              alt={blogPost.author}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-1">{blogPost.author}</h3>
              <p className="text-hospital-blue mb-3">{blogPost.authorTitle}</p>
              <p className="text-gray-600">{blogPost.authorBio}</p>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPost.relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-hospital-blue text-xs font-medium">{post.category}</span>
                        <span className="text-gray-400 text-xs">•</span>
                        <span className="text-gray-500 text-xs">{post.date}</span>
                      </div>
                      <h3 className="font-bold text-gray-800 group-hover:text-hospital-blue transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-hospital-blue text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Have Questions About Your Joint Health?</h3>
            <p className="mb-6">
              Our orthopedic specialists are here to help. Schedule a consultation to discuss your joint health concerns.
            </p>
            <Button className="bg-white text-hospital-blue hover:bg-gray-100">
              Request Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
