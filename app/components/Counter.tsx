// Static figure (count-up animation removed for a calmer, less dynamic feel).
export default function Counter({ value, unit }: { value: number; unit?: string }) {
  return (
    <span>
      {value.toLocaleString("en-US")}
      {unit ? <small>{unit}</small> : null}
    </span>
  );
}
