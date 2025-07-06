
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Startups',
      label: 'Starter Plan',
      price: '₹9,999',
      period: 'Monthly charges',
      features: [
        { name: 'Marketing Strategy', included: true },
        { name: 'Marketing Strategy', included: true },
        { name: 'Non-Marketing Strategy', included: false },
        { name: 'Non-Marketing Strategy', included: false }
      ],
      popular: false
    },
    {
      name: 'Business',
      label: 'Professional Plan',
      price: '₹9,999',
      period: 'Monthly charges',
      features: [
        { name: 'Marketing Strategy Plans', included: true },
        { name: 'Marketing Strategy Plans', included: true },
        { name: 'Marketing Strategy Plans', included: true },
        { name: 'Non-Marketing Strategy', included: false },
        { name: 'Non-Marketing Strategy', included: false }
      ],
      popular: true
    },
    {
      name: 'Professional',
      label: 'Pro Plan',
      price: '₹9,999',
      period: 'Monthly charges',
      features: [
        { name: 'Marketing Strategy', included: true },
        { name: 'Marketing Strategy', included: true },
        { name: 'Non-Marketing Strategy', included: false },
        { name: 'Non-Marketing Strategy', included: false }
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            Package Pricing
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-8 mb-4">
            Flexible pricing plans for all
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-gradient-to-br from-purple-50 to-purple-100 border-2 transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-purple-500 shadow-2xl' : 'border-purple-200 hover:border-purple-400'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {plan.label}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-6 mb-2">{plan.name}</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>

                <Button 
                  onClick={() => navigate('/contact')}
                  className={`w-full py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white' : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white'}`}
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
