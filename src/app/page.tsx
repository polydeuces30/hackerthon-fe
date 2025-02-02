import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout withFooter withNavbar>
      <div
        className="flex flex-col items-center justify-end font-manrope text-white h-screen"
        style={{
          backgroundImage: 'url("/images/landing-page/background-hero.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col w-3/5 text-center gap-5">
          <h1 className="text-5xl font-semibold">
            Decentralized Live Streaming Platform
          </h1>
          <p className="text-[#d8d2d2]">
            Floo is the future of entertainment, offering a secure,
            decentralized platform where creators retain full ownership of their
            content, viewers enjoy enhanced privacy, and everyone benefits from
            a transparent, direct revenue model. Say goodbye to centralized
            control and hello to a global, barrier-free streaming experience
            powered by blockchain technology. Join us and redefine how the world
            streams.
          </p>
        </div>
      </div>
    </Layout>
  );
}
