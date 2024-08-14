/**
 * write a method to get publish day and month
 * @param {*} url function take as input url
 * @param {*} params function n params in order to replace in API
 * @return {*} updated url with provied parameters
 */

export const updateURLParams = (url: string, ...params: string[]) => {
  let updatedUrl = url;
  params.forEach((param, index) => {
    updatedUrl = updatedUrl.replace(`{{param${index + 1}}}`, param);
  });
  return updatedUrl;
};

/**
 * write a method to fetch media image url
 * @param {*} media function take as input
 * @param {*} quality image quality to be fetched expected values 0 - low , 1- good, 2 - best
 * @return {*} media image url
 */
export const extractImageUrl = (
  media: { [x: string]: { [x: string]: string }[] }[],
  quality: number
): string => {
  return media?.[0]?.["media-metadata"]?.[quality]?.["url"] || "";
};

/**
 * write a method to get publish day and month
 * @param {*} date function take as input published date
 * @return {*} day and month
 */
export const getDateAndMonth = (date: string): string => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  return day + " " + month;
};
