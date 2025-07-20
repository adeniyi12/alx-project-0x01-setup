import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ post }) => {
  return (
    <div className="max-w-sm md:max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">{post.name.charAt(0)}</div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{post.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">@{post.username}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
        <p>
          <span className="font-medium">Email:</span> {post.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {post.phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{" "}
          <a href={`https://${post.website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            {post.website}
          </a>
        </p>
        <p>
          <span className="font-medium">Address:</span> {`${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}`}
        </p>
        <p>
          <span className="font-medium">Company:</span> {post.company.name} - <em>{post.company.catchPhrase}</em>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
