"use client"
import CustomBreadcrumbs from "../components/CustomBreadcrumbs";
import StoreSideBar from "../components/storeComponents/StoreSideBar";
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname();

  // Determine if the route is for a specific headphone
  const isProductDetailPage = pathname.includes('/store/head-phones/');

  return (
    <>
      <CustomBreadcrumbs />
      
      <div className="flex flex-col lg:flex-row w-full container mx-auto gap-6">
        {/* Only render StoreSideBar if not on a specific product detail page */}
        {!isProductDetailPage && <StoreSideBar />}
        
        <main className={`flex-grow w-full ${!isProductDetailPage ? 'lg:w-[calc(100%-20rem)]' : ''}`}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
