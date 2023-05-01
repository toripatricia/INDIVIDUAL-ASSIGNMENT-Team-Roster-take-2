import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleMember } from '../../api/memberData';

function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="text-center my-4">
      <h1>{memberDetails.name}</h1>
      <h2>Role: {memberDetails.role}</h2>
    </div>
  );
}

export default ViewMember;
