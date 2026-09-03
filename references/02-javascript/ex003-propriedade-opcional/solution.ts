export type Account = { profile?: { displayName?: string } };
export const getDisplayName = (account: Account): string => account.profile?.displayName ?? 'Usuário sem nome';
