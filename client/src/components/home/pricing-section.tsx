import { Button } from "../ui/button";
import { CheckSquare } from "lucide-react";
import { plans } from "@/data/placeholders";

export default function PricingSection() {
    return (
        <section id="pricing" className="py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-primary/90">
                            Pricing
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Simple, transparent pricing
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Choose the plan that's right for your team.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-lg border ${
                                plan.popular
                                    ? "border-primary ring-primary"
                                    : ""
                            } bg-background p-6 shadow-sm transition-all hover:shadow-md`}
                        >
                            {plan.popular && (
                                <div className="absolute -right-12 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-medium text-white">
                                    Popular
                                </div>
                            )}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">
                                        {plan.price}
                                    </span>
                                    <span className="text-muted-foreground">
                                        /month per user
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {plan.description}
                                </p>
                                <ul className="grid gap-2 py-4">
                                    {plan.features.map((feature, j) => (
                                        <li
                                            key={j}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckSquare className="h-4 w-4 text-primary" />
                                            <span className="text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={plan.popular
                                        ? "bg-primary hover:bg-primary/90"
                                        : ""}
                                    variant={plan.popular
                                        ? "default"
                                        : "outline"}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
