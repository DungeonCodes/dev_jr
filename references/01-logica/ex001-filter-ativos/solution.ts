export type User = { id: number; active: boolean };
export const filterActiveUsers = (users: User[]): User[] => users.filter((user) => user.active);
