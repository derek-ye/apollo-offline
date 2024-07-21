import Sidebar from "./layout/Sidebar";

type IPageLayoutProps = {
  style?: string;
  children: React.ReactNode;
};
export default function PageLayout(props: IPageLayoutProps) {
  return (
    <div className="flex justify-left w-11/12">
      <Sidebar></Sidebar>
      <div className="ml-14">{props.children}</div>
    </div>
  );
}
