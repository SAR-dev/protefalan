import axios from "axios";
import { getLocalAccessToken } from "./helpers";

const defaultConfig = () => {
  const unAuthConfig = {
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getLocalAccessToken()}`
    },
  };
  return unAuthConfig;
};

const unauthConfig = () => {
  const unAuthConfig = {
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    headers: {
      "Content-Type": "application/json"
    },
  };
  return unAuthConfig;
};

const formdataConfig = () => {
  const unAuthConfig = {
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    headers: {
      "Authorization": `Bearer ${getLocalAccessToken()}`
    },
  };
  return unAuthConfig;
};

export const signIn = ({ email, password }) => {
  const data = { email, password };
  return axios
    .post(`/token/`, data, unauthConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
};

export const signUp = ({ username, first_name, last_name, email, password, password2 }) => {
  const data = { username, first_name, last_name, email, password, password2 };
  return axios
    .post(`/account/create/`, data, unauthConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
};

export const getMe = () => {
  return axios
    .get(`/account/me/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
};

export const getGigsByAuthor = (username) => {
  return axios
    .get(`/gig/list/?author__username=${username}`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export const getHomeFeed = () => {
  return axios
    .get(`/category/feed/list/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export function addUpvoteGig(id) {
  return axios
    .post(`/gig/${id}/vote/up/`, null, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function removeUpvoteGig(id) {
  return axios
    .delete(`/gig/${id}/vote/up/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function addDownvoteGig(id) {
  return axios
    .post(`/gig/${id}/vote/down/`, null, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function removeDownvoteGig(id) {
  return axios
    .delete(`/gig/${id}/vote/down/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getGigDetails(id) {
  return axios
    .get(`/gig/${id}/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getGigUpdateDetails(id) {
  return axios
    .get(`/gig/${id}/update/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getGigComments(gig_id) {
  return axios
    .get(`/comment/list/?gig__id=${gig_id}`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getProfileComments(username) {
  return axios
    .get(`/comment/list/?gig__author__username=${username}`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}


export function getProfile(username) {
  return axios
    .get(`/profile/username/${username}/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function follow(username) {
  return axios
    .post(`/profile/follow/${username}/`, null, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function unfollow(username) {
  return axios
    .delete(`/profile/follow/${username}/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getCategoryList() {
  return axios
    .get(`/category/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function imageUploader(img) {
  var formData = new FormData();
  formData.append("image", img);
  return axios.post(`/image/create/`, formData, formdataConfig())
    .then((res) => {
      return { data: res.data }
    })
    .catch((err) => {
      return { error: err.response.data }
    })
};

export function createGig(data) {
  return axios
    .post(`/gig/`, data, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function createComment(data) {
  return axios
    .post(`/comment/`, data, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function updateComment(id, data) {
  return axios
    .put(`/comment/${id}/update/`, data, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function deleteGig(id) {
  return axios
    .delete(`/gig/${id}/update/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function deletePackage(id) {
  return axios
    .delete(`/package/${id}/update/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function updateGig({id, data}) {
  return axios
    .put(`/gig/${id}/update/`, data, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function updatePackage({id, data}) {
  return axios
    .put(`/package/${id}/update/`, data, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function createBulkPackages(data) {
  return axios
    .post(`/package/bulk/`, data, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function searchGig(keyword) {
  return axios
    .get(`/gig/search/${keyword}/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function addUpvoteComment(id) {
  return axios
    .post(`/comment/${id}/vote/up/`, null, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function removeUpvoteComment(id) {
  return axios
    .delete(`/comment/${id}/vote/up/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function addDownvoteComment(id) {
  return axios
    .post(`/comment/${id}/vote/down/`, null, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function removeDownvoteComment(id) {
  return axios
    .delete(`/comment/${id}/vote/down/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getAds() {
  return axios
    .get(`/advertisement/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function submitOrder(data) {
  return axios
    .post(`/order/`, data, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getCreatedOrders() {
  return axios
    .get(`/order/created/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getReceivedOrders() {
  return axios
    .get(`/order/received/`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function updateAccount(data) {
  return axios
    .put(`/account/update/`, data, formdataConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}