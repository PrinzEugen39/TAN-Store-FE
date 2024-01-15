import { Button } from "@/components/ui/button";
import API from "@/hooks/API";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function EmailPage() {
  const { id, token } = useParams();

  useEffect(() => {
    async function verifyEmailUrl() {
      try {
        const { data } = await API.get(`/auth/${id}/verify/${token}`);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    verifyEmailUrl();
  }, [id, token]);

  return (
    <>
      <div>
        <h1>Email verified successfully</h1>
        <Link to={"/signin"}>
          <Button>Go to Sign In</Button>
        </Link>
      </div>
    </>
  );
}
