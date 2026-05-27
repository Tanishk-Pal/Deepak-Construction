"use client";

export default function FloatingCard({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="
      transition-all
      duration-500
      hover:-translate-y-2
    ">
      {children}
    </div>
  );
}