export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToBack = (navigate) => {
  navigate(-1);
};

export const goToDetails = (navigate, name) => {
  navigate(`/details/${name}`);
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};
