import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "react-daisyui";

const MyApp = () => {
  return (
    <div className="">
      <h1 className="text-6xl font-bold white">IRL Contracts</h1>
      <ConnectButton />
      <Button>Hello</Button>
    </div>
  );
};
export default MyApp;
