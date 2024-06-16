const InfoBox = ({
  heading,
  children,
  bgClr = "bg-gray-100",
  textClr = "text-gray-800",
  btnInfo,
}) => {
  return (
    <div className={`${bgClr} p-6 rounded-lg shadow-md`}>
      <h2 className={` ${textClr} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textClr} mt-2 mb-4`}>{children}</p>
      <a
        href={btnInfo.link}
        className={`inline-block ${btnInfo.bgClr}  text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {btnInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
