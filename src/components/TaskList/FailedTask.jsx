export default function FailedTask({ data }) {
    return (
        <div className="p-6 mx-4 rounded-lg shadow-lg w-[300px] h-[350px] text-white bg-red-500 flex flex-col justify-between flex-shrink-0">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-lg transition-colors duration-200">
                        {data.category}
                    </span>
                    <span className="text-sm">{data.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <p className="text-white">
                    {data.description}
                </p>
            </div>
            <span className="bg-red-500 text-center text-white font-semibold py-1 px-4 rounded-lg mt-auto">
                Failed
            </span>
        </div>
    );
}