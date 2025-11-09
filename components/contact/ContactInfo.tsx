// app/components/contact/ContactInfo.tsx
"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 (5XX) XXX XX XX",
    href: "tel:+905XXXXXXXXX",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Konum",
    value: "Bursa, Türkiye",
    href: "https://maps.google.com/?q=Bursa,Turkey",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: "Pzt-Cum 9:00 - 18:00",
    href: null,
    color: "from-purple-500 to-pink-500",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
      {contactInfo.map((info, index) => {
        const Icon = info.icon;
        const content = (
          <Card 
            className={`border-2 transition-all duration-300 ${
              info.href 
                ? "hover:shadow-lg hover:border-primary/50 cursor-pointer" 
                : ""
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-linear-to-br ${info.color} flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium wrap-break-word">
                    {info.value}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );

        return info.href ? (
          <a
            key={index}
            href={info.href}
            target={info.href.startsWith("http") ? "_blank" : undefined}
            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {content}
          </a>
        ) : (
          <div key={index}>{content}</div>
        );
      })}

      {/* Quick Note */}
      <Card className="border-2 border-primary/20 bg-primary/5 mt-6">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            💡 <strong>Hızlı Yanıt:</strong> Genellikle 24 saat içinde geri 
            dönüş yapıyorum. Acil durumlar için telefon ile iletişime 
            geçebilirsiniz.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}