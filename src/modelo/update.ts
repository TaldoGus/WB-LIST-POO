export default abstract class Update{
    public execucao!: Boolean;
    public wasUpdated!: Boolean;
    public abstract atualizar(): void;
}