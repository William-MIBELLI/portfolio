const Pixel = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
        >
            <path
            width='300px'
            height='100px'
                d="m 0 0 l 40 0 l 0 11 l 11 0 l 0 11 l 11 0 l 0 -11 l 11 0 l 0 11 l -11 0 l 0 11 l -11 0 l 0 -11 l -11 0 l 0 -11 l -40 0 l 0 -11 z "
                fill="white"
                stroke="black"
                strokeWidth="1"
            />
        </svg>
    );
};
export default Pixel
