/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import MemberCard from '../components/MemberCard';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';

export default function ViewTeam() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/new" passHref>
        <Button>Add A Member</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over member here using MemberCard component */}
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
      </div>

    </div>
  );
}
