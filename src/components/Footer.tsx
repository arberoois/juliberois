import moment from "moment";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-400 text-white px-6 py-6">
  <div className="max-w-7xl mx-auto flex justify-center items-center">
    <span className="text-sm font-semibold text-center">
      Made with love by <Link 
      href="https://instagram.com/agustinberois" 
      target="_blank" 
      className="text-pink-100 hover:text-white  transition-colors">agustinberois</Link>  | {moment().format('YYYY')}
    </span>
  </div>
</footer>
  );
}