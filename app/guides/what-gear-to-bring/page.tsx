import FloatingNavbar from "@/components/layout/FloatingNavBar";

export const metadata = {
    title: "What Gear to Bring | Tombstone Map",
    description:
      "A practical guide to useful gear for cliff jumping, outdoor swimming and checking conditions safely.",
  };
  
  export default function WhatGearToBringPage() {
    return (
      <main className="min-h-screen bg-black px-6 py-32 text-white">
        <FloatingNavbar/>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              Safety Guide
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight">
              What Gear to Bring
            </h1>
  
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              The right gear can make outdoor swimming and cliff jumping safer,
              warmer and more comfortable. It should never be used as a shortcut
              around proper location checks, depth inspection or good judgement.
            </p>
          </div>
  
          <div className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Swimwear
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Bring suitable swimwear such as swimming trunks, a swimsuit or
                whatever you are comfortable swimming in. Technically you could go
                all-natural, but that is very much a personal choice - and not
                always suitable depending on the location.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Wetsuit for Cold Water
              </h2>
  
              <p className="leading-relaxed text-white/65">
                A wetsuit can help keep you warmer and may reduce the impact of
                cold water shock, especially in colder conditions. The RNLI
                recommends wearing a wetsuit of suitable thickness for the water
                temperature, activity and time spent in the water.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                A wetsuit does not make cold water completely safe. You should
                still enter carefully, understand the risks and avoid staying in
                cold water for longer than you can safely manage.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Water Shoes or Secure Footwear
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Water shoes, old trainers or secure closed-toe footwear can help
                when walking over sharp rock, slippery ground, shells or uneven
                access routes. Coasteering guidance commonly includes secure
                footwear as part of the core kit.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                If you think there is a chance of landing on something sharp,
                shallow or hazardous, that is a sign you should not be jumping
                there until the landing zone has been properly checked and cleared.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Goggles or a Mask
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Goggles or a diving mask can make it easier to inspect the landing
                zone, check the depth and look for submerged rocks, branches,
                ledges or debris before anyone jumps.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                They are especially useful in darker water, shaded areas or spots
                where reflections make it difficult to see from the surface.
              </p>

              <p className="mt-4 leading-relaxed text-white/65">
              They can also be useful for spotters or safety swimmers in the event of 
              an incident, helping improve underwater visibility if somebody needs 
              assistance or retrieval from the water.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Safety Rope
              </h2>
  
              <p className="leading-relaxed text-white/65">
                A safety rope can be useful if there is a current, awkward exit,
                low confidence in the group or a need to help people return to an
                easy get-out point. It should be used carefully and never in a way
                that creates entanglement risk.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                If the current is strong enough that you feel you need a rope to
                stay safe, seriously consider whether the spot should be used at
                all.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Buoyancy Aid or Life Jacket
              </h2>
  
              <p className="leading-relaxed text-white/65">
                A buoyancy aid or life jacket can be useful for weaker swimmers,
                colder water, moving water or lower-confidence groups. The RNLI
                notes that wearing a flotation device can greatly increase your
                chances of getting through the initial shock of cold water.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                Many coasteering providers use buoyancy aids as standard kit, but
                for casual cliff jumping this depends on the location, conditions
                and the people involved.
              </p>

              <p className="mt-4 leading-relaxed text-white/65">
              Life jackets and buoyancy aids can also have disadvantages in certain situations. 
              They may restrict movement, make climbing or scrambling more difficult, and can 
              prevent somebody from diving below the surface quickly if needed. 
              Bulky flotation equipment should always be considered carefully depending on the environment and activity.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Helmet
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Helmets are commonly used by coasteering companies because they
                help protect against rock impact while scrambling, swimming near
                cliffs or moving through rough coastal terrain. Coasteering safety
                guidance often lists a helmet alongside a wetsuit, flotation
                device and secure footwear.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                For simple swimming spots it may not always be necessary, but it
                can be a sensible option around rocks, caves, ledges, rough water
                or unfamiliar terrain.
              </p>
            </section>
  
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold">
                Warm Layers, Towel and Dry Bag
              </h2>
  
              <p className="leading-relaxed text-white/65">
                Bring a towel, warm clothes, a changing robe or jacket, and a dry
                bag for valuables. Getting warm quickly after leaving the water is
                important, especially after cold-water exposure.
              </p>
  
              <p className="mt-4 leading-relaxed text-white/65">
                A phone in a waterproof pouch, basic first-aid kit, drinking water
                and snacks are also useful for longer walks or remote locations.
              </p>
            </section>
  
            <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-2xl font-semibold text-red-200">
                Important Reminder
              </h2>
  
              <p className="leading-relaxed text-red-100/75">
                Gear can reduce some risks, but it does not make an unsafe
                location safe. Always inspect the water, check the landing zone,
                assess the exit route and be willing to walk away.
              </p>
            </section>
          </div>
        </div>
      </main>
    );
  }