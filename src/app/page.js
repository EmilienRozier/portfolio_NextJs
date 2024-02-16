"use client"

import Navbar from "@/components/navbar/navbar";
import DrawSection from "@/components/drawsection/drawSection";
import { useState } from "react";
import Menu from "@/components/menu/menu";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";

const Home = () => {
  const [menuState, setMenuState] = useState('close');
  const [circles, setCircles] = useState([]);

  return (
    <>
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      <div className="header">
        <div className="zone">
          <div className="to-stay">
            <p></p>
            <div className="hugeheadline">
              <div className="line">
                <p className="word">PORTFOLIO</p>
              </div>
            </div>
          </div>
          <div className="to-erase">
            <p>Emilien Rozier, développeur web,</p>
            <p>étudiant en 2ème année de BUT MMI à Troyes, originaire de Nevers et passionné par le monde du
              numérique
              et de l'informatique.</p>
            <div className="hugeheadline">
              <div className="line">
                <p className="word">PORTFOLIO</p>
              </div>
            </div>
          </div>
        </div>
        <DrawSection menuState={menuState} setCircles={setCircles} circles={circles} />
      </div>

      <section>
        <Menu/>
        <About />
        <Contact/>
      </section>
    </>
  );
}

export default Home;
