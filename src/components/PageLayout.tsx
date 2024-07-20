type IPageLayoutProps = {
  style?: string;
  children: React.ReactNode;
};
export default function PageLayout(props: IPageLayoutProps) {
  return (
    <div className="flex justify-left w-11/12">
      <div>{props.children}</div>
    </div>
  );
}
