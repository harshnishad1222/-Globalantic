
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Briefcase, Heart, Coffee, Zap, Award } from 'lucide-react';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Bhopal, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our dynamic team to build cutting-edge web applications using React, TypeScript, and modern development practices.',
      requirements: ['Strong React.js experience', 'TypeScript proficiency', 'REST API integration', 'Git version control'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Professional development']
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Work on exciting AI projects, developing machine learning models and integrating AI solutions into client applications.',
      requirements: ['Python expertise', 'Machine Learning frameworks', 'Data analysis skills', 'Problem-solving mindset'],
      benefits: ['Stock options', 'Learning budget', 'Conference attendance', 'Cutting-edge projects']
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Bhopal, India',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Protect our clients and systems by implementing robust security measures and conducting security assessments.',
      requirements: ['Security certifications', 'Penetration testing', 'Risk assessment', 'Incident response'],
      benefits: ['Premium healthcare', 'Training certifications', 'Security conferences', 'Career advancement']
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create beautiful, user-friendly designs that enhance user experience across web and mobile applications.',
      requirements: ['Design tools mastery', 'User research', 'Prototyping skills', 'Portfolio required'],
      benefits: ['Creative freedom', 'Design tools budget', 'Mentorship program', 'Flexible workspace']
    }
  ];

  const benefits = [
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance and wellness programs' },
    { icon: Coffee, title: 'Work-Life Balance', desc: 'Flexible hours and remote work options' },
    { icon: Zap, title: 'Innovation Time', desc: '20% time for personal projects and learning' },
    { icon: Award, title: 'Recognition', desc: 'Performance bonuses and career advancement opportunities' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Join Our Team</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in">
            Be part of a dynamic team that's shaping the future of technology. Grow your career with us.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Discover exciting opportunities to advance your career</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-2xl transition-all duration-300 hover:scale-102 cursor-pointer"
                    onClick={() => setSelectedJob(job)}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {job.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {req}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 rounded-full transition-all duration-300 hover:scale-105">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600">Amazing benefits and a culture that values growth</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in fostering a collaborative, innovative, and inclusive environment where every team member can thrive and make a meaningful impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Collaborative team environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Innovation-driven projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Continuous learning opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mx-auto flex items-center justify-center">
                <div className="text-8xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CareerPage;
