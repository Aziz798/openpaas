/* @refresh reload */
import { render } from "solid-js/web";
import "@/index.css";
import App from "@/app.tsx";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";

const root = document.getElementById("root");
const queryClient = new QueryClient();

render(() => (
    <>
        <ColorModeScript storageKey="theme" storageType="localStorage" />
        <ColorModeProvider initialColorMode="system">
            <QueryClientProvider client={queryClient}>
                <App />
                <SolidQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ColorModeProvider>
    </>
), root!);
