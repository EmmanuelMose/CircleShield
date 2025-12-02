import { MessageSquare, BookOpen, BarChart2, ShieldCheck } from 'lucide-react';

const infoFeatures = [
  {
    icon: <MessageSquare className="h-10 w-10 text-teal-400" />,
    title: 'AI Awareness Chatbot',
    description: 'Engage in confidential conversations with our AI chatbot to learn about rights, safety, and empowerment topics.',
  },
  {
    icon: <BookOpen className="h-10 w-10 text-teal-400" />,
    title: 'Personalized Learning Hub',
    description: 'Access curated courses, articles, and quizzes tailored to your interests and learning pace.',
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-teal-400" />,
    title: 'Mood & Progress Tracking',
    description: 'Monitor your well-being and track your learning journey with intuitive and private progress tools.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-teal-400" />,
    title: 'Bias Detection Tool',
    description: 'Analyze text for gender bias, promoting fair and inclusive communication in your personal and professional life.',
  },
];

const Info = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Core Features for Empowerment</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Explore the tools designed to support your growth and well-being.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-teal-500/20 transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;