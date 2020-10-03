export default function Surah({ data, index }) {
  return (
    <div className="shadow-sm hover:shadow-md transition duration-300 border border-gray-300 py-5 px-4 my-3 bg-white flex justify-between">
      <span className="self-center bg-blue-700 text-white inline-block py-1 px-2 text-sm">
        {index}
      </span>
      <span className="block text-arabic text-black text-2xl" lang="ar">
        {data.name.short}
      </span>
      <div className="text-right">
        <span className="block">{data.name.transliteration.id}</span>
        <span className="block text-gray-700 text-sm ">
          {data.name.translation.id}
        </span>
        <span className="block text-blue-700 text-sm ">
          {data.numberOfVerses}
          {" ayat "}
        </span>
      </div>
    </div>
  );
}
