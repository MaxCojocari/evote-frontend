import classes from "./styles.module.css";

export default function SupportText({ content }: { content: string }) {
  return (
    <div className={classes.supportText}>
      <p>{content}</p>
    </div>
  );
}
