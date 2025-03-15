import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from '@apollo/client/core';

/**
 * Generic function to extract node data from ApolloQueryResult.
 * @param result GraphQL query result
 * @returns Extracted nodes as an array
 */
export function extractNodes<T>(
  result: ApolloQueryResult<{ jobCollection: { edges: { node: T }[] } }>
): T[] {
  return result.data?.jobCollection.edges.map((edge) => edge.node) || [];
}

/**
 * RxJS operator to transform Apollo query results into a list of nodes.
 * @returns RxJS map operator
 */
export function extractNodesOperator<T>() {
  return map(
    (result: ApolloQueryResult<{ jobCollection: { edges: { node: T }[] } }>) =>
      extractNodes<T>(result)
  );
}
