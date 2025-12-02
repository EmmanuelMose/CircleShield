import { Shield, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold text-white">CircleShield</span>
            </div>
            <p className="text-gray-400">AI-Based Awareness & Education Hub for Women's Empowerment.</p>
            <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400 mt-4">Subscribe to our newsletter for the latest updates and resources.</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="Enter your email" className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-r-lg">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 CircleShield. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
