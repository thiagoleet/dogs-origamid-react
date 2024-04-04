const api = {
  url: "https://dogsapi.origamid.dev/json",
  endpoints: {
    token: "/jwt-auth/v1/token",
    user: "/api/user",
    validate: "/validate",
    photo: "/api/photo",
  },
  TOKEN_POST: (body) => {
    return {
      url: api.url + api.endpoints.token,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  },
  USER_GET: (token) => {
    return {
      url: api.url + api.endpoints.user,
      options: {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    };
  },
  TOKEN_VALIDADE_POST: (token) => {
    return {
      url: api.url + api.endpoints.token + api.endpoints.validate,
      options: {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    };
  },
  USER_POST: (body) => {
    return {
      url: api.url + api.endpoints.user,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  },
  PHOTO_POST: (formData, token) => {
    return {
      url: api.url + api.endpoints.photo,
      options: {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      },
    };
  },
};

export default api;
