import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xe94560, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundCanvas;
