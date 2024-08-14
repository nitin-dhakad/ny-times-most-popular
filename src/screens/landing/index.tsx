import React, { useState } from "react";
import { useGetArticleByDaysQuery } from "../../network/mostPopularArticles";
import { SpinningLoader, ArticleList } from "../../components/widgets";
import { Dropdown } from "../../components/elements";
import { Constants } from "../../statics";

const Landing = () => {
  const [selectedDay, setSelectedDay] = useState(Constants.DAYS_LIST[0]);
  const { data, isFetching } = useGetArticleByDaysQuery(selectedDay);

  return (
    <div className=" justify-center items-center flex-col">
      <div className="flex flex-row items-center justify-between  p-4">
        <h1 className="text-4xl font-semibold font-serif italic text-center flex-1 ml-52  text-slate-800">
          {Constants.PAGE_HEADING}
        </h1>
        <Dropdown
          dayList={Constants.DAYS_LIST}
          onDropdownChangeValue={(
            event: React.ChangeEvent<HTMLSelectElement>
          ) => {
            setSelectedDay(event.target.value);
          }}
          selectedValue={selectedDay}
        />
      </div>
      {isFetching ? (
        <SpinningLoader visible={isFetching} />
      ) : (
        <ArticleList articles={data?.results} />
      )}
    </div>
  );
};
export default Landing;
