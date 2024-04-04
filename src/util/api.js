const api = {
  url: "https://dogsapi.origamid.dev/json",
  endpoints: {
    comment: "/api/comment",
    photo: "/api/photo",
    token: "/jwt-auth/v1/token",
    user: "/api/user",
    validate: "/validate",
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
  PHOTOS_GETS: ({ page, total, user }) => {
    return {
      url: `${api.url}${api.endpoints.photo}?_page=${page}&_total=${total}&_user=${user}`,
      options: {
        method: "GET",
        cache: "no-store",
      },
    };
  },
  PHOTO_GET: (id) => {
    return {
      url: `${api.url}${api.endpoints.photo}/${id}`,
      options: {
        method: "GET",
        cache: "no-store",
      },
    };
  },
  COMMENT_POST: (id, body) => {
    const token = window.localStorage.getItem("token");
    return {
      url: `${api.url}${api.endpoints.comment}/${id}`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
      },
    };
  },
};

export default api;
