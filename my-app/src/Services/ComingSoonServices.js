import axios from 'axios';
const APT_url = 'https://coming-soon-make-it.herokuapp.com/comingSoon';

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
