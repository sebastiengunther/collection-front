import { gql } from "@apollo/client";

export const CreateCollection = gql`
  mutation CreateCollection($collection: CreateCollectionInput!) {
    createCollection(createCollectionInput: $collection) {
      name,
      file
    }
  }
`;
