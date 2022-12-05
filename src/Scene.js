import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('/planet.glb')

	return (
		<Canvas concurrent pixelRaio={[1,2]} camera={{position: [0,0,2]}}>
			<ambientLight intensity={0.8}/>
			<directionalLight position={[-2, 5, 2]} intensity={1} />
			<Suspense fallback={null}>
			<group ref={group} {...props} dispose={null}>
				<group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
					<mesh geometry={nodes.Object_2.geometry} material={materials.Material__25} />
					<mesh geometry={nodes.Object_3.geometry} material={materials.Material__65} />
				</group>
			</group>
			</Suspense>
		</Canvas>
	)
}

useGLTF.preload('/model/scene.gltf')
