import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

type SiteShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteShell({
  children,
  className = "relative min-h-screen bg-white font-poppins",
}: SiteShellProps) {
  return (
    <main className={className}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
