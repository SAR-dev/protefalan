import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const setLocalAccessToken = (token) => {
  localStorage.setItem("prf_act", token);
};

export const removeLocalAccessToken = (token) => {
  localStorage.removeItem("prf_act");
};

export const getLocalAccessToken = () => {
  return localStorage.getItem("prf_act");
};

export const setLocalRefreshToken = (token) => {
  localStorage.setItem("prf_rft", token);
};

export const removeLocalRefreshToken = (token) => {
  localStorage.removeItem("prf_rft");
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const parseError = (err) => {
  if (err.detail) {
    return err.detail
  }
  let message = []
  Object.keys(err).forEach(e => {
    message = [...message, ...err[e]]
  })
  return capitalizeFirstLetter(message.join(""))
}

export function getRandomColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export const parseText = (str) => {
  return str.replace(/[^a-zA-Z ]/g, "");
}

export const parseFromNow = (d) => {
  return dayjs().from(dayjs(d), true)
}

export const saveLocalGigId = (data) => {
  localStorage.setItem("protefalan_gig_create_id", JSON.stringify(data));
}

export const getLocalGigId = (data) => {
  return JSON.parse(localStorage.getItem("protefalan_gig_create_id"));
}

export const saveLocalGig = (data) => {
  localStorage.setItem("protefalan_gig_create", JSON.stringify(data));
}

export const getLocalGig = (data) => {
  return JSON.parse(localStorage.getItem("protefalan_gig_create"));
}

export const saveLocalPackages = (data) => {
  localStorage.setItem("protefalan_packages_create", JSON.stringify(data));
}

export const getLocalPackages = (data) => {
  return JSON.parse(localStorage.getItem("protefalan_packages_create"));
}

export const clearGigCache = () => {
  localStorage.removeItem("protefalan_gig_create");
  localStorage.removeItem("protefalan_gig_create_id");
  localStorage.removeItem("protefalan_packages_create");
}
