import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <Code className="h-6 w-6 text-primary" />
                    <Link className="text-xl font-bold" to={"/"}>OpenPaaS</Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        to="#features"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        to="#how-it-works"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        How It Works
                    </Link>
                    <Link
                        to="#pricing"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        to="#testimonials"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Testimonials
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Log in
                    </Link>
                    <Button className="bg-primary hover:bg-primary/90">
                        Get Started
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
