export type Categoria = {
    id: number;
    name: string;
}

export type Actividad = {
    id: string;
    categoria: number;
    actividad: string;
    calorias: number;
}