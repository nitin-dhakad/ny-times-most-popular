import { useLocation } from "react-router-dom";
import { ArticleDetailCard, GoBackButton } from "../../components/elements";
import { Constants } from "../../statics";

const ArticleDetail = () => {
  const { state } = useLocation();

  return (
    <div>
      <GoBackButton />
      <h1 className="text-4xl font-semibold font-serif italic text-center p-4 text-slate-800 outline">
        {Constants.PAGE_HEADING}
      </h1>
      <ArticleDetailCard {...state} />
      <div className="outline-double mt-2" />
    </div>
  );
};

export default ArticleDetail;
