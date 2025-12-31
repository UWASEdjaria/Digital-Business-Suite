import { LiveBadge } from "@/components/shared/LiveBadge";
import { notFound } from "next/navigation";

// For now, we mock the database fetch
async function getProfile(username: string) {
  // In a real app: const { data } = await supabase.from('profiles').select().eq('username', username)
  if (username === "error") return null; 
  
  return {
    fullName: "Alex Rivera",
    role: "Senior Frontend Engineer",
    bio: "Building the future of digital identities.",
    themeColor: "#0F172A",
    links: [
      { label: "View Portfolio", url: "#" },
      { label: "LinkedIn", url: "#" },
      { label: "Book a Meeting", url: "#" }
    ]
  };
}

export default async function PublicProfile({ params }: { params: { username: string } }) {
  const profile = await getProfile(params.username);

  if (!profile) notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6" style={{ backgroundColor: profile.themeColor }}>
      {/* Dynamic Header */}
      <div className="mb-8">
        <LiveBadge />
      </div>

      {/* Profile Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 text-white shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl mb-4 shadow-lg" />
          <h1 className="text-3xl font-bold tracking-tight">{profile.fullName}</h1>
          <p className="text-blue-200 font-medium mb-4">{profile.role}</p>
          <p className="text-gray-300 text-sm mb-8 leading-relaxed">{profile.bio}</p>
          
          <div className="w-full space-y-4">
            {profile.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="block w-full py-4 bg-white text-brand-primary rounded-2xl font-bold hover:scale-[1.02] transition-transform text-center shadow-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-12 text-white/40 text-xs font-medium">
        Powered by Digital Business Suite
      </footer>
    </main>
  );
}