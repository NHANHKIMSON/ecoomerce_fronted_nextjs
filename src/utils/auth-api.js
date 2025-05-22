import { auth } from "@/auth";
export async function getAuthToken() {
    const session = await auth();
    const token = session?.access_token;
    return token;
}