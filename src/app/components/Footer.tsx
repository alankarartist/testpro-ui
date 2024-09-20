import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer id="footer" className="bg-customPurple text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-semibold">About Us</h4>
          <ul className="mt-4 space-y-2">
            <li>Courses</li>
            <li>Mission</li>
            <li>Team</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>Mock Tests</li>
            <li>Practice Tests</li>
            <li>Previous Year Papers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Resources</h4>
          <ul className="mt-4 space-y-2">
            <li>Study Guides</li>
            <li>Video Tutorials</li>
            <li>Exam Tips</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Help & Support</h4>
          <ul className="mt-4 space-y-2">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>User Guide</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
