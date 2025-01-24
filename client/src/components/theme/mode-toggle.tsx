import { Moon, Sun } from "lucide-solid";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useColorMode } from "@kobalte/core";

export function ModeToggle() {
    const { setColorMode } = useColorMode();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="outline" size="icon">
                    <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setColorMode("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorMode("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setColorMode("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
