'use client'

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) 


{
  let mouseX = useMotionValue(0);
let mouseY = useMotionValue(0);

function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
  let { left, top } = currentTarget.getBoundingClientRect();

  mouseX.set(clientX - left);
  mouseY.set(clientY - top);
}

return (
  <main className="">
    <div
      className="group relative w-full bg-[#D3D3D3] bg-gray-shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(14, 165, 233, 0.15),
            transparent 80%
          )
          `,
        }}
      />
    </div>
    {children}
  </main>
);
}
