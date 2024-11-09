import styles from "@/components/CreateContent/CreateContent.module.css";

const CreateContent = () => {
  return (
    <>
      <div className={styles.createContent}>
        <div className={`title`}>
          <h2>Cadastrar novo jogo</h2>
        </div>
        <form id="createForm" className={styles.formPrimary}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Insira o título do jogo"
            className={`${styles.input} ${"inputPrimary"}`}
          />
          <input
            type="text"
            name="platform"
            id="platform"
            placeholder="Insira a plataforma do jogo"
            className={`${styles.input} ${"inputPrimary"}`}
          />
          <input
            type="number"
            name="year"
            id="year"
            placeholder="Insira o ano do jogo"
            className={`${styles.input} ${"inputPrimary"}`}
          />
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Insira o preço do jogo"
            className={`${styles.input} ${"inputPrimary"}`}
          />
          <input
            type="submit"
            value="Cadastrar"
            id="createBtn"
            className={`${styles.input} ${"btnPrimary"}`}
          />
        </form>
      </div>
    </>
  );
};
export default CreateContent;

