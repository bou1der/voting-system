import { getServerAuthSession } from "~/server/auth";
import { WelcomeBlock } from "./welcome";

export default async function LandingPage() {
  const session = await getServerAuthSession();

  return (
    <WelcomeBlock />
  )
}
