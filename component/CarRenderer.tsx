'use client';

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
const cars: string[] = ['CorvetteC6.glb', 'CorvetteC6Mod.glb', 'MclarenF1.glb', 'MclarenF1Mod.glb'];
const getRandomElement = () => cars[Math.floor(Math.random() * cars.length)];

export default function CarRenderer() {
    const currentCar = getRandomElement();
    function Model({ url }: { url: string }) {
        const { scene } = useGLTF(url)
        return <primitive object={scene} />
    }

    const sceneCamera = new THREE.PerspectiveCamera(70, 1, 0.001, 2000);
    const vect3 = new THREE.Vector3();
    sceneCamera.position.set(-70, 40, 70);
    sceneCamera.lookAt(vect3);

    return (
        <Canvas style={{ height: '250px', width: '300px' }} camera={sceneCamera} >
            <OrbitControls autoRotate={true} enablePan={false} minDistance={60} maxDistance={200} />

            <ambientLight intensity={0.2} />
            <directionalLight color={'white'} intensity={5} position={new THREE.Vector3(100, 100, 100)} />
            <directionalLight color={'white'} intensity={5} position={new THREE.Vector3(-100, 100, -100)} />
            <Model url={'./' + currentCar} />
        </Canvas>
    )
}