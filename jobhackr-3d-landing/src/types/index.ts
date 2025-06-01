export interface LandingContentProps {
    headline: string;
    subheadline: string;
    buttonLink: string;
}

export interface NavbarProps {
    links: Array<{ name: string; path: string }>;
}

export interface CyberpunkSceneProps {
    // Define any props needed for the CyberpunkScene component
}

export interface JobApplicationResponse {
    id: string;
    response: string;
    createdAt: Date;
}