import { getDateAndMonth, extractImageUrl } from "../../../helpers";

const ArticleDetailCard = ({
  title,
  published_date,
  media,
  abstract,
  byline,
  section,
}: {
  title: string;
  published_date: string;
  media: any[];
  abstract: string;
  byline: string;
  section: string;
}) => {
  const imageURL = extractImageUrl(media, 2);
  const publishDate = getDateAndMonth(published_date);
  return (
    <div className="bg-white  rounded-lg overflow-hidden mx-auto md:flex-row md:flex px-5 pt-2">
      <img
        className="w-full h-full object-cover md:w-6/12 md:max-h-80"
        src={imageURL ? imageURL : "/placeHolder.png"}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{byline}</p>
        <p className="text-gray-700 mb-4">{abstract}</p>
        <div className="flex justify-between text-gray-500 text-xs">
          <span>{publishDate}</span>
          <span>{section}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailCard;
