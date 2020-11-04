import Axios from "axios";

export const fetchData = async () => {
  const url = "https://willowtreeapps.com/api/v1.0/profiles";

  await Axios.get(url)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
