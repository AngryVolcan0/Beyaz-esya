"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneCall, Clock, Shield, PenTool as Tool, Star, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout>();
  const phoneNumber = "(0212) 552 73 60";
  const phoneNumberClean = "+902125527360";

  const services = [
    {
      title: "Buzdolabı Servisi",
      description: "Tüm marka ve modellerde profesyonel buzdolabı tamir hizmeti",
      image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    },
    {
      title: "Çamaşır Makinesi Servisi",
      description: "Uzman teknisyenlerle çamaşır makinesi tamir ve bakım hizmeti",
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80",
    },
    {
      title: "Bulaşık Makinesi Servisi",
      description: "Garantili bulaşık makinesi tamir ve bakım hizmetleri",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Ayşe Y.",
      comment: "Çok hızlı ve profesyonel hizmet. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
    {
      name: "Mehmet K.",
      comment: "Uygun fiyata kaliteli hizmet. Teşekkürler!",
      rating: 5,
    },
    {
      name: "Zeynep A.",
      comment: "Aynı gün içinde sorunumuzu çözdüler. Çok memnun kaldık.",
      rating: 5,
    },
  ];

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">Beyaz Eşya Servisi</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground/80 hover:text-primary">Ana Sayfa</a>
              <a href="#features" className="text-foreground/80 hover:text-primary">Özellikler</a>
              <a href="#services" className="text-foreground/80 hover:text-primary">Hizmetler</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary">Yorumlar</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary">İletişim</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#home" className="block text-foreground/80 hover:text-primary py-2">Ana Sayfa</a>
              <a href="#features" className="block text-foreground/80 hover:text-primary py-2">Özellikler</a>
              <a href="#services" className="block text-foreground/80 hover:text-primary py-2">Hizmetler</a>
              <a href="#testimonials" className="block text-foreground/80 hover:text-primary py-2">Yorumlar</a>
              <a href="#contact" className="block text-foreground/80 hover:text-primary py-2">İletişim</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-white pt-16">
        <Image
          src="https://img.freepik.com/free-photo/smiling-woman-headset-presentation-something_329181-11710.jpg?t=st=1739442681~exp=1739446281~hmac=816a813ff8c9fcd09acf63955cfbeef9b9a86360a347ad143365f08d3730f201&w=740"
          alt="Profesyonel Çağrı Merkezi Temsilcisi"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Profesyonel Beyaz Eşya Servisi</h1>
            <p className="text-lg md:text-xl mb-8">
              7/24 hızlı, güvenilir ve garantili beyaz eşya tamir hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={`tel:${phoneNumberClean}`}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 w-full group transition-all duration-300"
                >
                  <PhoneCall className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  <span className="group-hover:underline">{phoneNumber}</span>
                </Button>
              </a>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 w-full sm:w-auto">
                Servis Talebi Oluştur
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Neden Bizi Seçmelisiniz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                <Clock className="mx-auto h-12 w-12 mb-4 text-primary relative z-10" />
                <h3 className="text-xl font-semibold mb-3">7/24 Hizmet</h3>
                <p className="text-muted-foreground">
                  Gece gündüz yanınızdayız. Acil durumlarınızda bile hızlı çözüm sunuyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                <Shield className="mx-auto h-12 w-12 mb-4 text-primary relative z-10" />
                <h3 className="text-xl font-semibold mb-3">Garantili Hizmet</h3>
                <p className="text-muted-foreground">
                  Tüm hizmetlerimiz 1 yıl garantili. Güvenle tercih edebilirsiniz.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                <Tool className="mx-auto h-12 w-12 mb-4 text-primary relative z-10" />
                <h3 className="text-xl font-semibold mb-3">Uzman Ekip</h3>
                <p className="text-muted-foreground">
                  Deneyimli ve sertifikalı teknisyenlerimizle kaliteli hizmet sunuyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Hizmetlerimiz</h2>
          
          {/* Desktop view */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 md:h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Detaylı Bilgi
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile slider */}
          <div className="md:hidden relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="overflow-hidden mx-4">
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button variant="outline" className="w-full">
                        Detaylı Bilgi
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Müşteri Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Hemen İletişime Geçin</h2>
            <p className="text-xl text-muted-foreground mb-8">
              7/24 hizmetinizdeyiz. Bize ulaşın, en kısa sürede yanıt verelim.
            </p>
            <a 
              href={`tel:${phoneNumberClean}`}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 group transition-all duration-300"
              >
                <PhoneCall className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                <span className="group-hover:underline">{phoneNumber}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Fixed Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <a 
          href={`tel:${phoneNumberClean}`}
          className="inline-block"
          aria-label="Hemen Arayın"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 rounded-full shadow-lg h-14 w-14 p-0 group"
          >
            <PhoneCall className="h-6 w-6 group-hover:animate-pulse" />
          </Button>
        </a>
      </div>
    </main>
  );
}
