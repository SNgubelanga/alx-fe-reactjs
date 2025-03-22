function UserProfile() {
    return (
      <div className="user-profile hover:shadow-xl bg-gray-100 md:p-8 sm:p-4 md:max-w-sm sm:max-w-xs mx-auto my-20 rounded-lg shadow-lg">
        <img className="hover:scale-110 transition-transform duration-300 ease-in-out rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" />
        <h1 className="hover:text-blue-500 text-xl text-blue-800 sm:text-lg md:text-xl my-4">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
}
  
export default UserProfile;