import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const EMAILJS_SERVICE_ID = 'service_o5tx1gx';
const EMAILJS_TEMPLATE_ID = 'template_fylomzu';
const EMAILJS_PUBLIC_KEY = '4jHVLWU0e_7cDsKnz';

const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: 'Message sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or just say hi!"
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
