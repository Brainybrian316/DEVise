
import { LOGIN_MUTATION } from "../graphql/mutations";
import { useMutation } from "@apollo/client";


export function useLoginMutation() {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  return { login, loading, error };
}

