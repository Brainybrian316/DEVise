
import { LOGIN_MUTATION, LOGOUT_MUTATION, CREATE_USER_MUTATION, UPDATE_USER_MUTATION, UPDATE_USER_PASSWORD_MUTATION,
DELETE_USER_MUTATION, CREATE_USER_PROJECT_MUTATION, UPDATE_USER_PROJECT_MUTATION, DELETE_USER_PROJECT_MUTATION } from "../graphql/mutations";
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
  return { createUser, loading, error };
}

export function useUpdateUserMutation() {
  const [UpdateUser, { loading, error}] = useMutation(UPDATE_USER_MUTATION);
  return { UpdateUser, loading, error };
}

export function useUpdateUserPasswordMutation() {
  const [UpdateUserPassword, { loading, error}] = useMutation(UPDATE_USER_PASSWORD_MUTATION);
  return { UpdateUserPassword, loading, error };
}


export function useDeleteUserMutation() {
  const [DeleteUser, { loading, error}] = useMutation(DELETE_USER_MUTATION);
  return { DeleteUser, loading, error };
}

export function useCreateUserProjectMutation() {
  const [CreateUserProject, { loading, error }] = useMutation(CREATE_USER_PROJECT_MUTATION);
  return { CreateUserProject, loading, error };
}

export function useUpdateUserProjectMutation() {
  const [UpdateUserProject, { loading, error }] = useMutation(UPDATE_USER_PROJECT_MUTATION);
  return { UpdateUserProject, loading, error };
}

export function useDeleteUserProjectMutation() {
  const [DeleteUserProject, { loading, error }] = useMutation(DELETE_USER_PROJECT_MUTATION);
  return { DeleteUserProject, loading, error };
}

