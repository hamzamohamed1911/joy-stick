
const BackgroundVideo = () => {


    return (
      <div className="flex justify-center items-center w-full h-full overflow-hidden my-8">
         <video controls className="max-w-5xl h-[472px]  object-cover rounded-lg">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    );
  };
  
  export default BackgroundVideo;
  