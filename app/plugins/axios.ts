export default ({ $axios }: { $axios: any }) => {
  $axios.onRequest((config: any) => {
    console.log("axios hook test");
    return config;
  });
};
