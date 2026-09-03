export type Profile = { name: string };
export async function getProfileName(_fetchProfile: () => Promise<Profile>): Promise<string> {
  throw new Error('TODO: implemente getProfileName');
}
