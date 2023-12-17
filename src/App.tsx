import { CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { Routes } from "./routes/Routes";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes />
      <Header />
    </>
  );
};
