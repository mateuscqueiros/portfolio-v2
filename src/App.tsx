import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { BlogHomePage } from "./features/blog/page/blog-home";
import { BlogArticlePage } from "./features/blog/page/article";
import { LoadingSupense } from "./components/loading";
import { BlogPageLayout } from "./features/blog/components/layout";

// https://ouassim.tech/

function App() {
  return (
    <LoadingSupense message={"Carregando..."}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="blog" element={<BlogPageLayout />}>
            <Route index element={<BlogHomePage />} />
            <Route path=":id" element={<BlogArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingSupense>
  );
}

export default App;
