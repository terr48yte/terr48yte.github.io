import { motion } from "framer-motion"
import { useState } from "react";

export default function Bgan() {
const ls = Array(1000).fill([1,2,3,4,5,6])    
const [listdiv] = useState(ls)
    return(
        <div className="min-h-screen overflow-hidden w-full flex items-center justify-center m-auto bg-gray-900">
            <div className="grid grid-cols-12 grid-flow-col m-auto items-center gap-8">
                {listdiv.map((ld) => (
                    <motion.div
                    key={ld}
                    className="w-[20px] h-[20px] bg-white"
                    animate={{
                        scale: [1,2,1,1.5,1],
                        rotate: [0,50,20,120,0],
                        borderRadius: ["0%","25%","50%","30%","0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }} />
                ))}
            </div>
        </div>
    );
}