/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useAnimation,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <div
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [showHint, setShowHint] = useState(true);
  const timer = useRef<NodeJS.Timeout>(null);
  const controls = useAnimation();
  useEffect(() => {
    if (showHint) {
      controls.start({
        opacity: [0, 1, 1, 0],
        x: [-50, -50, 50, 50],
        transition: {
          duration: 2,
          repeatDelay: 2,
          delay: 2,
          times: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop();
    }
    return () => {
      controls.stop();
      if (timer.current) clearInterval(timer.current);
    };
  }, [showHint]);
  return (
    <div className="relative h-fit flex items-center justify-center pointer-events-auto">
      {/* Eventos de puntero (no de ratón) para que también responda al dedo.
          touch-action: pan-y deja el scroll vertical al navegador y nos da el
          deslizamiento horizontal; data-vaul-no-drag evita que ese gesto
          arrastre el cajón del proyecto en el teléfono. */}
      <motion.div
        data-vaul-no-drag
        onPointerMove={(e) => {
          mouseX.set(e.clientX);
          setShowHint(false);
        }}
        onPointerDown={(e) => {
          mouseX.set(e.clientX);
          setShowHint(false);
        }}
        onPointerLeave={() => mouseX.set(Infinity)}
        onPointerUp={(e) => {
          if (e.pointerType !== "mouse") mouseX.set(Infinity);
        }}
        onPointerCancel={() => mouseX.set(Infinity)}
        className={cn(
          "flex gap-2 md:gap-4 touch-pan-y select-none",
          "mx-auto h-16 items-end  rounded-2xl bg-white/30 dark:bg-black/50  px-4 pb-3",
          className
        )}
      >
        {items.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
      {showHint && (
        <div
          className="z-10 absolute t-0 w-full h-full pointer-events-none"
          onMouseEnter={() => setShowHint(false)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.div
              className={cn(
                "w-5 h-5 border-2 left-[50%] top-0 border-foreground rounded-full",
                "translate-x-[-50px]"
              )}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
            ></motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // La etiqueta sale cuando el puntero está sobre este icono, calculado por
  // posición y no con onMouseEnter: con el dedo, el navegador manda todos los
  // eventos al icono donde empezó el toque, así que los demás nunca se enteran.
  const [hovered, setHovered] = useState(false);
  useMotionValueEvent(mouseX, "change", (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    const encima = !!bounds && val >= bounds.left && val <= bounds.right;
    setHovered((prev) => (prev === encima ? prev : encima));
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className="aspect-square rounded-full bg-secondary/30 flex items-center justify-center relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-popover border border-border text-popover-foreground absolute left-1/2 -translate-x-1/2 -bottom-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
