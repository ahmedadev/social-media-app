import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <main className="flex h-screen">
      
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home/>} />

        </Route>

      </Routes>
      <Toaster/>
    </main>
  );
}

export default App;
