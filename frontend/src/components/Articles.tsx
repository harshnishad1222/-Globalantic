
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Articles = () => {
  const articles = [
    {
      title: 'Build up healthy habits and strong peaceful life.',
      excerpt: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '25 SEPTEMBER 2021',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      title: 'How to bring the season into your great marketing.',
      excerpt: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '25 SEPTEMBER 2021',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      title: 'How to bring the season into your great marketing.',
      excerpt: 'Lorem ipsum dolor consectetur adipiscing eiusmod tempor...',
      date: '25 SEPTEMBER 2021',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Interesting Articles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="text-sm text-gray-500 font-medium">{article.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
