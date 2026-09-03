export type HttpStatusCategory = 'success' | 'client_error' | 'server_error' | 'other';
export function getHttpStatusCategory(_status: number): HttpStatusCategory {
  throw new Error('TODO: implemente getHttpStatusCategory');
}
