import { UserContact } from "./user-contact";

export const Contacts = () => {
  return (
    <ul className="divide-y divide-gray-400 divide-y-1 h-[30rem] overflow-y-scroll">
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <UserContact />
        </li>
      ))}
    </ul>
  );
};
