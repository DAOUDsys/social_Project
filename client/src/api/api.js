import { setLogin } from "../state/state.js";

export const register = async (
  values,
  onSubmitProps,
  setIsLoginPage,
  isLoginPage
) => {
  // this allows us to send form data with image
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  formData.append("picturePath", values.picture.name);

  const savedUseResponse = await fetch("http://localhost:5000/auth/register", {
    method: "POST",
    body: formData,
  });
  const savedUser = await savedUseResponse.json();
  onSubmitProps.resetForm();

  if (savedUser) setIsLoginPage(!isLoginPage);
};
export const login = async (values, onSubmitProps, dispatch, navigate) => {
  const loggedInResponse = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const loggedIn = await loggedInResponse.json();
  onSubmitProps.resetForm();
  if (loggedIn) {
    dispatch(
      setLogin({
        user: loggedIn.user,
        token: loggedIn.token,
      })
    );
  }
  navigate("/home");
};
