export type Categoria = {
    id: number;
    name: string;
}

export type Actividad = {
    categoria: number;
    actividad: string;
    calorias: number;
}