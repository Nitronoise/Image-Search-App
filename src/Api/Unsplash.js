import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FueW-mICilVe29vCxpoF4wgL_Rma-EffgVvGHZpL2BM",
  },
});
