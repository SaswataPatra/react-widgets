import PropTypes from "prop-types";
import className from "classnames";
import { twMerge } from 'tailwind-merge';
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  let baseClassName = className(rest.className,"flex items-center mr-1 px-3 py-1.5 my-4 text-white border", {
    "bg-blue-500 border-blue-500": primary,
    "bg-stone-950 border-zinc-950": secondary,
    "bg-green-500 border-green-500": success,
    "bg-yellow-500 border-yellow-500": warning,
    "bg-red-500 border-red-500": danger,
    "rounded-full" : rounded,
    "bg-white" : outline,
    "text-blue-500 " : outline && primary,
    "text-zinc-950 " : outline && secondary,
    "text-green-500 " : outline && success,
    "text-yellow-500 " : outline && warning,
    "text-red-500 " : outline && danger,

  });
  baseClassName = twMerge(baseClassName);
  return <button {...rest} className={baseClassName} >{children}</button>;
}
Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error("wrong variation");
    }
  },
};

export default Button;
