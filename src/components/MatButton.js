import "./styles/MatButton.css"

function MatButton({mat}) {
  return (
    <>
      <div className="mat-btn">
        <p>{mat}</p>
      </div>
    </>
  );
}
export default MatButton;