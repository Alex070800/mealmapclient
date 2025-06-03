export type ValidatorFunc = (v: string) => string | undefined;

export const emailHasError: ValidatorFunc = (v?: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(v || "")
    ? undefined
    : "Некорректный адрес электронной почты";
};

export const nameHasError: ValidatorFunc = (v?: string) => {
  const nameRegex = /^([а-яА-Яa-zA-ZёЁ]+\s?)+$/;
  return nameRegex.test(v || "") ? undefined : "Некорректное имя";
};

export const text3HasError: ValidatorFunc = (v?: string) => {
  const nameRegex = /^([а-яА-ЯёЁ]+\s?)+$/;
  return v && v.length > 2 && nameRegex.test(v || "")
    ? undefined
    : "Некорректное имя";
};

export const text10HasError: ValidatorFunc = (v?: string) => {
  const nameRegex = /^([а-яА-ЯёЁ]+\s?)+$/;
  return v && v.length > 9 && nameRegex.test(v || "")
    ? undefined
    : "Некорректное имя";
};

export const phoneHasError: ValidatorFunc = (v?: string) => {
  if (v) {
    let countDigit = v.length - v.replace(/\d/gm, "").length;
    return countDigit > 10 ? undefined : "Некорректный номер телефона";
  }
  return "Некорректный номер телефона";
};

export const dateHasError: ValidatorFunc = (v?: string) => {
  const nameRegex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  return nameRegex.test(v || "") ? undefined : "Некорректная дата";
};

export const passwordHasError: ValidatorFunc = (v?: string) =>
  (v?.length || 0) > 7 &&
  (v?.length || 0) < 17 &&
  /[a-zа-я]+/.test(v || "") &&
  /[A-ZА-Я]+/.test(v || "") &&
  /\d/.test(v || "")
    ? undefined
    : "Пароль должен содержать от 8 до 16 символов, включая цифру, строчную и заглавную буквы.";
