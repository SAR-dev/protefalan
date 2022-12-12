import axios from "axios";
import { getLocalAccessToken } from "./helpers";

const defaultConfig = () => {
  const unAuthConfig = {
    baseURL: "https://protefalan-kmmp.onrender.com/api",
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

export function getGigs() {
  return axios
    .get(`/gigs`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getGigDetails(id) {
  return axios
    .get(`/gig/${id}`, defaultConfig())
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

export function getOrders() {
  return axios
    .get(`/orders`, defaultConfig())
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return { error: err.response.data };
    });
}

// # https://gamersknowhow.com/protefalan/public/api/admins

// # Route::get('admins' , 'AdminController@index');
// # Route::post('/admin' , 'AdminController@store');
// # Route::get('/admin/{id}' , 'AdminController@show');
// # Route::post('/admin/update' , 'AdminController@update');
// # Route::delete('/admin/{id}' , 'AdminController@destroy');

// # Route::get('users' , 'userController@index');
// # Route::post('/user' , 'userController@store');
// # Route::get('/user/{id}' , 'userController@show');
// # Route::post('/user/update' , 'userController@update');
// # Route::delete('/user/{id}' , 'userController@destroy');
// # Route::post('/user/changeUserStatus' , 'userController@changeStatus'); //for admin only

// # Route::get('gigs' , 'gigController@index');
// # Route::get('/gig/{id}' , 'gigController@show');
// # Route::post('/gig' , 'gigController@store');
// # Route::post('/gig/update' , 'gigController@update');
// # Route::delete('gig/{id}' , 'gigController@destroy');

// # Route::get('/gig/{gig_id}/packages' , 'gigController@showAllPackages');
// # Route::get('/gig/{gig_id}/package/{id}' , 'gigController@showPackage');
// # Route::post('/gig/{gig_id}/package' , 'gigController@storePackage');
// # Route::post('/gig/{gig_id}/package/update' , 'gigController@updatePackage');
// # Route::delete('/gig/{gig_id}/package/{id}' , 'gigController@destroyPackage');

// # // order
// # Route::get('/orders' , 'orderController@index'); // for admin only
// # Route::get('/order/{id}/{user_id}/{status}' , 'orderController@changeStatus'); // for admin only
// # Route::get('/order/{gig_id}/{package_id}/{buyer_id}/make','orderController@makeOrder'); // for admin only

// # Route::get('/search/{key_word}' , 'searchController@searchUser');
