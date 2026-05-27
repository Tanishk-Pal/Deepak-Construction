"use client";

import { useEffect, useState } from "react";

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import {
    FolderKanban,
    Upload,
    Building2,
    Trash2,
    Pencil,
    ImageIcon,
    Video,
    Star,
    Clock3,
} from "lucide-react";

export default function AdminPage() {

    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState<any[]>([]);

    const [editingId, setEditingId] = useState<string | null>(null);

    const [project, setProject] = useState({
        title: "",
        description: "",
        location: "",
        duration: "",
        client: "",
        category: "projects",
        status: "ongoing",
        featured: false,
        imageUrl: "",
        videoUrl: "",
    });
    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {

        const snapshot = await getDocs(collection(db, "projects"));

        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setProjects(data);
    };

    const uploadToCloudinary = async (
        file: File,
        type: "image" | "video"
    ) => {
        const formData = new FormData();

        formData.append("file", file);

        formData.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
        );

        const cloudName =
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

        const url =
            type === "image"
                ? `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
                : `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;

        const res = await axios.post(url, formData);

        return res.data.secure_url;
    };
    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (!e.target.files?.[0]) return;

        toast.loading("Uploading image...");

        try {

            const url = await uploadToCloudinary(
                e.target.files[0],
                "image"
            );

            setProject((prev) => ({
                ...prev,
                imageUrl: url,
            }));
            toast.dismiss();
            toast.success("Image uploaded successfully");

        } catch {

            toast.dismiss();
            toast.error("Image upload failed");

        }
    };

    const handleVideoUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (!e.target.files?.[0]) return;

        toast.loading("Uploading video...");
        try {

            const url = await uploadToCloudinary(
                e.target.files[0],
                "video"
            );

            setProject((prev) => ({
                ...prev,
                videoUrl: url,
            }));

            toast.dismiss();
            toast.success("Video uploaded successfully");

        } catch {

            toast.dismiss()
            toast.error("Video upload failed");

        }
    };

    const addProject = async () => {

        if (
            !project.title ||
            !project.description ||
            !project.imageUrl
        ) {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            setLoading(true);

            if (editingId) {
                await updateDoc(doc(db, "projects", editingId), {
                    ...project,
                });

                toast.success("Project updated successfully");

            } else {

                await addDoc(collection(db, "projects"), {
                    ...project,
                    createdAt: new Date(),
                });

                toast.success("Project added successfully");
            }

            setProject({
                title: "",
                description: "",
                location: "",
                duration: "",
                client: "",
                category: "projects",
                status: "ongoing",
                featured: false,
                imageUrl: "",
                videoUrl: "",
            });

            setEditingId(null);

            fetchProjects();

        } catch {
            toast.error("Something went wrong");

        } finally {

            setLoading(false);
        }
    };

    const deleteProject = async (id: string) => {

        const confirmDelete = confirm(
            "Delete this project permanently?"
        );

        if (!confirmDelete) return;

        await deleteDoc(doc(db, "projects", id));
        toast.success("Project deleted");

        fetchProjects();
    };

    const editProject = (projectData: any) => {

        setEditingId(projectData.id);

        setProject({
            title: projectData.title || "",
            description: projectData.description || "",
            location: projectData.location || "",
            duration: projectData.duration || "",
            client: projectData.client || "",
            category: projectData.category || "projects",
            status: projectData.status || "ongoing",
            featured: projectData.featured || false,
            imageUrl: projectData.imageUrl || "",
            videoUrl: projectData.videoUrl || "",
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">

            <Toaster position="top-right" />

            {/* GLOW */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d89b1d]/10 blur-[140px] rounded-full" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

                {/* HEADER */}
                <div className="mb-20">

                    <div className="flex items-center gap-3 mb-6">

                        <div className="w-14 h-[2px] bg-[#d89b1d]" />

                        <p className="uppercase tracking-[5px] text-[#d89b1d] text-sm font-semibold">
                            Deepak Construction CMS
                        </p>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black leading-[0.95]">

                        Admin

                        <span className="block text-[#d89b1d]">
                            Dashboard
                        </span>

                    </h1>

                    <p className="text-gray-400 text-xl leading-10 mt-10 max-w-4xl">

                        Manage projects, services, hero sections,
                        media uploads aplete website content.
                    </p>
                </div>

                {/* STATS */}
                <div className="grid md:grid-cols-4 gap-6 mb-20">

                    {[
                        {
                            icon: FolderKanban,
                            title: "Projects",
                            value: projects.length,
                        },
                        {
                            icon: Upload,
                            title: "Uploads",
                            value: "Cloud",
                        },
                        {
                            icon: Building2,
                            title: "Website",
                            value: "Dynamic",
                        },
                        {
                            icon: Clock3,
                            title: "Realtime",
                            value: "Live",
                        },
                    ].map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[30px] p-8"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#d89b1d]/10 flex items-center justify-center mb-8">

                                    <Icon className="text-[#d89b1d]" size={30} />

                                </div>

                                <h3 className="text-4xl font-black text-[#d89b1d]">
                                    {item.value}
                                </h3>

                                <p className="text-gray-400 mt-3">
                                    {item.title}
                                </p>

                            </div>
                        );
                    })}
                </div>

                {/* FORM */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[40px] p-10">

                        <h2 className="text-4xl font-black mb-10">
                            {editingId
                                ? "Edit Project"
                                : "Add New Project"}
                        </h2>

                        <div className="space-y-6">

                            <input
                                placeholder="Project Title *"
                                value={project.title}
                                onChange={(e) =>
                                    setProject({
                                        ...project,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d89b1d]"
                            />

                            <textarea
                                placeholder="Project Description"
                                value={project.description}
                                onChange={(e) =>
                                    setProject({
                                        ...project,
                                        description: e.target.value,
                                    })
                                }
                                rows={5}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d89b1d]"
                            />

                            <div className="grid md:grid-cols-2 gap-5">

                                <input
                                    placeholder="Location"
                                    value={project.location}
                                    onChange={(e) =>
                                        setProject({
                                            ...project,
                                            location: e.target.value,
                                        })
                                    }
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d89b1d]"
                                />
                                <input
                                    placeholder="Duration"
                                    value={project.duration}
                                    onChange={(e) =>
                                        setProject({
                                            ...project,
                                            duration: e.target.value,
                                        })
                                    }
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d89b1d]"
                                />

                            </div>

                            <input
                                placeholder="Client Name"
                                value={project.client}
                                onChange={(e) =>
                                    setProject({
                                        ...project,
                                        client: e.target.value,
                                    })
                                }
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d89b1d]"
                            />

                            {/* CATEGORY */}
                            <select
                                value={project.category}
                                onChange={(e) =>
                                    setProject({
                                        ...project,
                                        category: e.target.value,
                                    })
                                }
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d89b1d]"
                            >

                                <option value="projects">
                                    Project Page
                                </option>

                                <option value="services">
                                    Service Page
                                </option>

                                <option value="hero">
                                    Hero Sectiion
                                </option>

                                <option value="contact">
                                    Contact Section
                                </option>

                            </select>

                            {/* STATUS */}
                            <select
                                value={project.status}
                                onChange={(e) =>
                                    setProject({
                                        ...project,
                                        status: e.target.value,
                                    })
                                }
                                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#d89b1d]"
                            >

                                <option value="ongoing">
                                    Ongoing Project
                                </option>

                                <option value="completed">
                                    Completed Project
                                </option>

                            </select>

                            {/* FEATURED */}
                            <label className="flex items-center gap-4 bg-black/30 border border-white/10 rounded-2xl p-5 cursor-pointer">

                                <input
                                    type="checkbox"
                                    checked={project.featured}
                                    onChange={(e) =>
                                        setProject({
                                            ...project,
                                            featured: e.target.checked,
                                        })
                                    }
                                />

                                <span className="flex items-center gap-3">
                                    <Star size={18} className="text-[#d89b1d]" />
                                    Featured Project
                                </span>

                            </label>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="space-y-10">
                        {/* IMAGE */}
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[40px] p-10">

                            <div className="flex items-center gap-4 mb-8">

                                <div className="w-16 h-16 rounded-2xl bg-[#d89b1d]/10 flex items-center justify-center">

                                    <ImageIcon className="text-[#d89b1d]" size={30} />

                                </div>

                                <div>
                                    <h2 className="text-3xl font-black">
                                        Upload Image
                                    </h2>

                                    <p className="text-gray-400 mt-2 text-sm">
                                        Hero image / service image / project image
                                    </p>
                                </div>

                            </div>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full border border-dashed border-white/20 rounded-2xl p-10 cursor-pointer"
                            />
                            {project.imageUrl && (

                                <img
                                    src={project.imageUrl}
                                    className="mt-8 rounded-3xl w-full h-72 object-cover"
                                />
                            )}

                        </div>

                        {/* VIDEO */}
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[40px] p-10">

                            <div className="flex items-center gap-4 mb-8">

                                <div className="w-16 h-16 rounded-2xl bg-[#d89b1d]/10 flex items-center justify-center">

                                    <Video className="text-[#d89b1d]" size={30} />

                                </div>
                                <div>
                                    <h2 className="text-3xl font-black">
                                        Upload Video
                                    </h2>

                                    <p className="text-gray-400 mt-2 text-sm">
                                        Project execution / machinery / drone video
                                    </p>
                                </div>

                            </div>

                            <input
                                type="file"
                                accept="video/*"
                                onChange={handleVideoUpload}
                                className="w-full border border-dashed border-white/20 rounded-2xl p-10 cursor-pointer"
                            />
                            {project.videoUrl && (

                                <video
                                    src={project.videoUrl}
                                    controls
                                    className="mt-8 rounded-3xl w-full"
                                />
                            )}

                        </div>

                    </div>

                </div>

                {/* BUTTON */}
                <div className="mt-16 text-center">
                    <button
                        onClick={addProject}
                        disabled={loading}
                        className="bg-[#d89b1d] text-black px-14 py-6 rounded-full font-black text-lg hover:scale-105 transition duration-300 shadow-[0_0_60px_rgba(216,155,29,0.3)]"
                    >
                        {loading
                            ? "Processing..."
                            : editingId
                                ? "Update Project"
                                : "Publish Project"}
                    </button>

                </div>

                {/* PROJECTS LIST */}
                <div className="mt-28">

                    <div className="flex items-center gap-3 mb-14">
                        <div className="w-14 h-[2px] bg-[#d89b1d]" />

                        <p className="uppercase tracking-[5px] text-[#d89b1d] text-sm font-semibold">
                            Existing Projects
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {projects.map((project) => (

                            <div
                                key={project.id}
                                className="bg-white/[0.03] border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-md"
                            >  <img
                                    src={project.imageUrl}
                                    className="w-full h-60 object-cover"
                                />

                                <div className="p-8">

                                    <div className="flex justify-between items-start gap-4">

                                        <h2 className="text-2xl font-black leading-tight">
                                            {project.title}
                                        </h2>

                                        {project.featured && (
                                            <Star
                                                className="text-[#d89b1d]"
                                                fill="#d89b1d"
                                            />
                                        )}
                                    </div>
                                    <p className="text-gray-400 mt-5 line-clamp-3 leading-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-8">

                                        <span className="bg-[#d89b1d]/10 text-[#d89b1d] px-4 py-2 rounded-full text-sm">
                                            {project.status}
                                        </span>

                                        <span className="bg-white/5 text-gray-300 px-4 py-2 rounded-full text-sm">
                                            {project.category}
                                        </span>

                                    </div>

                                    <div className="flex gap-4 mt-10">

                                        <button
                                            onClick={() => editProject(project)}
                                            className="flex-1 bg-[#d89b1d] text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition duration-300"
                                        >

                                            <Pencil size={18} />
                                            Edit

                                        </button>

                                        <button
                                            onClick={() => deleteProject(project.id)}
                                            className="flex-1 border border-red-500/30 text-red-400 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-red-500/10 transition duration-300"
                                        >

                                            <Trash2 size={18} />
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </main>
    );
}