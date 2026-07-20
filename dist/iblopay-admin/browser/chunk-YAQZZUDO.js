import {
  AUTH_CONSTANTS
} from "./chunk-E42ILUAC.js";

// src/app/modules/auth/validators/email.validator.ts
function phoneValidator() {
  return (control) => {
    const value = control.value;
    if (!value)
      return null;
    const cleaned = value.replace(/[\s-]/g, "");
    if (!AUTH_CONSTANTS.PHONE_PATTERN.test(cleaned)) {
      return { phoneFormat: "Le format du num\xE9ro de t\xE9l\xE9phone est invalide" };
    }
    return null;
  };
}
function emailValidator() {
  return (control) => {
    const value = control.value;
    if (!value)
      return null;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
      return { emailFormat: "Le format de l'email est invalide" };
    }
    return null;
  };
}
function otpValidator() {
  return (control) => {
    const value = control.value;
    if (!value)
      return null;
    const isDigitsOnly = /^\d+$/.test(value);
    if (!isDigitsOnly) {
      return { otpFormat: "Le code OTP doit contenir uniquement des chiffres" };
    }
    if (value.length !== AUTH_CONSTANTS.OTP_LENGTH) {
      return { otpLength: `Le code OTP doit contenir ${AUTH_CONSTANTS.OTP_LENGTH} chiffres` };
    }
    return null;
  };
}
function cniValidator() {
  return (control) => {
    const value = control.value;
    if (!value)
      return null;
    if (value.length < 5 || value.length > 30) {
      return { cniFormat: "Le num\xE9ro CNI doit contenir entre 5 et 30 caract\xE8res" };
    }
    return null;
  };
}

export {
  phoneValidator,
  emailValidator,
  otpValidator,
  cniValidator
};
//# sourceMappingURL=chunk-YAQZZUDO.js.map
