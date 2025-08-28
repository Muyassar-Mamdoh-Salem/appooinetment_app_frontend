import axios from "axios";

const axiosGlobal = axios.create({

baseURL:"http://localhost:1337/api"

})
const getCategrory=()=> axiosGlobal.get("/categories?populate=*")

export defult
