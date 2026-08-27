import type { User } from "~/entity/user";

export const useUser = () => {
  const user = useState<User | null>("user", () => null);
  const isLoading = useState<boolean>("user:loading", () => false);

  async function load() {
    isLoading.value = true;

    try {
      user.value = {
        id: "1",
        firstName: "Maulen",
        lastName: "",
        picture: "",
        username: "azikulov",
        updatedAt: new Date(),
        createdAt: new Date(),
      };
    } catch {
      console.log("Failed to fetch user!");
    } finally {
      isLoading.value = false;
    }
  }

  return {
    user: readonly(user),
    loading: readonly(isLoading),
    load,
  };
};
