export default function InputTailwind({ label, invalid, ...props }) {
    return (
        <p>
            <label>{label}</label>
            <input {...props} />
        </p>
    );
}
