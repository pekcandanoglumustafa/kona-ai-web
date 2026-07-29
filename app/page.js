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

  // lock scroll while the loading screen is up
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
    const { camera, scene } = sceneRefs.current;
    if (!camera || !scene) return;

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
      tl.to(heroObject.rotation, { y: Math.PI * 2.2, x: 0.6, ease: "none" }, 0);
    }
    tl.to(camera.position, { x: 2.2, z: 4.5, y: 0.8, ease: "none" }, 0);
    tl.to(camera.position, { x: -2.4, z: 5.5, y: -0.6, ease: "none" }, 0.5);
    if (heroRing) {
      tl.to(heroRing.rotation, { z: Math.PI * 3, ease: "none" }, 0);
    }

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: () => camera.lookAt(0, 0, 0),
    });
  }

  return (
    <>
      <Scene3D idleRotation={idleRotation} onReady={handleSceneReady} />
      {loading && <LoadingOverlay onDone={handleLoadingDone} />}
      <ScrollSections />
    </>
  );
}
