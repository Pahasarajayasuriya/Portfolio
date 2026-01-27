import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';
import resume from '@/assets/Pahasara_Jayasuriya_SE.pdf';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div> */}

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Pahasara Nimnath
                <br />
                <span className="gradient-text">Jayasuriya</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build scalable, high-quality software solutions with clean code and a strong engineering mindset.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="gap-2 group hover:bg-zinc-800 hover:text-white hover:border-[#2525e8]">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={resume} download="Pahasara_Jayasuriya_SE.pdf">
                <Button size="lg" variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground hover:bg-zinc-800">
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              {/* <span className="text-sm text-muted-foreground">Follow me:</span> */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/Pahasarajayasuriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pahasarajayasuriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:pahasarajayasuriya@gmail.com"
                  className="social-icon"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated gradient ring */}
              <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] -left-20 -top-8 rounded-full border-4 border-transparent animate-spin-slow bg-gradient-to-tr from-primary/30 via-accent/30 to-primary/10 blur-[2px]" style={{ zIndex: 0 }} />
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-background -left-20 -top-8" style={{ zIndex: 1 }}>
                <img
                  src={profileImage}
                  alt="Pahasara Nimnath Jayasuriya"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              {/* <div className="absolute -right-2 top-1/4 bg-card px-4 py-2 rounded-xl card-elevated animate-float">
                <span className="text-sm font-semibold">🚀 Problem Solver</span>
              </div>
              <div className="absolute -left-20 bottom-1/4 bg-card px-4 py-2 rounded-xl card-elevated animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold">💻 Full Stack Dev</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
