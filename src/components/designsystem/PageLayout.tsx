type IPageLayoutProps = {
  style?: string;
  children: React.ReactNode;
};
export default function PageLayout(props: IPageLayoutProps) {
  return (
    <div className="flex justify-center bg-black">
      <div>{props.children}</div>
    </div>
  );
}
