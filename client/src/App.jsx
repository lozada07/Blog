import "./App.css";
import Loading from "./components/ui/Loading";
import { useAuth } from "./context/AuthProvider";
import MainLayout from "./layouts/MainLayout";

function App() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center  h-screen">
        <Loading size="medium" />
      </div>
    );
  }
  return <MainLayout />;
}

export default App;
