import '../styles/Home.module.css'
import Landing from "../components/Landing";
import Sponsors from "../components/Sponsors";
import React from "react";
import {StatsGroup} from "./outreach";

export default function Home() {
  return (
    <div>
      <Landing/>
      <div className="py-12" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center pb-6">
            <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Who we are</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Team by the Numbers
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
          <StatsGroup
            data=
              {
                [
                  {
                    stats:"10",
                    title:"Years of bringing STEM to NM",
                    description:""
                  },
                  {
                    stats:"11",
                    title:"Generations of Students",
                    description:""
                  },
                  {
                    stats:"500+",
                    title:"Lives Changed",
                    description:""
                  }
                ]
              }
          />
        </div>
      </div>
      <div className="w-full">
        <Sponsors/>
      </div>
    </div>
  )
}

