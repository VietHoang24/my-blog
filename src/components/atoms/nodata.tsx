
const NoDataPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
            <img
                src={'/media/site/no-data-upset.gif'}
                alt={'Monkey throwing laptop aggressively'}
                loading={'lazy'}
                decoding={'async'}
                className={'mt-3'}
                style={{ maxWidth: 425 }}
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800">
                No results found
            </h2>
            <p className="mt-2 text-gray-600">
                We couldn’t find what you searched for. Try searching again.
            </p>
        </div>
    );
};

export default NoDataPage;
