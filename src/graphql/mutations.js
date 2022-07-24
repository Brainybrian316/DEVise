import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { USER_DETAIL_FRAGMENT, USER_PROJECTS_FRAGMENT} from './fragments';

const GRAPH_URL = 'http://localhost:4000/graphql';

export const client = new ApolloClient({
  uri: GRAPH_URL,
  cache: new InMemoryCache(),
});

// login 
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;


 export const CREATE_USER_MUTATION = gql`
   mutation CreateUser($input: CreateUserInput!) {
     createUser(input: $input) {
      token
      user {
       firstName
       lastName
       username
       email
     }
     }
   }
 `;



// export const UPDATE_USER_MUTATION = gql`
//   mutation UpdateUser($firstName: String!, $lastName: String!, $username: String!, $email: String!) {
//     updateUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email) {
//       firstName
//       lastName
//       username
//       email
//     }
//   }
// `;

export const  UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      ...UserDetail
    }
  }
  ${USER_DETAIL_FRAGMENT}
`;

export const UPDATE_USER_PASSWORD_MUTATION = gql`
  mutation UpdateUserPassword($input: UserPassword!) {
    updateUserPassword(input: $input) {
      ...UserDetail
    }
  }
  ${USER_DETAIL_FRAGMENT}
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      ...UserDetail
    }
  }
  ${USER_DETAIL_FRAGMENT}
`;

export const CREATE_USER_PROJECT_MUTATION = gql`
  mutation CreateUserProject($input: CreateUserProjectInput!) {
    createUserProjects(input: $input) {
      ...projects
    }
    ${USER_PROJECTS_FRAGMENT}
  }
`;

export const UPDATE_USER_PROJECT_MUTATION = gql`
  mutation UpdateUserProject($id: ID!) {
    updateUserProjects(id: $id) {
      ...projects
  }
  ${USER_PROJECTS_FRAGMENT}
  }
`;  

export const DELETE_USER_PROJECT_MUTATION = gql`
  mutation DeleteUserProject($id: ID!) {
    deleteUserProjects(id: $id) {
      ...projects
  }
  ${USER_PROJECTS_FRAGMENT}
  }
`;




