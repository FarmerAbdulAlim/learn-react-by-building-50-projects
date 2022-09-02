export default function CheckBox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
}
