export const formatWhatsApp = (value: string) => {
  const digits = value.replace(/\D/g, "");

  const phoneNumber = digits.slice(0, 11);
  const len = phoneNumber.length;

  if (len <= 2) {
    return phoneNumber;
  }
  if (len <= 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
};
