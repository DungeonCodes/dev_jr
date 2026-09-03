export type HttpStatusCategory = 'success' | 'client_error' | 'server_error' | 'other';
export function getHttpStatusCategory(status: number): HttpStatusCategory {
  if (status >= 200 && status < 300) return 'success';
  if (status >= 400 && status < 500) return 'client_error';
  if (status >= 500 && status < 600) return 'server_error';
  return 'other';
}
