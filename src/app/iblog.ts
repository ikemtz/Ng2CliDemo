export interface IBlog {
    id: number;
    subject: string;
    description: string;
    bodyHTML: string;
    thumbnailUrl: string;
    isHighlighted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
