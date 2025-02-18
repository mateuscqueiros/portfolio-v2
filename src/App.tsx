import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { BlogHomePage } from "./features/blog/page/blog-home";
import { BlogArticlePage } from "./features/blog/page/article";
import { LoadingSupense } from "./components/loading";
import { MainLayout } from "./components/layout";
import { NoMatch } from "./pages/no-match";

// https://ouassim.tech/

function App() {
  return (
    <LoadingSupense message={"Carregando..."}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="blog">
              <Route index element={<BlogHomePage />} />
              <Route path=":id" element={<BlogArticlePage />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingSupense>
  );
}

export default App;
