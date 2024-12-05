import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
    {/* Left Section: Logo and Menu Links */}
    <div className="flex items-center space-x-6">
      {/* Logo Icon */}
      <div className="flex items-center">
        <div className="bg-customOrange w-8 h-8 flex items-center justify-center rounded-full mr-2">
          <span className="text-white font-bold text-lg">T</span>
        </div>
        <Link href="/" className="text-xl font-bold text-black">
          TalkEdge
        </Link>
      </div>
      {/* Menu Links */}
      <div className="flex space-x-6 text-black">
        <Link
          href="/how-it-works"
          className="px-2.5 font-semibold text-customOrange">
          How it works
        </Link>
        <Link href="/pricing" className="px-2.5 font-semibold hover:text-gray-900">
          Pricing
        </Link>
        <Link href="/api" className="px-2.5 font-semibold hover:text-gray-900">
          API
        </Link>
      </div>
    </div>
    {/* Right Section: Buttons */}
    <div className="flex space-x-4">
      <Link
        href="/login"
        className="border border-gray-800 px-4 py-2 rounded-md text-black hover:bg-gray-100 font-medium"
      >
        Sign in
      </Link>
      <Link
        href="/create-chatbot"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 font-medium"
      >
        Create a Chatbot
      </Link>
    </div>
  </nav>
);

export default Navbar;
