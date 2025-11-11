import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { AboutStory } from "../components/about/AboutStory";
import { AboutValues } from "../components/about/AboutValues";
import { AboutCTA } from "../components/about/AboutCTA";
import { AboutSkills } from "../components/about/AboutSkills";

const AboutPage = () => {
  return <div>
    <AboutHero />
    <AboutSkills/>
    <AboutStory />
    <AboutValues />
    <AboutCTA />
  </div>;
};

export default AboutPage;
