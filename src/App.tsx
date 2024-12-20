import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <AuthProvider>
            <div className="font-sans">
                <AppRouter />
            </div>
        </AuthProvider>
    );
};

export default App;
