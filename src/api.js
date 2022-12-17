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

export const signIn = ({ email, password }) => {
  const data = { email, password };
  return axios
    .post(`/token/`, data, defaultConfig())
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
    .post(`/account/create/`, data, defaultConfig())
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

