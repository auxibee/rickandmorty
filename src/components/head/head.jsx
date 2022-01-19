import { Helmet } from "react-helmet-async";

const Head = ({ title = "", description = "" }) => {
  return (
    <Helmet
      title={title ? `${title} ` : undefined}
      defaultTitle="Rick and Morty Wiki"
    >
      <meta name="description" content={description}></meta>
    </Helmet>
  );
};

export default Head;
