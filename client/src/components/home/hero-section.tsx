import { Button } from "../ui/button";

export default function HeroSection() {
    return (
        <section className="py-20 md:py-28">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            Seamless Team Collaboration with OpenPaaS
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Manage your team, share tasks, conduct video
                            meetings, and collaborate on code in real-time—all
                            in one platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90"
                            >
                                Start for free
                            </Button>
                            <Button size="lg" variant="outline">
                                Book a demo
                            </Button>
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                                    >
                                        <img
                                            src={`/placeholder.svg?height=32&width=32&text=${i}`}
                                            alt="User avatar"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Join{" "}
                                <span className="font-medium">
                                    2,000+
                                </span>{" "}
                                teams already using OpenPaaS
                            </p>
                        </div>
                    </div>
                    <div className="relative mx-auto lg:ml-auto">
                        <div className="relative rounded-lg border bg-background p-2 shadow-lg">
                            <img
                                src="/placeholder.svg?height=500&width=700&text=OpenPaaS+Dashboard"
                                alt="OpenPaaS Dashboard"
                                width={700}
                                height={500}
                                className="rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
