import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    return <ProjectClient id={id} />;
}

async function ProjectClient({ id }: { id: string }) {

    const projectRef = doc(db, "projects", id);

    const snapshot = await getDoc(projectRef);

    if (!snapshot.exists()) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center text-5xl font-bold">
                Project Not Found
            </div>
        );
    }

    const project: any = snapshot.data();

    return (

        <main className="bg-[#f5f3ee] min-h-screen text-black">

            {/* HERO */}
            <section className="relative h-[85vh] overflow-hidden flex items-center justify-center">

                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-20 text-center px-6 max-w-5xl">

                    <p className="uppercase tracking-[6px] text-[#d89b1d] mb-6 font-semibold">
                        Deepak Construction
                    </p>

                    <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95]">

                        {project.title}

                    </h1>

                    <p className="text-gray-300 text-xl mt-10 leading-10">

                        {project.description}

                    </p>

                </div>

            </section>

            {/* CONTENT */}
            <section className="max-w-7xl mx-auto px-6 py-28">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}
                    <div>

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-12 h-[2px] bg-[#d89b1d]"></div>

                            <p className="uppercase tracking-[5px] text-[#d89b1d] text-sm font-semibold">
                                Project Information
                            </p>

                        </div>

                        <h2 className="text-5xl font-black leading-tight mb-10">

                            Infrastructure Development

                        </h2>

                        <p className="text-gray-700 text-lg leading-10">

                            {project.description}

                        </p>

                        {/* PROJECT DETAILS */}
                        <div className="grid grid-cols-2 gap-6 mt-14">

                            <div className="bg-white rounded-3xl p-8 shadow-sm">

                                <h3 className="text-[#d89b1d] text-2xl font-black">
                                    Client
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    {project.client}
                                </p>

                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">

                                <h3 className="text-[#d89b1d] text-2xl font-black">
                                    Duration
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    {project.duration}
                                </p>

                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">

                                <h3 className="text-[#d89b1d] text-2xl font-black">
                                    Location
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    {project.location}
                                </p>

                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">

                                <h3 className="text-[#d89b1d] text-2xl font-black">
                                    Quality
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    Industrial Standard
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT VIDEO */}
                    <div>

                        <video
                            src={project.videoUrl}
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full rounded-[35px] shadow-2xl"
                        />

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="bg-black text-white py-28 text-center">

                <div className="max-w-4xl mx-auto px-6">

                    <h2 className="text-5xl md:text-7xl font-black leading-tight">

                        Building Reliable
                        <span className="text-[#d89b1d]"> Infrastructure</span>

                    </h2>

                    <p className="text-gray-400 text-xl mt-10 leading-10">

                        Deepak Construction delivers infrastructure projects
                        with precision engineering and modern construction
                        standards.

                    </p>

                    <div className="flex justify-center gap-6 mt-14 flex-wrap">

                        <button className="bg-[#d89b1d] text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition duration-300">

                            Contact Us

                        </button>

                        <Link href="/">

                            <button className="border border-white/10 px-10 py-5 rounded-full hover:border-[#d89b1d] hover:text-[#d89b1d] transition duration-300">

                                Back To Home

                            </button>

                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}