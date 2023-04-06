import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "react-daisyui";

const MyApp = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">IRL Contracts</h1>
      <ConnectButton />
      <Button>Hello</Button>
    </div>
  );
};
export default MyApp;
