import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import profileImage from '@/assets/circle.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 rounded-lg bg-primary flex items-center justify-center">
                 <img src={profileImage} alt="Pahasara Jayasuriya" className="w-10 h-10 rounded-xl object-cover" />
              </div>
              <span className="font-display font-semibold">Pahasara Jayasuriya</span>
            </div>
            <div className="h-2" />
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Pahasara Jayasuriya. All rights reserved.  
            </p>
          </div>

          {/* Quick Links */}
          {/* <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-base md:text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div> */}

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Pahasarajayasuriya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pahasarajayasuriya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:pahasarajayasuriya@gmail.com"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
