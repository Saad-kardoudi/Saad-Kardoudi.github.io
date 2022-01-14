import File from "../component/File";
const SandBox = () => {
  return (
    <div className="sandbox">
      <File
        title="Dashbored.html"
        full={true}
        to={process.env.PUBLIC_URL + "/files/SandBox/Dashbored/index.html"}
        tabIn="5"
        id="1"
      />
    </div>
  );
};

export default SandBox;
