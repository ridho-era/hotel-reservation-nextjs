import type { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import {IoEyeOutline, IoLocateOutline} from "react-icons/io5";
import Image from "next/image";

export const metadata: Metadata= {
    title: "About",
    description: "Who We are"
}

const AboutPage = () => {
    return (
        <div>
            <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit amet."/>
            <div className="mx-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src="/image.avif" width={650} height={579} alt="about image"/>
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who We Are</h1>
                        <p className="text-gray-700 py-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repudiandae iusto aut sapiente! 
                            Beatae dolorum quia nisi eaque voluptates, reprehenderit cumque.</p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoEyeOutline className="size-7"/>
                                </div>
                                <div className="felx-1">
                                    <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Adipisci ipsa hic ut in vitae placeat!
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoLocateOutline className="size-7"/>
                                </div>
                                <div className="felx-1">
                                    <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Quasi labore illo minima ad iure quidem, possimus repudiandae? Quod, debitis modi!
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;