export type Profile = { name: string };
export async function getProfileName(fetchProfile: () => Promise<Profile>): Promise<string> {
  const profile = await fetchProfile();
  return profile.name;
}
