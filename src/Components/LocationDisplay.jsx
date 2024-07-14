const LocationDisplay = ({ status }) => {
    return <>
        <div className="text-white flex flex-col items-end mx-8 my-4 ">
            <h3 className="text-[5vw] lg:text-6xl font-light">{status.name}</h3>
            <h5 className="text-3xl font-semibold ">{status.countryCode}</h5>
        </div>
    </>
}
export default LocationDisplay