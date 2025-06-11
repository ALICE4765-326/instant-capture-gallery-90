
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { texts } from "@/content/texts";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation de l'envoi du formulaire
    toast({
      title: texts.contact.form.successMessage.title,
      description: texts.contact.form.successMessage.description,
    });

    // Reset du formulaire
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4 slide-up">
            {texts.contact.title}
          </h1>
          <p className="text-center text-muted-foreground mb-16 slide-up">
            {texts.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="fade-in">
                <h2 className="text-2xl font-medium mb-6">{texts.contact.intro.title}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {texts.contact.intro.description}
                </p>
              </div>

              <div className="space-y-6">
                <Card className="fade-in" style={{ animationDelay: "0.1s" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{texts.contact.info.email.label}</p>
                        <p className="text-muted-foreground">{texts.contact.info.email.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="fade-in" style={{ animationDelay: "0.2s" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{texts.contact.info.phone.label}</p>
                        <p className="text-muted-foreground">{texts.contact.info.phone.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="fade-in" style={{ animationDelay: "0.3s" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{texts.contact.info.location.label}</p>
                        <p className="text-muted-foreground">{texts.contact.info.location.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulaire de contact */}
            <Card className="fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle>{texts.contact.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {texts.contact.form.fields.name.label}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={texts.contact.form.fields.name.placeholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {texts.contact.form.fields.email.label}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={texts.contact.form.fields.email.placeholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {texts.contact.form.fields.subject.label}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={texts.contact.form.fields.subject.placeholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {texts.contact.form.fields.message.label}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={texts.contact.form.fields.message.placeholder}
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    {texts.contact.form.submitButton}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
