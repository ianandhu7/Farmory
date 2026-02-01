import React, { useEffect, useRef, useState } from 'react';

const ImageSequence = ({ className }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Configuration
    const frameCount = 40;
    const basePath = '/product-sequence/ezgif-frame-';
    const extension = '.jpg';

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Pad single digits with 0 (e.g., 001, 002... 010)
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `${basePath}${frameNumber}${extension}`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Animation Loop
    useEffect(() => {
        if (!loaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let animationFrameId;
        let frameIndex = 0;
        let lastTime = 0;
        const fps = 12; // Desired FPS
        const interval = 1000 / fps;

        // Set canvas dimensions to match image aspect ratio
        const adjustCanvasSize = () => {
            if (images[0]) {
                const aspect = images[0].width / images[0].height;
                // You might want to make this responsive based on window width
                // For now, let's keep it responsive via CSS object-fit, but set internal resolution
                canvas.width = images[0].width;
                canvas.height = images[0].height;
            }
        }

        adjustCanvasSize();

        const render = (currentTime) => {
            animationFrameId = requestAnimationFrame(render);

            const deltaTime = currentTime - lastTime;

            if (deltaTime > interval) {
                lastTime = currentTime - (deltaTime % interval);

                // Draw current frame
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);

                // Advance frame
                frameIndex = (frameIndex + 1) % frameCount;
            }
        };

        render(0);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [loaded, images]);

    if (!loaded) return <div className="loading-placeholder">Loading Visuals...</div>;

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
            }}
        />
    );
};

export default ImageSequence;
