import { Router } from "@solidjs/router";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";

function App() {
  console.log("hi");
  
  return (
    <>
    <Router></Router>
      <Button>hi</Button> 
      <ModeToggle />
    </>
  );
}

export default App;
