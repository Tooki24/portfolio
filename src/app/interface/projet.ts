export interface Projet {
    attributes: {
        createdAt: Date;
        description: string;
        publishedAt: Date;
        titre: string;
        image: string;
        lien: string;
        updatedAt: Date
    }
    id: number;
}
