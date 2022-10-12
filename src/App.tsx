import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./containers/header";
import Footer from "./containers/footer";
import MainPage from "./pages/main-page";
import "./styles/App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <MainPage />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
