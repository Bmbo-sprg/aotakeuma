import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { BoxParams } from "./cardboardBox";

const createTextTexture = (text: string, bgColor: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.font = "Bold 40px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 128, 128);
  return new THREE.CanvasTexture(canvas);
};

const THICKNESS = 0.05;

export default function CardboardScene({ params }: { params: BoxParams }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const paramsRef = useRef(params);

  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(6, 6, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const boxGroup = new THREE.Group();
    scene.add(boxGroup);

    const bottomMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhongMaterial({
        color: paramsRef.current.color,
        side: THREE.DoubleSide,
      })
    );
    boxGroup.add(bottomMesh);

    const sides: THREE.Mesh[] = [];
    const createSide = (name: string) => {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      );
      mesh.userData.labelName = name;
      boxGroup.add(mesh);
      sides.push(mesh);
      return mesh;
    };

    const sideFront = createSide("FRONT");
    const sideBack = createSide("BACK");
    const sideLeft = createSide("LEFT");
    const sideRight = createSide("RIGHT");

    const pivotHelpers: THREE.Mesh[] = [];
    const createFlap = () => {
      const pivot = new THREE.Group();
      const flapMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({
          color: paramsRef.current.color,
          side: THREE.DoubleSide,
        })
      );
      const helper = new THREE.Mesh(
        new THREE.SphereGeometry(0.04),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
      );
      pivot.add(helper);
      pivotHelpers.push(helper);
      pivot.add(flapMesh);
      boxGroup.add(pivot);
      return pivot;
    };

    const flapFront = createFlap();
    const flapBack = createFlap();
    const flapLeft = createFlap();
    const flapRight = createFlap();

    const updateLabelsVisibility = () => {
      const { showLabels, color } = paramsRef.current;
      sides.forEach((mesh) => {
        const material = mesh.material as THREE.MeshPhongMaterial;
        if (showLabels) {
          material.map?.dispose();
          material.map = createTextTexture(mesh.userData.labelName, color);
          material.color.set(0xffffff);
        } else {
          material.map = null;
          material.color.set(color);
        }
        material.needsUpdate = true;
      });
    };

    const updateBoxGeometry = () => {
      const { width, height, depth, angle } = paramsRef.current;

      bottomMesh.geometry.dispose();
      bottomMesh.geometry = new THREE.BoxGeometry(width, THICKNESS, depth);
      bottomMesh.position.y = -height / 2;

      const updateSide = (
        mesh: THREE.Mesh,
        w: number,
        h: number,
        d: number,
        px: number,
        py: number,
        pz: number,
        ry: number
      ) => {
        mesh.geometry.dispose();
        mesh.geometry = new THREE.BoxGeometry(w, h, d);
        mesh.position.set(px, py, pz);
        mesh.rotation.y = ry;
      };

      updateSide(sideFront, width, height, THICKNESS, 0, 0, depth / 2, 0);
      updateSide(sideBack, width, height, THICKNESS, 0, 0, -depth / 2, Math.PI);
      updateSide(
        sideLeft,
        depth,
        height,
        THICKNESS,
        -width / 2,
        0,
        0,
        -Math.PI / 2
      );
      updateSide(
        sideRight,
        depth,
        height,
        THICKNESS,
        width / 2,
        0,
        0,
        Math.PI / 2
      );

      const topY = height / 2;

      const applyFlapParams = (
        pivot: THREE.Group,
        w: number,
        d: number,
        px: number,
        py: number,
        pz: number
      ) => {
        const flapMesh = pivot.children[1] as THREE.Mesh;
        flapMesh.geometry.dispose();
        flapMesh.geometry = new THREE.BoxGeometry(w, THICKNESS, d);
        pivot.position.set(px, py, pz);

        if (pivot === flapLeft) {
          flapMesh.position.set(-w / 2, 0, 0);
          pivot.rotation.set(0, 0, angle);
        } else if (pivot === flapRight) {
          flapMesh.position.set(w / 2, 0, 0);
          pivot.rotation.set(0, 0, -angle);
        } else if (pivot === flapFront) {
          flapMesh.position.set(0, 0, d / 2);
          pivot.rotation.set(angle, 0, 0);
        } else if (pivot === flapBack) {
          flapMesh.position.set(0, 0, -d / 2);
          pivot.rotation.set(-angle, 0, 0);
        }
      };

      applyFlapParams(flapFront, width, depth / 2, 0, topY, depth / 2);
      applyFlapParams(flapBack, width, depth / 2, 0, topY, -depth / 2);
      applyFlapParams(flapLeft, width / 2, depth, -width / 2, topY, 0);
      applyFlapParams(flapRight, width / 2, depth, width / 2, topY, 0);

      updateLabelsVisibility();
    };

    const updateBoxMaterials = () => {
      const { color } = paramsRef.current;
      bottomMesh.material.color.set(color);
      [flapFront, flapBack, flapLeft, flapRight].forEach((pivot) => {
        const flapMesh = pivot.children[1] as THREE.Mesh;
        (flapMesh.material as THREE.MeshPhongMaterial).color.set(color);
      });
      updateLabelsVisibility();
    };

    let prevSnapshot = JSON.stringify(paramsRef.current);
    const syncFromParams = () => {
      const snapshot = JSON.stringify(paramsRef.current);
      if (snapshot === prevSnapshot) return;
      prevSnapshot = snapshot;
      updateBoxGeometry();
      updateBoxMaterials();
      pivotHelpers.forEach((h) => (h.visible = paramsRef.current.showPivot));
    };

    updateBoxGeometry();
    pivotHelpers.forEach((h) => (h.visible = paramsRef.current.showPivot));

    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };

    const onMouseDown = () => (isDragging = true);
    const onMouseUp = () => (isDragging = false);
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: e.offsetX - previousMouse.x,
          y: e.offsetY - previousMouse.y,
        };
        boxGroup.rotation.y += deltaMove.x * 0.01;
        boxGroup.rotation.x += deltaMove.y * 0.01;
      }
      previousMouse = { x: e.offsetX, y: e.offsetY };
    };
    const onWheel = (e: WheelEvent) => {
      camera.position.z += e.deltaY * 0.01;
      camera.position.z = Math.max(3, Math.min(25, camera.position.z));
    };

    const canvas = renderer.domElement;
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("wheel", onWheel);

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let animationFrame: number;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      syncFromParams();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("wheel", onWheel);
      container.removeChild(canvas);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const material = obj.material as THREE.Material | THREE.Material[];
          if (Array.isArray(material)) {
            material.forEach((m) => m.dispose());
          } else {
            material.dispose();
          }
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
