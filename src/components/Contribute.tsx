"use client"

import { contributes } from "@/libs/contribute.data"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Contribute(){
    const contributeList = contributes 
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    return (
        <div className="flex gap-x-1">
            {contributeList.map((contribute, index) =>
                <Link href={contribute.github} key={index}>
                    <div
                        className="flex hover:bg-slate-800 hover:duration-700 rounded-full items-center gap-x-1"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                    >
                        <Image 
                            width={70} 
                            height={70} 
                            src={contribute.image} 
                            alt={contribute.name} 
                            className="rounded-full"
                        />
                        <p className={`text-lg pr-3 text-white font-medium ${hoveredIndex !== index ? 'hidden' : ''}`}>
                            {contribute.name}
                        </p>
                    </div>
                </Link>
            )}
        </div>
    )
}
