import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import GlobalPage from "./pages/GlobalPage.jsx";
// import Auth from "./pages/Auth/Auth.jsx";


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<GlobalPage />} />
     
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
