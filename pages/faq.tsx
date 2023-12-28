import FAQScreen from "../src/components/screens/FAQScreen";

// console.log('Com o getServerSideProps, toda vez que este componente for gerado, ele será executado novamente, assim sendo, realizando uma nova consulta a API.')
// já com o getStaticProps, será somente executado em tempo de build, e essa resposta será armazenada e reutilizada sempre, sendo atualizada somente depois de uma nova build da aplicação(a resposta nesse caso é obviamente mais rápida)
// em modo de desenvolvimento, as duas sempre serão executadas novamente
export async function getServerSideProps() {
    const FAQ_API_URL ="https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faq = await fetch(FAQ_API_URL)
      .then((respostaDoServidor) => {
        return respostaDoServidor.json();
      })
      .then((resposta) => {
        return resposta;
      });
    return {
      props: {
        faq,
      },
    };
  }
  
export default FAQScreen;