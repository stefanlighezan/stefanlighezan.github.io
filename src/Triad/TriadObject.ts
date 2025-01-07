import { Animations } from "../Rendering/Animations";
import { Error } from "../DataTypes/Error";
import { Lifecycle } from "./Lifecycle";
import { Renderable } from "../Rendering/Renderable";
import { Style } from "../Rendering/Style";

export abstract class TriadObject {
    lifespan: Lifecycle;
    renderable: Renderable;
    animation: Animations;
    style: Array<Style>;
    renderTo: Element; // Content screen
    instance: HTMLElement | null;

    constructor(
        _lifespan: Lifecycle,
        _renderable: Renderable,
        _animation: Animations,
        _renderTo: Element,
        _style: Array<Style>
    ) {
        this.lifespan = _lifespan;
        this.renderable = _renderable;
        this.animation = _animation;
        this.renderTo = _renderTo;
        this.instance = null;
        this.style = _style;
    }

    isVisible(currentFrame: number): boolean {
        return (
            currentFrame >= this.lifespan.start &&
            currentFrame - 1 <= this.lifespan.end
        );
    }

    abstract instantiate(): Error;

    abstract render(currentFrame: number): Error;
}

export enum Objects {
    rectangle,
    ellipse,
}
