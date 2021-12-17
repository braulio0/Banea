import Head from "next/head";

const Map = () => {
  return (
    <iframe 
    className="shadow-lg mb-3 bg-white rounded"
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120493.84257056678!2d-99.12069835361275!3d19.30702650693737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfondas!5e0!3m2!1ses-419!2smx!4v1639689011425!5m2!1ses-419!2smx"
      style={{
        width: "100%",
        height: "100vh",
        allowfullscreen: "",
        loading: "lazy",
      }}
    ></iframe>
  );
};
export default Map;
