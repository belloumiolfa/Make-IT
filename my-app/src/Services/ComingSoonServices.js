import axios from 'axios';
const APT_url = 'http://localhost:5000/comingSoon';

const CominSoonServices = {
   addSubscribe,
   contact,
};
/**
 * Add subscribes
 */
function addSubscribe(email) {
   return axios({
      method: 'post',
      url: `${APT_url}/addSubscribe`,
      data: {
         email: email,
      },
   });
}
/**
 * Contact service
 *
 */
function contact(contact) {
   return axios({
      method: 'post',
      url: `${APT_url}/addContact`,
      data: { contact: contact },
   });
}
export default CominSoonServices;
