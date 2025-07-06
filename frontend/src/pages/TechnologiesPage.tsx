
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const TechnologiesPage = () => {
  const technologies = [
    {
      category: 'Frontend Technologies',
      tools: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'Next.js', level: 90, color: 'bg-gray-800' },
        { name: 'Vue.js', level: 85, color: 'bg-green-500' },
        { name: 'Angular', level: 80, color: 'bg-red-500' },
        { name: 'TypeScript', level: 92, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' }
      ]
    },
    {
      category: 'Backend Technologies',
      tools: [
        { name: 'Node.js', level: 93, color: 'bg-green-600' },
        { name: 'Python', level: 88, color: 'bg-yellow-500' },
        { name: 'Java', level: 85, color: 'bg-orange-600' },
        { name: 'PHP', level: 80, color: 'bg-purple-600' },
        { name: 'Express.js', level: 90, color: 'bg-gray-700' },
        { name: 'Django', level: 85, color: 'bg-green-700' }
      ]
    },
    {
      category: 'Database & Cloud',
      tools: [
        { name: 'MongoDB', level: 90, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 88, color: 'bg-blue-700' },
        { name: 'MySQL', level: 85, color: 'bg-orange-500' },
        { name: 'AWS', level: 92, color: 'bg-yellow-600' },
        { name: 'Google Cloud', level: 85, color: 'bg-blue-500' },
        { name: 'Docker', level: 88, color: 'bg-blue-600' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      tools: [
        { name: 'TensorFlow', level: 85, color: 'bg-orange-500' },
        { name: 'PyTorch', level: 82, color: 'bg-red-600' },
        { name: 'OpenAI API', level: 90, color: 'bg-green-600' },
        { name: 'Scikit-learn', level: 88, color: 'bg-blue-500' },
        { name: 'Computer Vision', level: 80, color: 'bg-purple-600' },
        { name: 'NLP', level: 85, color: 'bg-indigo-600' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Technologies We Master</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in">
            Cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{tech.category}</h2>
                  <div className="space-y-6">
                    {tech.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                            {tool.name}
                          </span>
                          <span className="text-sm text-gray-500">{tool.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full ${tool.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{ width: `${tool.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver high-quality solutions using the best technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Understanding requirements and technology selection' },
              { step: '02', title: 'Design & Architecture', desc: 'Creating scalable system architecture and design' },
              { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing' },
              { step: '04', title: 'Deployment & Support', desc: 'Seamless deployment and ongoing maintenance' }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TechnologiesPage;
