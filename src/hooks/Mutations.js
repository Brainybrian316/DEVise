
import { LOGIN_MUTATION, LOGOUT_MUTATION, CREATE_USER_MUTATION, UPDATE_USER_MUTATION, UPDATE_USER_PASSWORD_MUTATION,
DELETE_USER_MUTATION } from "../graphql/mutations";
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

export function useUpdateUserMutation() {
  const [UpdateUser, { loading, error}] = useMutation(UPDATE_USER_MUTATION);
}

export function useUpdateUserPasswordMutation() {
  const [UpdateUserPassword, { loading, error}] = useMutation(UPDATE_USER_PASSWORD_MUTATION);
}

export function useDeleteUserMutation() {
  const [DeleteUser, { loading, error}] = useMutation(DELETE_USER_MUTATION);
}

