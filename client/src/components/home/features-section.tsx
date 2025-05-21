import {
    BarChart,
    CheckSquare,
    Code,
    MessageSquare,
    Users,
    Video,
} from "lucide-react";

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-primary/90">
                            Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Everything you need for team productivity
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            OpenPaaS combines all essential collaboration tools
                            in one seamless platform.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary mb-4">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">
                            Team Management
                        </h3>
                        <p className="text-muted-foreground">
                            Create teams, assign roles, and manage permissions
                            with ease.
                        </p>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary mb-4">
                            <CheckSquare className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">
                            Task Sharing
                        </h3>
                        <p className="text-muted-foreground">
                            Assign, track, and collaborate on tasks with your
                            team in real-time.
                        </p>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary mb-4">
                            <Video className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">
                            Video Meetings
                        </h3>
                        <p className="text-muted-foreground">
                            Conduct HD video calls with screen sharing and
                            recording capabilities.
                        </p>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary mb-4">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Messaging</h3>
                        <p className="text-muted-foreground">
                            Chat in real-time with direct messages, group chats,
                            and channels.
                        </p>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary mb-4">
                            <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">
                            Live Code Collaboration
                        </h3>
                        <p className="text-muted-foreground">
                            Write and edit code together in real-time with
                            syntax highlighting.
                        </p>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-primary mb-4">
                            <BarChart className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Analytics</h3>
                        <p className="text-muted-foreground">
                            Track team performance and productivity with
                            detailed analytics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
