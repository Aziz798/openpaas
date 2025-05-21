import { Button } from "../ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="py-16 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to transform how your team works?
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Join thousands of teams already using OpenPaaS to
                            boost productivity and collaboration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90"
                            >
                                Start your free trial
                            </Button>
                            <Button size="lg" variant="outline">
                                Schedule a demo
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-lg border bg-background p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-primary">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    14-day free trial
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    No credit card required
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-primary">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Enterprise-grade security
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Your data is always protected
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-primary">
                                <ArrowRight className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Easy onboarding
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Get your team up and running in minutes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
