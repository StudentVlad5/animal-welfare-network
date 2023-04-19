import { fetchData } from 'services/APIservice';
import { addBreeds } from 'redux/breeds/slice';

export async function getBreeds(dispatch) {
  try {
    const { data } = await fetchData('/breeds');
    dispatch(addBreeds(data));
    if (!data) {
      return alert('Whoops, something went wrong');
    }
  } catch (error) {
    alert(error.message);
  }
}
