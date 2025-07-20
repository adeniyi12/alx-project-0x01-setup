import { WelcomeProps } from "@/interfaces";

const UserCard: React.FC<{ user: WelcomeProps }> = ({ user }) => {
  return (
    <div className="max-w-sm md:max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">{user.name.charAt(0)}</div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">@{user.username}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{" "}
          <a href={`https://${user.website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </p>
        <p>
          <span className="font-medium">Address:</span> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
        </p>
        <p>
          <span className="font-medium">Company:</span> {user.company.name} - <em>{user.company.catchPhrase}</em>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
