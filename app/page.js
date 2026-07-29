"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene3D from "@/components/Scene3D";
import LoadingOverlay from "@/components/LoadingOverlay";
import ScrollSections from "@/components/ScrollSections";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [idleRotation, setIdleRotation] = useState(true);
  const sceneRefs = useRef({ camera: null, scene: null });

  useEffect(() => {
    document.body.classList.toggle("locked", loading);
  }, [loading]);

  function handleSceneReady({ camera, scene }) {
    sceneRefs.current = { camera, scene };
  }

  function handleLoadingDone() {
    setLoading(false);
    setIdleRotation(false);
    initScrollAnimation();
  }

  function initScrollAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    const { scene } = sceneRefs.current;
    if (!scene) return;

    const heroObject = scene.getObjectByName("hero-object");
    const heroRing = scene.getObjectByName("hero-ring");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    if (heroObject) {
      tl.to(heroObject.rotation, { y: Math.PI * 1.6, x: 0.35, ease: "none" }, 0);
    }
    if (heroRing) {
      tl.to(heroRing.rotation, { z: Math.PI * 2, ease: "none" }, 0);
    }
  }

  return (
    <>
      <div className="visual-col">
        <Scene3D idleRotation={idleRotation} onReady={handleSceneReady} />
      </div>
      {loading && <LoadingOverlay onDone={handleLoadingDone} />}
      <ScrollSections />
    </>
  );
}
