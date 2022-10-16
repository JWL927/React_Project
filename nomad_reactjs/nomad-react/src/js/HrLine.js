const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: 1200
        }}
    />
);

export default ColoredLine;