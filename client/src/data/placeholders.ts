import type { Plan } from "@/types/data-types";

export const plans: Plan[] = [
    {
        name: "Starter",
        price: "$9",
        description: "Perfect for small teams just getting started",
        features: [
            "Up to 5 team members",
            "Basic task management",
            "Video calls (up to 30 min)",
            "Team messaging",
            "5GB storage",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Professional",
        price: "$29",
        description: "Ideal for growing teams with advanced needs",
        features: [
            "Up to 20 team members",
            "Advanced task management",
            "Unlimited video calls",
            "Live code collaboration",
            "50GB storage",
            "Analytics dashboard",
        ],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        description: "For large organizations requiring premium features",
        features: [
            "Unlimited team members",
            "Custom workflows",
            "Advanced security features",
            "Dedicated support",
            "500GB storage",
            "API access",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];
