import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const buttonClick = () => {
    window.open("https://www.facebook.com/share/12M6pP57yC7/", "_blank");
  };

return (
    <div className="relative mt-20 border-t-1 max-w-[70rem] border-purple-900/20 w-full flex-col py-10 mx-auto justify-center flex items-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            <div className="space-y-4">
                <Link to="/" className="flex items-center gap-2">
                    <span className="font-['sans'] mx-auto text-lg font-bold tracking-tight text-black">
                        The Sweet Space
                    </span>
                </Link>
                <p className="text-sm text-black mx-auto w-[80%]">
                    Indulge in our delightful desserts and satisfy your sweet cravings.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-['sans'] font-bold text-black mb-4">
                    Quick Links
                </h3>
                <ul className="space-y-3">
                    <li>
                        <Link
                        onClick={() => window.scrollTo(0,0)}
                            to="/"
                            className="cursor-pointer text-sm text-black hover:text-purple-400 transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        onClick={() => window.scrollTo(0,0)}
                            to="/products"
                            className="cursor-pointer text-sm text-black hover:text-purple-400 transition-colors"
                        >
                            All Products
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-['sans'] font-bold text-black mb-4">
                    Contact Us
                </h3>
                <div className="not-italic space-y-3">
                    <Button
                        variant="link"
                        size="icon"
                        className="cursor-pointer text-3xl hover:text-green-400"
                    >
                            <Instagram className="h-16 w-16"/>
                        <span className="sr-only">Instagram</span>
                    </Button>
                    <Button
                        onClick={buttonClick}
                        variant="link"
                        size="icon"
                        className="cursor-pointer hover:text-green-400"
                    >
                            <Facebook className="h-16 w-16"/>
                        <span className="sr-only">Facebook</span>
                    </Button>
                    {/* <p className="text-sm text-muted-foreground">
                            Email: ?
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Phone: +1 (800) 123-4567
                        </p> */}
                </div>
            </div>
        </div>

        <div className="mt-12 w-full border-t border-purple-900/20 pt-6 -mb-4 text-center">
            <p className="text-md text-black">
                &copy; {new Date().getFullYear()} The Sweet Space. All rights
                reserved.
            </p>
        </div>
    </div>
);
}
