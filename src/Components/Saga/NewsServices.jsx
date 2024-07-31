import axios from "axios";

export const GetLatestNewsServices = async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=51663eacf9ad40e4951abc9e41bbf44e`);
    console.log(response.data.articles)
  return response.data.articles;

  };
  

  console.log("hello world piyush")