import { DBSchema } from "idb";
import { Categoria } from "../class/categoria/categoria.class";
import { Copia } from "../class/copia/copia.class";

export interface MultiToolDB extends DBSchema {
    'categoria': {
        key: number;
        value: Categoria;
    },
    'copia': {
        key: number;
        value: Copia;
    }
}