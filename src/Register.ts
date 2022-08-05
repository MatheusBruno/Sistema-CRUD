export interface Register{
    id?:number,
    email:string,
    senha:string,
    nome:string,
    cpf:string,
    nivel?:{nivel: number, name: string}
}