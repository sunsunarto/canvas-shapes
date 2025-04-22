import { useEffect, useRef } from "react";

function CanvasShapes() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw blue rectangle
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.rect(50, 50, 50, 50);
        ctx.fill();
        ctx.stroke();

        // Draw red circle
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.arc(150, 75, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Draw green triangle
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.moveTo(200, 100); // Point A
        ctx.lineTo(300, 200); // Point B
        ctx.lineTo(200, 200); // Point C
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }, []);

    return <canvas ref={canvasRef} width={400} height={300} style={{ border: "1px solid black" }} />;
}

export default CanvasShapes;
