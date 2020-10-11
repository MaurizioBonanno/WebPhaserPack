export interface InterScene {
    
    preload(): void;
    create(): void;
    update(time: any,delta: any): void;
}