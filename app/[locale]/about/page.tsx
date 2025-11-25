import React from "react";
import { AboutHero } from "../../components/about/AboutHero";
import { AboutStory } from "../../components/about/AboutStory";
import { AboutValues } from "../../components/about/AboutValues";
import { AboutCTA } from "../../components/about/AboutCTA";
import { AboutSkills } from "../../components/about/AboutSkills";


export const metadata = {
  title: "Hakkında",
  description:
    "Yazılım geliştirici olarak yolculuğum, becerilerim ve değerlerim hakkında daha fazla bilgi edinin.",
};
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
