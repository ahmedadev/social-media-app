import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="./" />
      ) : (
        <>
          <section className="flex flex-1 flex-col items-center justify-center py-10">
            <Outlet />
          </section>
          <img src="/assets/images/side-img.svg" alt="Logo" className="hidden lg:block h-screen object-cover bg-no-repeat"/>
        </>
      )}
    </>
  );
};
export default AuthLayout;
