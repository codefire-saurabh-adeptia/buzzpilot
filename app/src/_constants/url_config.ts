export const URL_CONFIG = {
  api_base_url: import.meta.env.VITE_APP_API_PATH,
  account: {
    youtube: {
      getAuthUrl: "/connector/youtube",
    },
    createAccount: "/account/create",
    editAccount: "/account/update",
    deleteAccount: "/account/delete",
  },
  posts: {
    youtube: {
      createpost: "/posts/createpost/youtube",
    },
  },
};
