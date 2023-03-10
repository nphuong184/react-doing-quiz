import axios from "../untils/axiosCustomize";

const addNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const deleteUser = (id) => {
  return axios.delete("api/v1/participant", { data: { id: id } });
};

const getListUsersWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) =>{
  return axios.post(`api/v1/login`,{email, password})
}

const postRegister = (username,email,password)=>{
  return axios.post(`api/v1/register`,{username,email,password})
}

const getQuizByUser = () => {
  return axios.get(`api/v1/quiz-by-participant`)
}

const getDataQuiz = (id) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${id}`)
}

const postSubmitQuiz = (data) =>{
  return axios.post(`api/v1/quiz-submit`,{...data})
}

export {
  addNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getListUsersWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz
};
