import FloatingNavbar from "@/components/layout/FloatingNavBar";

export default function SupportPage() {
    return (
        
        <main className="mx-auto max-w-3xl px-4 pb-12 pt-28">
            <FloatingNavbar/>
            <section className="text-center">
            
                <h1 className="text-4xl font-bold">
                    Support Tombstone Map
                </h1>

                <p className="mt-4 text-lg text-gray-400">
                    Tombstone Map is free to use and ad-free.
                    If the map has helped you discover somewhere new,
                    consider supporting the project to help cover running costs
                    and keep the map growing.
                </p>
            </section>

            <section className="mt-10 rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-xl">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">
                        Help keep the map growing
                    </h2>

                    <p className="mt-3 text-gray-400">
                        Support goes towards hosting, mapping services,
                        development and adding new locations.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/10 bg-neutral-800 p-4 text-center">
                        <div className="text-xl font-semibold">£3</div>
                        <div className="mt-1 text-sm text-gray-400">
                            Small support
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-neutral-800 p-4 text-center">
                        <div className="text-xl font-semibold">£5</div>
                        <div className="mt-1 text-sm text-gray-400">
                            Helps cover costs
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-neutral-800 p-4 text-center">
                        <div className="text-xl font-semibold">£10</div>
                        <div className="mt-1 text-sm text-gray-400">
                            Big support
                        </div>
                    </div>
                </div>

                <a
                    href="https://ko-fi.com/404dylan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block w-full rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-500"
                >
                    ❤️ Support Tombstone Map
                </a>

                <p className="mt-3 text-center text-sm text-gray-500">
                    One-time or monthly support available through Ko-fi.
                </p>
            </section>
        </main>
    );
}