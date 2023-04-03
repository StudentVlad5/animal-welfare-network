import { Notify } from 'notiflix/build/notiflix-notify-aio';

const onFetchError = text => {
  return Notify.failure(`${text}`);
};

const onInfo = text => {
  return Notify.info(`${text}`);
};

const onSuccess = text => {
  return Notify.success(`${text}`);
};

export { onFetchError, onInfo, onSuccess };
