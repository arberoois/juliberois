import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
       <main className="flex-grow">
        {/* Acá va tu contenido */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">Juli Berois | Proximamente</h1>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
