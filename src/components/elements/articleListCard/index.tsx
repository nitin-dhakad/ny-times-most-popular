import { getDateAndMonth, extractImageUrl } from "../../../helpers";

const ArticleListCard = ({
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
  const date = getDateAndMonth(published_date);
  return (
    <div className="flex w-full rounded overflow-hidden shadow-lg border border-gray-200  transition-transform transform hover:scale-105 hover:shadow-xl h-40 bg-gradient-to-r from-white to-gray-300">
      <img
        className="w-1/4 h-full object-cover"
        src={imageURL ? imageURL : "/placeHolder.png"}
        alt={title}
      />
      <div className="flex-1 px-4 py-3 ">
        <div className="flex flex-row">
          <p className="text-gray-700 text-sm mb-1">{date}</p>
          <p className="text-gray-700 text-sm mb-1 mx-1">|</p>
          <p className="text-gray-700 text-sm mb-1">{section}</p>
        </div>
        <div className="font-bold text-black mb-1">{title}</div>
        <p className="text-gray-700 text-sm mb-2">{abstract}</p>
        <span className="text-gray-600 text-xs italic">{byline}</span>
      </div>
    </div>
  );
};

export default ArticleListCard;
