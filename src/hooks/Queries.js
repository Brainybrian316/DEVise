
import {GET_USER_QUERY,   GET_USERS_QUERY, GET_USER_PROJECTS_QUERY, GET_ALL_USER_PROJECTS_QUERY, GET_ME_QUERY, GET_DEVPROJECTS_QUERY, GET_ONE_DEVPROJECT_QUERY  } from "../graphql/queries";

import { useQuery } from "@apollo/client";

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

export function useGetUserProjectsQuery(id) {
  const { data, loading, error } = useQuery(GET_USER_PROJECTS_QUERY, {
    variables: { id }
  });
  return {
    userProject: data?.userProject,
    loading,
    error: Boolean(error),
  }
}

export function useGetAllUserProjectsQuery() {
  const { data, loading, error } = useQuery(GET_ALL_USER_PROJECTS_QUERY);
  return {
    userProjects: data?.userProjects,
    loading,
    error: Boolean(error),
  }
}

export function useGetMeQuery() {
  const { data, loading, error } = useQuery
  (GET_ME_QUERY);
  return {
    me: data?.me,
    loading,
    error: Boolean(error),
}
}

export function useGetDevProjectsQuery() {
  const { data, loading, error } = useQuery
  (GET_DEVPROJECTS_QUERY);
  return {
    devProjects: data?.devProjects,
    loading,
    error: Boolean(error),
}
}

export function useGetOneDevProjectQuery(id) {
  const { data, loading, error } = useQuery
  (GET_ONE_DEVPROJECT_QUERY, {
    variables: { id }
  });
  return {
    devProject: data?.devProject,
    loading,
    error: Boolean(error),
}
}


