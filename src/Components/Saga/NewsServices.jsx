
import axios from "axios";

export const GetLatestNewsServices = async (category) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
    params: {
      country: 'in',
      category: category,
      apiKey: '51663eacf9ad40e4951abc9e41bbf44e'
    }
  });
  console.log(response.data.articles);
  return response.data.articles;
};
