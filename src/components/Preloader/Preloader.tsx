import { useEffect } from "react";
import styles from "./Preloader.module.scss";
import sprite from "../../assets/spritesheet.png";

interface PreloaderProps {}

interface PreloaderObject {
    ctx: CanvasRenderingContext2D | null;
    canvas: HTMLCanvasElement | null;
    sprite: HTMLImageElement | null;
    frame: number;

    init(): void;
    animate(): void;
    render(): void;
    run(): void;
    start(): void;
}

const Preloader: React.FC<PreloaderProps> = () => {
    useEffect(() => {
        const preloader: PreloaderObject = {
            ctx: null,
            canvas: null,
            sprite: null,
            frame: 0,

            init() {
                this.canvas = document.querySelector("canvas");
                this.ctx = this.canvas?.getContext("2d") || null;
                if (this.canvas) {
                    this.canvas.width = 80;
                    this.canvas.height = 80;
                }
            },

            animate() {
                setInterval(() => {
                    this.frame++;
                    if (this.frame > 12) {
                        this.frame = 0;
                    }
                }, 100);
            },

            render() {
                this.ctx?.clearRect(0, 0, this.canvas?.width || 0, this.canvas?.height || 0);
                this.sprite = new Image();
                if (this.sprite && this.ctx) {
                    this.sprite.src = sprite;
                    this.ctx.drawImage(this.sprite, this.frame * 64, 0, 63, 63, 0, 0, 63, 63);
                }
            },

            run() {
                window.requestAnimationFrame(() => {
                    this.render();
                    this.run();
                });
            },

            start() {
                this.init();
                this.animate();
                this.run();
            },
        };

        preloader.start();

        return () => {};
    }, []);

    return (
        <div className={styles.preloader}>
            <canvas className={styles.preloader__canvas}></canvas>
        </div>
    );
};

export default Preloader;
