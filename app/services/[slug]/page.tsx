import Link from "next/link";

const services: any = {
    "water-pipeline-installation": {
        title: "Water Pipeline Installation",
        image: "/pipeline.png",
        gallery: [
            "/pipeline1.webp",
            "/pipeline2.webp",
            "/pipeline3.webp",
        ],
        video: "/pipeline-video.mp4",

        description:
            "Deepak Construction provides professional underground and industrial water pipeline installation services using advanced machinery, precision engineering and durable infrastructure systems.",

        details:
            "Our team specializes in large-scale water pipeline projects for industrial, municipal and commercial sectors. We ensure efficient execution, safety standards and long-term durability in every project.",
    },

    "civil-construction": {
        title: "Civil Construction",
        image: "/civil.webp",
        gallery: [
            "/civil1.png",
            "/civil2.png",
            "/civil3.png",
        ],
        video: "/civil-work.mp4",

        description:
            "Complete civil infrastructure solutions including structural foundations, RCC work and industrial construction.",

        details:
            "We deliver high-quality civil engineering projects with modern construction techniques and experienced project execution teams.",
    },

    "excavation-work": {
        title: "Excavation Work",
        image: "/excavation.webp",
        gallery: [
            "/excavation1.webp",
            "/excavation2.webp",
            "/excavation3.webp",
        ],
        video: "/Excavation.mp4",

        description:
            "Advanced excavation operations using modern heavy machinery and skilled operators.",

        details:
            "Our excavation services support industrial pipelines, roadwork, drainage systems and large-scale infrastructure development.",
    },

    "industrial-pipeline-systems": {
        title: "Industrial Pipeline Systems",
        image: "/industrial.webp",
        gallery: [
            "/industrial1.webp",
            "/industrial2.webp",
            "/industrial3.webp",
        ],
        video: "/industrial-video.mp4",

        description:
            "Industrial-grade pipeline systems designed for performance, durability and operational safety.",

        details:
            "We engineer and install industrial pipeline systems capable of supporting high-performance infrastructure environments.",
    },

    "building-construction": {
        title: "Building Construction",
        image: "/building.webp",
        gallery: [
            "/building1.webp",
            "/building2.webp",
            "/building3.webp",
        ],
        video: "/building-video.mp4",

        description:
            "Professional building construction services from foundation to structural execution.",

        details:
            "We provide commercial and industrial construction services with modern architectural and engineering standards.",
    },

    "drainage-infrastructure": {
        title: "Drainage Infrastructure",
        image: "/drainage.webp",
        gallery: [
            "/drainage1.webp",
            "/drainage2.webp",
            "/drainage3.webp",
        ],
        video: "/drainage-video.mp4",

        description:
            "Efficient drainage and wastewater infrastructure systems for urban and industrial development.",

        details:
            "Our drainage infrastructure projects are engineered for efficiency, reliability and environmental sustainability.",
    },
};

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const service = services[slug];

    if (!service) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center text-5xl font-bold">
                Service Not Found
            </div>
        );
    }

    return (
        <main className="bg-[#f5f3ee] text-black min-h-screen">

            {/* HERO SECTION */}
            <section className="relative h-[85vh] overflow-hidden flex items-center justify-center">

                {/* BACKGROUND IMAGE */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/65" />

                {/* CONTENT */}
                <div className="relative z-20 text-center px-6 max-w-6xl">

                    <p className="uppercase tracking-[6px] text-yellow-400 mb-6 font-semibold">
                        Deepak Construction
                    </p>

                    <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95]">

                        {service.title}

                    </h1>

                    <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-10 leading-9">

                        {service.description}

                    </p>

                </div>

            </section>

            {/* ABOUT SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-28">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}
                    <div>

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-12 h-[2px] bg-yellow-500"></div>

                            <p className="uppercase tracking-[5px] text-yellow-600 text-sm font-semibold">
                                Professional Infrastructure
                            </p>

                        </div>

                        <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">

                            Engineering Excellence
                            <span className="text-yellow-600"> In Every Project</span>

                        </h2>

                        <p className="text-gray-700 text-lg leading-10">

                            {service.details}

                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-2 gap-6 mt-14">

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">

                                <h3 className="text-5xl font-black text-yellow-600">
                                    50+
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    Projects Completed
                                </p>

                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">

                                <h3 className="text-5xl font-black text-yellow-600">
                                    10+
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    Years Experience
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div>

                        <img
                            src={service.image}
                            alt={service.title}
                            className="rounded-[35px] shadow-2xl w-full h-[700px] object-cover"
                        />

                    </div>

                </div>

            </section>

            {/* PROJECT GALLERY */}
            <section className="bg-white py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-20">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-12 h-[2px] bg-yellow-500"></div>

                            <p className="uppercase tracking-[5px] text-yellow-600 text-sm font-semibold">
                                Completed Projects
                            </p>

                        </div>

                        <h2 className="text-5xl md:text-6xl font-black">

                            Our Project Gallery

                        </h2>

                    </div>

                    {/* GRID */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {service.gallery.map((img: string, index: number) => (

                            <div
                                key={index}
                                className="overflow-hidden rounded-[30px] group"
                            >

                                <img
                                    src={img}
                                    className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* VIDEO SECTION */}
            <section className="bg-[#111111] text-white py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}
                        <div>

                            <div className="flex items-center gap-3 mb-6">

                                <div className="w-12 h-[2px] bg-yellow-400"></div>

                                <p className="uppercase tracking-[5px] text-yellow-400 text-sm font-semibold">
                                    Live Execution
                                </p>

                            </div>

                            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">

                                Real Infrastructure
                                <span className="text-yellow-400"> Development</span>

                            </h2>

                            <p className="text-gray-400 text-lg leading-10">

                                Our experienced engineering teams execute every project
                                using modern machinery, technical precision and
                                industry-standard safety practices.

                            </p>

                        </div>

                        {/* VIDEO */}
                        <div>

                            <video
                                src={service.video}
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="rounded-[35px] w-full shadow-2xl border border-white/10"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <section className="relative overflow-hidden bg-black text-white py-32">

                {/* ANIMATED GLOW */}
                <div className="absolute top-0 left-[-20%] w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full animate-pulse"></div>

                <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

                {/* GRID TEXTURE */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* CONTENT */}
                <div className="relative z-20 max-w-5xl mx-auto text-center px-6">

                    <p className="uppercase tracking-[6px] text-yellow-400 mb-6 font-semibold">
                        Start Your Project
                    </p>

                    <h2 className="text-6xl md:text-8xl font-black leading-[0.95]">

                        Building Reliable

                        <span className="block text-yellow-400 mt-3">
                            Infrastructure
                        </span>

                    </h2>

                    <p className="text-gray-400 text-xl leading-10 mt-12 max-w-3xl mx-auto">

                        Contact Deepak Construction for professional infrastructure,
                        excavation, pipeline and industrial construction services
                        engineered for long-term reliability.

                    </p>

                    {/* BUTTONS */}
                    <div className="flex justify-center gap-6 mt-16 flex-wrap">

                        <button className="relative overflow-hidden bg-yellow-400 text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(250,204,21,0.35)]">

                            Contact Us

                        </button>

                        <button className="border border-white/10 bg-white/[0.03] backdrop-blur-md px-10 py-5 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-400 transition duration-300">

                            Back To Home

                        </button>

                    </div>

                </div>
            </section>
        </main>
    );
}