import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import PricingSection from "@/components/home/pricing-section";
import CtaSection from "@/components/home/cta-section";

export default function HomePage() {
    return (
        <main className="flex-1">
            <HeroSection />

            <FeaturesSection />

            <HowItWorksSection />

            <TestimonialsSection />

            <PricingSection />

            <CtaSection />
        </main>
    );
}
