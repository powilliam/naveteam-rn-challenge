import axios from "axios";

export default axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
});
