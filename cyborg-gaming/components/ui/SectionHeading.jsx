const SectionHeading = (props) => {
  return (
    <div>
      {props.items.map((content, index) => {
        return (
          <div key={index}>
            <h4>
              <span>{content.span}</span> {content.title}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default SectionHeading;
