
import { LOGIN_MUTATION, LOGOUT_MUTATION, CREATE_USER_MUTATION } from "../graphql/mutations";
import { useMutation } from "@apollo/client";


export function useLoginMutation() {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  return { login, loading, error };
}

export function useLogoutMutation() {
  const [logout, { loading, error }] = useMutation(LOGOUT_MUTATION);
  return { logout, loading, error };
}

export function useCreateUserMutation() {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION);
}