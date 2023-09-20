import axios from "axios";

const fatcher = (url: string)=>axios.get(url).then((res)=>res.data);

export default fatcher;