import { ConnectSuggestions } from "./_components/connect-suggestions";
import { Invitations } from "./_components/invitations";

export default function Page() {
  return (
    <div className="bg-white py-10 space-y-10 rounded-3xl py-10">
      <Invitations />
      <div className="px-5 md:px-8">
        <ConnectSuggestions />
      </div>
    </div>
  );
}
