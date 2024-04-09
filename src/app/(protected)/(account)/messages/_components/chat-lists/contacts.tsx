import { ChatListItem } from "interfaces";
import { UserContact } from "./user-contact";

export const Contacts = ({ contacts }: { contacts: ChatListItem[] }) => {
  return (
    <ul className="divide-y divide-gray-200 divide-y-1 h-[30rem] overflow-y-scroll">
      {contacts?.map((contact) => (
        <li key={contact.id}>
          <UserContact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
