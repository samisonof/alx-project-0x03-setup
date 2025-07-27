import Link from "next/link";
import Button from "../common/Button";
import { ButtonProps } from "@/interface";

const Header: React.FC = () => {
  const handleSignIn = () => {
    console.log("Sign In Clicked");
  };

  const handleSignUp = () => {
    console.log("Sign Up Clicked");
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
            action={handleSignIn}
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
            action={handleSignUp}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
