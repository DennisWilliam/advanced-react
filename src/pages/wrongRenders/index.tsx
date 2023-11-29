import { HeavyComponent } from "../../components/heavyComponent";
import Layout from "../layout";

const WrongRenders = () => {
  return (
    <Layout useHeavyComponent={true}>
      <HeavyComponent alias="Heavy Children Component" numberOfItems={10} />
    </Layout>
  );
};

export default WrongRenders;
