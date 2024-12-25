import React, { useEffect, useRef } from 'react';

const FlowerAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas size to match its parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const flowers = [];

    const randomColor = () => {
      const colors = ['#FF6F61', '#FFB400', '#88B04B', '#6B5B95', '#955251', '#F7CAC9'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createFlower = (x, y) => {
      const petals = Math.floor(Math.random() * 6) + 5;
      const size = Math.random() * 10 + 10;
      const color = randomColor();

      flowers.push({ x, y, petals, size, color, lifetime: 100 });
    };

    const drawFlower = (flower) => {
      const { x, y, petals, size, color } = flower;
      ctx.save();
      ctx.translate(x, y);

      for (let i = 0; i < petals; i++) {
        ctx.rotate((Math.PI * 2) / petals);
        ctx.beginPath();
        ctx.ellipse(0, size / 4, size / 2, size, 0, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = flowers.length - 1; i >= 0; i--) {
        const flower = flowers[i];
        drawFlower(flower);
        flower.y -= 2;
        flower.lifetime--;

        if (flower.lifetime <= 0) {
          flowers.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    // Generate flowers periodically
    const interval = setInterval(() => {
      createFlower(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
    }, 300);

    // Start animation
    animate();

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Ensure the canvas doesn't block interactions
      }}
    />
  );
};

export default FlowerAnimation;
