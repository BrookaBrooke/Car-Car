const carVideo = require('./ImagesAndVideos/pexel-car-video.mp4');

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management, check all of your Inventory, Appointments, and Sales here!
        </p>
      </div>
      <video src={carVideo} muted autoPlay loop width="1090" />
    </div>
  );
}


export default MainPage;
