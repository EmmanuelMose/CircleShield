import { Users, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">About CircleShield</h2>
              <p className="text-lg text-gray-400">
                CircleShield is a non-profit initiative dedicated to leveraging technology for women's empowerment. We believe in creating a world where every woman has the knowledge, confidence, and support to thrive.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0"><Eye className="h-8 w-8 text-teal-400"/></div>
                <div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-gray-400">A digital world free of bias, where women are empowered to lead and innovate.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0"><Target className="h-8 w-8 text-teal-400"/></div>
                <div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-gray-400">To provide accessible AI-powered tools and educational resources that foster awareness, safety, and personal growth for women everywhere.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0"><Users className="h-8 w-8 text-teal-400"/></div>
                <div>
                  <h3 className="text-xl font-bold">Our Community</h3>
                  <p className="text-gray-400">Join a supportive network of women and allies committed to making a difference.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Community" className="w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
