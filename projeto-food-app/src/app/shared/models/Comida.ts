export class Comida{
  id!: number;
  nome!: string;
  preco!: number;
  tags?: string[];
  favorito: boolean = false;
  estrelas: number = 0;
  imageUrl!: string;
  origem!: string;
  tempoDePreparo!: string;
}
