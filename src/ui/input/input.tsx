import { FC, ReactNode, useEffect, useState } from "react";

import "./input.scss";

import { ReactComponent as EyeCloseIcon } from "../../shared/images/svg/eye-close.svg";
import { ReactComponent as EyeOpenIcon } from "../../shared/images/svg/eye-open.svg";
import { Button, ButtonSizes } from "../button/button";

import { bemCN } from "../../configs/bem-classname";
import { emailHasError, nameHasError, passwordHasError, ValidatorFunc } from "../../utils/validation-input";

const inputCN = bemCN("input");

export enum TypeViewInput {
  text,
  password,
  longText,
}

export enum TypeDataInput {
  text = 1,
  // date,
  number,
  // phone,
  email,
  password,
}

const validationFuncsMap = new Map<TypeDataInput, ValidatorFunc>([
  [TypeDataInput.email, emailHasError],
  // [TypeDataInput.date, dateHasError],
  [TypeDataInput.password, passwordHasError],
  // [TypeDataInput.phone, phoneHasError],
  [TypeDataInput.text, nameHasError],
]);

type InputProps = {
  id?: string;
  value?: string | number;
  typeView: TypeViewInput;
  typeData: TypeDataInput;
  placeholder?: string;
  onChange?: (v: string) => void;
  isDisable?: boolean;
  isValidate?: boolean;
  icon?: ReactNode;
  validateFunc?: ValidatorFunc;
};

export const Input: FC<InputProps> = ({
  id,
  value,
  placeholder,
  typeView,
  typeData,
  onChange,
  isDisable,
  isValidate,
  icon,
  validateFunc,
}) => {
  const [valueState, setValueState] = useState<string | number>(
    value ? value : ""
  );
  let typeClass = TypeViewInput[typeView];
  const [dataFormat, setDataFormat] = useState(TypeDataInput[typeData]);
  const [passIconEye, setPassIconEye] = useState<ReactNode>(<EyeCloseIcon />);
  const [isBadValidate, setIsBadValidate] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onClickEye = () => {
    if (dataFormat === TypeDataInput[TypeDataInput.password]) {
      setDataFormat(TypeDataInput[TypeDataInput.text]);
      setPassIconEye(<EyeOpenIcon />);
    } else {
      setDataFormat(TypeDataInput[TypeDataInput.password]);
      setPassIconEye(<EyeCloseIcon />);
    }
  };

  const onChangeValue = (
    v: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setValueState(v.currentTarget.value);
    onChange && onChange(v.currentTarget.value);
    if (isValidate) {
      let func;
      if (validateFunc) {
        func = validateFunc;
      } else {
        func = validationFuncsMap.get(typeData);
      }

      let error = func && func(v.currentTarget.value);
      if (error) {
        setIsBadValidate(true);
        setErrorText(error);
      } else {
        setIsBadValidate(false);
      }
    }
  };

  useEffect(() => {
    setValueState(value || "");
  }, [value]);

  // if (typeData === TypeDataInput.date) {
  //   return (
  //     <div className={inputCN({ type: typeClass, badValidate: isBadValidate })}>
  //       {isBadValidate && <p data-title={errorText} className={inputCN('error')}>{errorText}</p>}
  //       <InputMask
  //         disabled={isDisable || undefined}
  //         id={id}
  //         value={valueState.toString()}
  //         onChange={(v: any) => {
  //           setValueState(v.target.value);
  //           onChange && onChange(v.target.value);
  //           if (isValidate) {
  //             let func = validationFuncsMap.get(typeData);
  //             let error = func && func(v.target.value);
  //             if (error) {
  //               setIsBadValidate(true);
  //               setErrorText(error);
  //             } else {
  //               setIsBadValidate(false);
  //             }
  //           }
  //         }}
  //         mask="99-99-9999"
  //         placeholder={placeholder}
  //       />
  //     </div>
  //   );
  // }
  // if (typeData === TypeDataInput.phone) {
  //   return (
  //     <div className={inputCN({ type: typeClass, badValidate: isBadValidate })}>
  //       {isBadValidate && <p data-title={errorText} className={inputCN('error')}>{errorText}</p>}
  //       <InputMask
  //         disabled={isDisable || undefined}
  //         id={id}
  //         value={valueState.toString()}
  //         onChange={(v: any) => {
  //           setValueState(v.target.value);
  //           onChange && onChange(v.target.value);
  //           if (isValidate) {
  //             let func = validationFuncsMap.get(typeData);
  //             let error = func && func(v.target.value);
  //             if (error) {
  //               setIsBadValidate(true);
  //               setErrorText(error);
  //             } else {
  //               setIsBadValidate(false);
  //             }
  //           }
  //         }}
  //         mask="+7 (999) 999 99-99"
  //         placeholder={placeholder}
  //       />
  //     </div>
  //   );
  // } else
  return (
    <div className={inputCN({ type: typeClass, badValidate: isBadValidate })}>
      {/* {isBadValidate && <p data-title={errorText} className={inputCN('error')}>{errorText}</p>} */}
      {icon && <div className={inputCN("icon")}>{icon}</div>}
      {typeView == TypeViewInput.longText ? (
        <textarea
          disabled={isDisable || undefined}
          value={valueState}
          placeholder={placeholder && placeholder}
          id={id}
          onChange={(v: React.FormEvent<HTMLTextAreaElement>) =>
            onChangeValue(v)
          }
        />
      ) : (
        <input
          disabled={isDisable || undefined}
          value={valueState}
          placeholder={placeholder && placeholder}
          id={id}
          type={dataFormat}
          onChange={(v: React.FormEvent<HTMLInputElement>) => onChangeValue(v)}
        ></input>
      )}

      {typeData === TypeDataInput.password && (
        <Button
          onClick={onClickEye}
          icon={passIconEye}
          size={ButtonSizes.small}
        />
      )}
    </div>
  );
};
