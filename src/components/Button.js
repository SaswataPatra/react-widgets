import PropTypes from "prop-types";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  let baseClassName = className("px-3 py-1.5 my-4 text-white border", {
    "bg-blue-500": primary,
    "bg-stone-950": secondary,
    "bg-green-500": success,
    "bg-yellow-500": warning,
    "bg-red-500": danger,
  });
  return <button className={baseClassName}>{children}</button>;
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
