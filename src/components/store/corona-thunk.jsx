import { coronaCasesActions } from './corona-slice';
import { modalActions } from './modal-slice';

const urls = [
  'https://disease.sh/v3/covid-19/countries',
  'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
];

async function getDataFromUrl(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

export default function getData() {
  return (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await Promise.all(urls.map((url) => getDataFromUrl(url)));

        if (typeof response[0] === 'string' || typeof response[1] === 'string') {
          // Didn't get the actual object, instead got an error message as string
          dispatch(
            modalActions.alertShowHandler({
              message: 'Something went wrong!!!',
              severity: 'error',
            }),
          );
        } else {
          // Get data succesfully
          dispatch(
            modalActions.alertShowHandler({
              message: 'Got data successfully',
              severity: 'success',
            }),
          );
          // stroing the response to redux
          dispatch(coronaCasesActions.dataFeedHandler(response));
        }
      } catch (error) {
        // Throwing error if any
        dispatch(
          modalActions.alertShowHandler({
            message: 'Something went wrong!!!',
            severity: 'error',
          }),
        );
      }
    };

    fetchData();
  };
}
