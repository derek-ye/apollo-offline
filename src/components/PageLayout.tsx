type IPageLayoutProps = {
  style?: string;
  children: React.ReactNode;
};
export default function PageLayout(props: IPageLayoutProps) {
  return (
    <div className="flex justify-center">
      <div>{props.children}</div>
    </div>
  );
}
