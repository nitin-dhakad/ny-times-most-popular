import React from "react";
import { ArticleResults } from "../../../network/mostPopularArticles.type";
import { ArticleListCard } from "../../elements";
import { useNavigate } from "react-router-dom";

type Props = {
  articles: ArticleResults[] | undefined;
};

const ArticleList = ({ articles }: Props) => {
  const navigation = useNavigate();
  const handleNavigation = (article: ArticleResults) => {
    navigation(`/detail/${article.id}`, { state: article });
  };
  return (
    <div>
      {articles?.map((article, index) => {
        return (
          <div
            className="list-item m-2"
            key={index}
            onClick={() => {
              handleNavigation(article);
            }}
          >
            <ArticleListCard {...article} />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
