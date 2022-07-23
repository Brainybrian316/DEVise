import {GET_USER_QUERY,   GET_USERS_QUERY , USER_PROJECTS_FRAGMENT  } from "./queries";
import { useMutation, useQuery } from "@apollo/client";

export function useGetUserQuery(id) {
 const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: { id }
 });
  return {
    user: data?.user,
    loading,
    error: Boolean(error),
  }
  
}

export function useGetUsersQuery() {
  const { data, loading, error } = useQuery(GET_USERS_QUERY);
  return {
    users: data?.users,
    loading,
    error: Boolean(error),
  }
}
