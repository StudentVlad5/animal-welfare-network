import { onInfo } from 'components/helpers/Messages/NotifyMessages';

export function setImage(e) {
  const input = document.querySelector('.file');
  if (input.files[0] && input.files[0].size >= 2048000) {
    input.value = '';
    e.target.style = '';
    onInfo('File size must be less than 2Mb!');
    return;
  }
  if (
    input.files[0] &&
    !['jpeg', 'png', 'webp', 'gif', 'jpg'].includes(
      input.files[0].type.split('/')[1],
    )
  ) {
    input.value = '';
    e.target.style = '';
    onInfo('File type must be only image!');
    return;
  }
  const reader = new FileReader();
  e.target.style = '';

  reader.onload = function () {
    e.target.style = `background-image: url(${reader.result}); background-size: contain; background-position: center; background-repeat: no-repeat;`;
  };
  if (input.files[0]) {
    reader.readAsDataURL(input.files[0]);
  }
}
