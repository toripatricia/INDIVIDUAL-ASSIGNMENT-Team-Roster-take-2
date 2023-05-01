import { getSingleTeam } from './teamData';
import { getSingleMember } from './memberData';

const viewMemberTeam = (memberFirebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(memberFirebaseKey).then((memberObj) => {
    getSingleTeam(memberObj.team).then((teamObj) => {
      resolve({ teamObj, ...memberObj });
    });
  }).catch((error) => reject(error));
});

export default viewMemberTeam;
