export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-16 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-primary/90">
                            Testimonials
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Trusted by teams worldwide
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            See what our customers have to say about OpenPaaS.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            quote:
                                "OpenPaaS has transformed how our engineering team collaborates on code. The live collaboration feature is a game-changer.",
                            author: "Sarah Johnson",
                            role: "CTO, TechCorp",
                        },
                        {
                            quote:
                                "We've reduced our meeting time by 40% since switching to OpenPaaS. The task management system is incredibly intuitive.",
                            author: "Michael Chen",
                            role: "Product Manager, InnovateCo",
                        },
                        {
                            quote:
                                "The video call quality is exceptional, and being able to code together in real-time has made remote work so much easier.",
                            author: "Emily Rodriguez",
                            role: "Lead Developer, StartupX",
                        },
                    ].map((testimonial, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke="none"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-muted-foreground">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-auto">
                                    <p className="font-semibold">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
