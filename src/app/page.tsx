import { Footer, Header, Homepage } from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-pink-500">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
