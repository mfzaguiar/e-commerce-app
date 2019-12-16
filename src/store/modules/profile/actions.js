export function SignIn(user) {
  return {
    type: '@profile/SIGN_IN',
    payload: user,
  };
}

export function SignOut() {
  return {
    type: '@profile/SIGN_OUT',
  };
}
