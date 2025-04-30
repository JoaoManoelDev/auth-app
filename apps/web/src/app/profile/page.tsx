import { getProfile } from "@/actions/users/get-profile";

const ProfilePage = async () => {
  const response = await getProfile();

  if (response.isError) {
    return <div>Erro: {response.data?.message}</div>;
  }

  return (
    <div className="mt-20">
      <h1>Profile Page</h1>
      <span>User ID: {response.data.sub}</span>
    </div>
  );
};

export default ProfilePage;
