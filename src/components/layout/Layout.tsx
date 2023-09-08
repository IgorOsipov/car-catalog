import { FC, PropsWithChildren } from "react";
import Header from "./Header/Header";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./Footer"), {
  ssr: false,
});

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      {children}
      <DynamicFooter />
    </Meta>
  );
};

export default Layout;
