import Link from "next/link"

export default function Navbar() {


  return (
   <header className="w-full bg-pink-400 text-white px-6 py-4 shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <span className="text-xl font-bold">Juli Berois</span>
    <nav>
      <ul className="flex space-x-6">
        <li className="hover:text-fuchsia-300 cursor-pointer">Biografía</li>
        <li className="hover:text-fuchsia-300 cursor-pointer">Youtube</li>
        <li className="hover:text-fuchsia-300 cursor-pointer">TikTok</li>
        <li className="hover:text-fuchsia-300 cursor-pointer">Galería</li>
        <li className="hover:text-fuchsia-300 cursor-pointer">Contacto</li>
      </ul>
    </nav>
  </div>
</header>
  )
}
