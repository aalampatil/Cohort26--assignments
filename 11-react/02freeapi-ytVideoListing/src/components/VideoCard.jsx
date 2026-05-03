// src/components/VideoCard.jsx

const VideoCard = ({ video }) => {
  const item = video.items;

  const thumbnail =
    item?.snippet?.thumbnails?.high?.url ||
    item?.snippet?.thumbnails?.medium?.url;

  return (
    <div className="cursor-pointer hover:scale-105 transition duration-200">
      <img
        src={thumbnail}
        alt={item?.snippet?.title}
        className="w-full rounded-lg"
      />

      <div className="flex mt-3 gap-3">
        {/* Channel Avatar (fallback placeholder) */}
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>

        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            {item?.snippet?.title}
          </h3>

          <p className="text-gray-500 text-xs">{item?.snippet?.channelTitle}</p>

          <p className="text-gray-500 text-xs">
            {Number(item?.statistics?.viewCount).toLocaleString()} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
