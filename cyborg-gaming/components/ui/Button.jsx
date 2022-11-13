import Link from "next/link";

const Button = (props) => {
  return (
    <div>
      {props.items.map((content, index) => (
        <div key={index}>
          <button className="btn">
            <Link href={content.button.url}>{content.button.text}</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Button;
