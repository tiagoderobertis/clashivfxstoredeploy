"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export function GeometricMeshBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const meshRef = useRef<THREE.LineSegments | null>(null)
  const pointsRef = useRef<THREE.Points | null>(null)
  const frameIdRef = useRef<number | null>(null)

  // Function to determine mesh detail based on screen size
  const getMeshDetail = () => {
    // Smaller mesh for mobile devices to prevent cutoff
    if (window.innerWidth < 768) {
      return { radius: 6, detail: 1 } // Reduced radius for mobile
    }
    // Keep desktop exactly as it was
    else {
      return { radius: 10, detail: 2 } // Original desktop values
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Setup scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Setup camera with responsive aspect ratio
    const camera = new THREE.PerspectiveCamera(
      // Wider field of view on mobile to see more of the mesh
      window.innerWidth < 768 ? 85 : 75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    cameraRef.current = camera

    // Setup renderer with responsive size
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create mesh with detail based on screen size
    const createMesh = () => {
      // Remove old mesh if it exists
      if (meshRef.current) {
        scene.remove(meshRef.current)
      }
      if (pointsRef.current) {
        scene.remove(pointsRef.current)
      }

      // Get appropriate detail level
      const { radius, detail } = getMeshDetail()

      // Create new geometry with appropriate detail
      const geometry = new THREE.IcosahedronGeometry(radius, detail)
      const wireframe = new THREE.WireframeGeometry(geometry)

      // Create material - keep desktop exactly as it was
      const material = new THREE.LineBasicMaterial({
        color: 0x5865f2,
        transparent: true,
        opacity: 0.5,
        linewidth: 1,
      })

      const mesh = new THREE.LineSegments(wireframe, material)
      scene.add(mesh)
      meshRef.current = mesh

      // Add points - keep desktop exactly as it was
      const pointsGeometry = new THREE.BufferGeometry()
      const positions = wireframe.attributes.position.array
      pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x7289da,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
      })

      const points = new THREE.Points(pointsGeometry, pointsMaterial)
      scene.add(points)
      pointsRef.current = points
    }

    createMesh()

    // Position camera - move it back on mobile to see the whole mesh
    camera.position.z = window.innerWidth < 768 ? 14 : 20

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return

      // Update camera aspect ratio
      cameraRef.current.aspect = window.innerWidth / window.innerHeight

      // Update field of view based on device
      cameraRef.current.fov = window.innerWidth < 768 ? 85 : 75

      cameraRef.current.updateProjectionMatrix()

      // Update renderer size
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)

      // Recreate mesh with appropriate size
      createMesh()

      // Adjust camera position based on screen size
      cameraRef.current.position.z = window.innerWidth < 768 ? 14 : 20
    }

    window.addEventListener("resize", handleResize)

    // Handle mouse/touch movement
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      let x, y

      // Handle both mouse and touch events
      if ("touches" in event) {
        // Touch event
        x = (event.touches[0].clientX / window.innerWidth) * 2 - 1
        y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1
      } else {
        // Mouse event
        x = (event.clientX / window.innerWidth) * 2 - 1
        y = -(event.clientY / window.innerHeight) * 2 + 1
      }

      setMousePosition({ x, y })
    }

    // Add both mouse and touch event listeners
    window.addEventListener("mousemove", handleMouseMove as EventListener)
    window.addEventListener("touchmove", handleMouseMove as EventListener)

    // Animation function - keep desktop exactly as it was
    const animate = () => {
      if (!meshRef.current || !pointsRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current)
        return

      frameIdRef.current = requestAnimationFrame(animate)

      // Base rotation - same as original
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
      pointsRef.current.rotation.x += 0.002
      pointsRef.current.rotation.y += 0.003

      // Mouse influence - same as original
      meshRef.current.rotation.x += mousePosition.y * 0.0005
      meshRef.current.rotation.y += mousePosition.x * 0.0005
      pointsRef.current.rotation.x += mousePosition.y * 0.0005
      pointsRef.current.rotation.y += mousePosition.x * 0.0005

      rendererRef.current.render(sceneRef.current, cameraRef.current)
    }

    animate()

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current)
      }

      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove as EventListener)
      window.removeEventListener("touchmove", handleMouseMove as EventListener)

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }

      // Dispose of geometries and materials to prevent memory leaks
      if (meshRef.current) {
        const geometry = meshRef.current.geometry
        const material = meshRef.current.material as THREE.Material
        geometry.dispose()
        material.dispose()
      }

      if (pointsRef.current) {
        const geometry = pointsRef.current.geometry
        const material = pointsRef.current.material as THREE.Material
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />
}

