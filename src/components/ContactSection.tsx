import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pahasarajayasuriya@gmail.com',
    href: 'mailto:pahasarajayasuriya@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 772 815 328',
    href: 'tel:+94772815328',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Pahasarajayasuriya',
    href: 'https://github.com/Pahasarajayasuriya',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'pahasarajayasuriya',
    href: 'https://www.linkedin.com/in/pahasarajayasuriya',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="section-subheading mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl card-elevated">
              <h3 className="font-display font-semibold text-xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="font-display font-semibold text-lg mb-3">Ready to collaborate?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Whether you have a project in mind or just want to connect, I'd love to hear from you. Let's build something amazing together!
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <MapPin className="w-4 h-4" />
                <span>Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl card-elevated">
            <h3 className="font-display font-semibold text-xl mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell me about your project or just say hi!"
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
