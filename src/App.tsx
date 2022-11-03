import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import { authProvider } from "./auth-providers";
import { sampleDataProvider } from "./data-providers";
import { Layout } from "./layouts/Layout";
import { AuthPage } from "./pages/auth";
import { PostList } from "./pages/posts/list";

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      authProvider={authProvider}
      dataProvider={sampleDataProvider()}
      resources={[{ name: "posts", list: PostList }]}
      Layout={Layout}
      LoginPage={AuthPage}
    />
  );
};

export default App;
