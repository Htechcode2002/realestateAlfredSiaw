import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { OurServices } from "@/components/our-services";
import { ClosingShowcase } from "@/components/closing-showcase";
import { TestimonialsSection } from "@/components/testimonials";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      {/* Sticky Luxury Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Agent Profile */}
        <HeroSection />

        {/* Our Services For You: 4 Cards in 1 Row */}
        <OurServices />

        {/* Recent Successful Closings & Sales Track Record */}
        <ClosingShowcase />

        {/* High-End Expansive Client Testimonials */}
        <TestimonialsSection />

        {/* Common Inquiries & Luxury Real Estate FAQ */}
        <FaqSection />
      </main>

      {/* Professional Agency Footer */}
      <Footer />

      {/* Floating Instant Lead / Chat Actions */}
      <FloatingContact />
    </div>
  );
}
