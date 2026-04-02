import { Route, Routes } from "react-router-dom";
import SignupForm from "./pages/auth/components/signup-form";
import SigninForm from "./pages/auth/components/signin-form";
import Me from "./pages/auth/components/me";
import Landing from "./pages/landing";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoute } from "./routes/PublicRoute";
import AppLayout from "./layouts/AppLayout";

function App() {

  return (
    <Routes>

      <Route element={<PublicRoute />}>
        <Route path="/" element={<SignupForm />} />
        <Route path="/auth/signup" element={<SignupForm />} />
        <Route path="/auth/login" element={<SigninForm />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/user-profile" element={<Me />} />
          <Route path="/landing" element={<Landing />} />
        </Route>
      </Route>

    </Routes >
  );
}

export default App
