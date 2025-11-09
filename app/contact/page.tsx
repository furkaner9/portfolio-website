// app/contact/page.tsx
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { SocialLinks } from "@/components/contact/SocialLinks";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Benimle iletişime geçin. Projeleriniz için teklif alın veya işbirliği fırsatlarını konuşalım.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                İletişime Geçin
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Projeleriniz için teklif almak, işbirliği yapmak veya herhangi bir
              sorunuz için benimle iletişime geçebilirsiniz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <ContactInfo />
              <SocialLinks />
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border-2 shadow-lg h-[400px] bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.14500369385!2d28.849397!3d40.188622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e5d64c0884d%3A0xd018e82e767cf3cb!2sBursa!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bursa, Türkiye"
            />
          </div>
        </div>
      </section>
    </div>
  );
}