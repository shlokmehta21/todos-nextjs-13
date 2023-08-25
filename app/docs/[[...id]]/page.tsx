import { FC } from "react";

interface DocsPageProps {
  params: any;
}

const DocsPage: FC<DocsPageProps> = ({ params }) => {
  return <div>DocsPage ID:{params.id}</div>;
};

export default DocsPage;
