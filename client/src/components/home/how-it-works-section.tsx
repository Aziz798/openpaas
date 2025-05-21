export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-primary/90">
                            How It Works
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Streamlined workflow for your team
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            OpenPaaS simplifies team collaboration with an
                            intuitive workflow.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary">
                            <span className="text-xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold">
                            Create Your Team
                        </h3>
                        <p className="text-muted-foreground">
                            Set up your workspace and invite team members to
                            join.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary">
                            <span className="text-xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold">
                            Assign Tasks
                        </h3>
                        <p className="text-muted-foreground">
                            Create and assign tasks to team members with
                            deadlines.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary">
                            <span className="text-xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold">
                            Collaborate in Real-time
                        </h3>
                        <p className="text-muted-foreground">
                            Work together on tasks, code, and documents
                            simultaneously.
                        </p>
                    </div>
                </div>
                <div className="relative mx-auto max-w-5xl rounded-lg border bg-background p-2 shadow-lg">
                    <img
                        src="/placeholder.svg?height=400&width=900&text=OpenPaaS+Workflow"
                        alt="OpenPaaS Workflow"
                        width={900}
                        height={400}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    );
}
