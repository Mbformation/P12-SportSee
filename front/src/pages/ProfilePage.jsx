import { useLoaderData } from 'react-router-dom';

export default function ProfilePage() {
  const data = useLoaderData();
  console.log(data);
    return (
      <div>Profile Page
      </div>
    );
  }


