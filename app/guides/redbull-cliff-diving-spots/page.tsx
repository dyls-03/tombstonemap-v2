import FloatingNavbar from "@/components/layout/FloatingNavBar";

export const metadata = {
    title: "Red Bull Cliff Diving Spots Around The World | Tombstone Map",
    description:
      "A guide to famous Red Bull cliff diving and high diving locations around the world, including iconic competition venues and natural jumping spots.",
  };
  
  const spots = [
    {
      name: "Mostar, Bosnia and Herzegovina",
      href: "/spots/43p33740-17p81500",
      description: [
        "Home to the iconic Stari Most bridge, one of the most famous cliff diving locations in the world.",
  
        "Red Bull Cliff Diving has hosted events here multiple times and the local diving tradition dates back centuries.",
  
        "Although it is a famous professional diving location, recreational visitors should still treat it seriously and only jump with proper local knowledge and safety checks.",
      ],
    },
  
    {
      name: "Polignano a Mare, Italy",
      href: "/spots/40p99710-17p21784",
      description: [
        "A dramatic coastal town built into limestone cliffs above the Adriatic Sea.",
  
        "Known for its spectacular Red Bull Cliff Diving events and stunning Mediterranean scenery.",
  
        "The combination of cliffs, caves and clear blue water has made it one of the most recognisable stops in the series.",
      ],
    },
  
    {
        name: "Abereiddy, Wales",
        href: "/spots/51p93800--5p20910",
        description: [
          "A rugged coastal location in Pembrokeshire known for dramatic cliffs, sea caves and deep blue water.",
      
          "The Blue Lagoon at Abereiddy has hosted Red Bull cliff diving events and is one of the most famous outdoor swimming and jumping spots in the UK.",
      
          "Conditions here can change significantly depending on swell, tides and weather, and the surrounding cliffs and rocks should always be treated with caution.",
        ],
    },

    {
        name: "Vila Franca do Campo, Azores",
        href: "/spots/37p70572--25p44172",
        description: [
          "Located off the coast of São Miguel in the Azores, Vila Franca do Campo is a volcanic islet surrounded by deep Atlantic water and dramatic cliff scenery.",
      
          "The Azores have featured in the Red Bull Cliff Diving World Series and are known for rugged coastlines, ocean swimming and natural volcanic formations.",
      
          "The area around the islet attracts swimmers, cliff jumpers and adventure tourists from around the world, although Atlantic swell, currents and changing ocean conditions should always be treated seriously.",
        ],
    },
  ];
  
  export default function RedBullCliffDivingPage() {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white">
        <FloatingNavbar/>
        <div className="mx-auto max-w-5xl">
          
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Adventure Guide
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight">
              Red Bull Cliff Diving Spots Around The World
            </h1>
  
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
              Red Bull Cliff Diving events take place at some of the most iconic
              diving locations in the world, combining natural cliffs, historic
              landmarks and purpose-built platforms in spectacular environments.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
              This page highlights some of these iconic Red Bull Cliff Diving spots
              that you could jump at. Some Red Bull spots require those purpose-built
              platforms and so have been omitted from this guide.
            </p>
          </div>
  
          <div className="mb-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
            <p className="leading-relaxed text-cyan-100/80">
              Many Red Bull Cliff Diving venues are professional competition
              locations designed for elite athletes with carefully managed safety
              systems, inspections and support teams. Recreational visitors should
              never assume these locations are safe to jump without proper
              inspection and local knowledge.
            </p>
          </div>
  
          <div className="space-y-6">
            {spots.map((spot) => (
              <section
                key={spot.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                <h2 className="mb-4 text-3xl font-semibold">
                  {spot.name}
                </h2>
  
                <div className="space-y-4">
                    {spot.description.map((paragraph) => (
                        <p
                        key={paragraph}
                        className="leading-relaxed text-white/65"
                        >
                        {paragraph}
                        </p>
                    ))}
                    </div>

                <a
                    href={spot.href}
                    className="mt-6 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-400/15"
                >
                    View spot page →
                </a>
              </section>
            ))}
          </div>
  
          <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-semibold">
              Competition vs Recreational Jumping
            </h2>
  
            <p className="leading-relaxed text-white/65">
              Professional cliff diving competitions involve safety teams,
              underwater inspections, rescue support, controlled conditions and
              years of athlete training. Recreational cliff jumping should always
              be approached cautiously and responsibly.
            </p>
  
            <p className="mt-4 leading-relaxed text-white/65">
              Water depth, tides, currents and underwater hazards can change over
              time, even at famous locations. Never assume a spot is safe based
              solely on videos, social media or professional events.
            </p>
          </section>
  
          <section className="mt-6 rounded-3xl border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-semibold text-red-200">
              Important Reminder
            </h2>
  
            <p className="leading-relaxed text-red-100/75">
              Tombstone Map does not endorse or guarantee the safety of any cliff
              jumping location. Always inspect conditions carefully and make safe,
              responsible decisions.
            </p>
          </section>
        </div>
      </main>
    );
  }