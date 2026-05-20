// app/(auth)/layout.jsx
import Footer from "@/components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col justify-between">
     
      <div className="flex-grow flex items-center justify-center p-6">
        {children}
      </div>

      <Footer />
    </div>
  );
}