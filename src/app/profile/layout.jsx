import CustomBreadcrumbs from "../components/CustomBreadcrumbs";
import SideBar from "../components/profileComponents/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <CustomBreadcrumbs />
      <div className="flex flex-col lg:flex-row w-full container mx-auto gap-6">
        <SideBar />

        <main className="flex-grow lg:w-[calc(100%-16rem)] w-full">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
