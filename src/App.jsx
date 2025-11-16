import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./App.css";
import Home from "./routes/Home/Home";
import Root from "./routes/Root";
import Description from "./routes/Description/Description";
import Building from "./routes/Building/Building";
import More from "./routes/More/More";
import Jobs from "./routes/Jobs/Jobs";
import Contact from "./routes/Contact/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Description",
          element: <Description />,
        },
        {
          path: "building",
          element: <Building />,
        },
        {
          path: "more",
          element: <More />,
        },
        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <Toaster position="top-center" reverseOrder={false} />
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Noto Kufi Arabic, sans-serif",
            },
          }}
          direction="rtl"
        >
          <RouterProvider router={routes} />
        </ConfigProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
