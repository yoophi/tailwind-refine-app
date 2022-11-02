import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import { sampleDataProvider } from "./data-providers";
import { Layout } from "./layouts/Layout";

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={sampleDataProvider()}
      resources={[{ name: "posts" }]}
      Layout={Layout}
    />
  );
};

export default App;
