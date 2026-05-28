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
            <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-3xl md:text-5xl font-bold text-center">
                Project Not Found
            </div>
        );
    }

    const project: any = snapshot.data();

    return (
        <main className="bg-[#f5f3ee] min-h-screen text-black overflow-hidden">

            {/* HERO */}
            <section className="relative min-h-[75vh] md:min-h-[85vh] overflow-hidden flex items-center justify-center">

                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/65" />

                <div className="relative z-20 text-center px-4 sm:px-6 max-w-6xl pt-24">

                    <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#d89b1d] mb-5 sm:mb-6 font-semibold text-xs sm:text-sm">
                        Deepak Construction
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] tracking-[-2px]">

                        {project.title}

                    </h1>

                    <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 sm:mt-10 leading-8 sm:leading-10 max-w-4xl mx-auto">

                        {project.description}

                    </p>

                </div>

            </section>

            {/* CONTENT */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT */}
                    <div>

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-10 sm:w-12 h-[2px] bg-[#d89b1d]"></div>

                            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#d89b1d] text-xs sm:text-sm font-semibold">
                                Project Information
                            </p>

                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-8 md:mb-10">

                            Infrastructure Development

                        </h2>

                        <p className="text-gray-700 text-base sm:text-lg leading-8 sm:leading-10">

                            {project.description}

                        </p>

                        {/* PROJECT DETAILS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-10 md:mt-14">

                            {[
                                {
                                    title: "Client",
                                    value: project.client || "Deepak Construction",
                                },

                                {
                                    title: "Duration",
                                    value: project.duration || "Project Based",
                                },

                                {
                                    title: "Location",
                                    value: project.location || "Madhya Pradesh",
                                },

                                {
                                    title: "Quality",
                                    value: "Industrial Standard",
                                },

                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="bg-white rounded-[24px] sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5"
                                >

                                    <h3 className="text-[#d89b1d] text-xl sm:text-2xl font-black">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 mt-3 text-sm sm:text-base leading-7">
                                        {item.value}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* RIGHT VIDEO / IMAGE */}
                    <div>

                        {project.videoUrl ? (

                            <video
                                src={project.videoUrl}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="w-full rounded-[24px] sm:rounded-[35px] shadow-2xl border border-black/5"
                            />

                        ) : (

                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-[320px] sm:h-[450px] lg:h-[620px] object-cover rounded-[24px] sm:rounded-[35px] shadow-2xl border border-black/5"
                            />

                        )}

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="bg-black text-white py-20 md:py-28 text-center">

                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">

                        Building Reliable
                        <span className="block sm:inline text-[#d89b1d]"> Infrastructure</span>

                    </h2>

                    <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-8 sm:mt-10 leading-8 sm:leading-10">

                        Deepak Construction delivers infrastructure projects
                        with precision engineering and modern construction standards.

                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10 sm:mt-14">

                        <Link href="#contact" className="w-full sm:w-auto">

                            <button className="w-full sm:w-auto bg-[#d89b1d] text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold hover:scale-105 transition duration-300">

                                Contact Us

                            </button>

                        </Link>

                        <Link href="/" className="w-full sm:w-auto">

                            <button className="w-full sm:w-auto border border-white/10 px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:border-[#d89b1d] hover:text-[#d89b1d] transition duration-300">

                                Back To Home

                            </button>

                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}