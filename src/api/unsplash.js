import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 2XBRrKHdzsTPN6f_rNcJXccdiUJ5TkEFXPtDuYsmAz0",
  },
});
