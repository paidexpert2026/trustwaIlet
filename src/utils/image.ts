import qr_code from '../../public/images/wallet_qr.jpg';


export { qr_code };

export const imgHelper = (img: string) => {
  const placeholder =
    'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=740&t=st=1692200537~exp=1692201137~hmac=d70f63e8fc90447372677d8b7e155087b8f01871ee77a3c1210500508a39c390';
  if (img == '') return placeholder;
  return img;
};
